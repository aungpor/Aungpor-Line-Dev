import { Form, FormInstance } from "antd";
import { IBookingPackageStorage } from "interface/booking.interface";
import {
  IPackageDiscountSummary,
  IPaymentSummaryForm,
} from "interface/payment.interface";
import { useMemo } from "react";
import useBookingStore from "stores/useBookingStore";
import { shallow } from "zustand/shallow";

export const useGetPaymentOrderDetail = (
  form: FormInstance<IPaymentSummaryForm> | undefined,
) => {
  const formValues = Form.useWatch<IPaymentSummaryForm | undefined>([], form);

  const { couponData, paymentOrder, paymentDiscount, paymentPackageList } =
    useBookingStore(
      (state) => ({
        couponData: state.couponData,
        paymentOrder: state.paymentOrder,
        paymentDiscount: state.paymentDiscount,
        paymentPackageList: state.paymentPackageList,
      }),
      shallow,
    );

  const { MaxCardDefaultDiscount } = paymentDiscount ?? {};

  const packageValidCoupon = couponData?.packageIdListValidPackageIdCondition;
  const isAcceptMaxPoint = !!couponData?.is_use_with_redeem_maxpoint;
  const isAcceptMaxCard = !!couponData?.is_use_with_discount_maxplus;

  //* Utils Calculated Functions
  const getPackageDiscountList = () => {
    const packageValidCoupon = couponData?.packageIdListValidPackageIdCondition;

    const discountedList = defaultPackageList.filter(({ packageId }) =>
      packageValidCoupon?.includes(packageId),
    );

    const nonDiscountedList = defaultPackageList.filter(
      ({ packageId }) => !packageValidCoupon?.includes(packageId),
    );

    return { discountedList, nonDiscountedList };
  };

  const getPackageTotalPrice = (
    defaultPackageList: IBookingPackageStorage[],
  ) => {
    return defaultPackageList.reduce((acc, order) => acc + order.totalPrice, 0);
  };

  const getTotalPackageDiscountedPrice = () => {
    const { discountedList, nonDiscountedList } = getPackageDiscountList();
    const totalDiscountedPrice = getPackageTotalPrice(discountedList);
    const totalNonDiscountedPrice = getPackageTotalPrice(nonDiscountedList);
    return { totalDiscountedPrice, totalNonDiscountedPrice };
  };

  const getConfigDiscountPackage = (packageId: string) => {
    return formValues?.maxPointConfigDiscount
      ?.filter((value) => value.checked)
      .find((value) => value.packageId === packageId);
  };

  //* Get default package list that not have package discount
  const defaultPackageList = useMemo(() => {
    return paymentPackageList.filter(({ packageDiscount }) => !packageDiscount);
  }, [paymentPackageList]);

  //* Get specific package list that config discount
  const specificPackageList = useMemo(() => {
    return paymentPackageList.filter(({ packageDiscount }) => {
      return (packageDiscount?.maxcard_discount_percent ?? 0) > 0;
    });
  }, [paymentPackageList]);

  //* Get a coupon discount price depending on the total price.
  const couponDiscountPrice = useMemo(() => {
    const couponDiscount = couponData?.coupon_discount_group_total_value ?? 0;
    const packageValidCoupon = couponData?.packageIdListValidPackageIdCondition;

    if (!couponDiscount) return 0;

    if (packageValidCoupon?.length) {
      const { discountedList } = getPackageDiscountList();
      const totalPrice = getPackageTotalPrice(discountedList);
      return totalPrice >= couponDiscount ? couponDiscount : totalPrice;
    } else {
      const totalPrice = getPackageTotalPrice(defaultPackageList);
      return totalPrice >= couponDiscount ? couponDiscount : totalPrice;
    }
  }, [couponData, defaultPackageList]);

  //* Get the total price after applying the coupon discount to calculate max points.
  const discountedCouponPrice = useMemo(() => {
    const { totalDiscountedPrice, totalNonDiscountedPrice } =
      getTotalPackageDiscountedPrice();

    //* 1.Simple case
    if (!packageValidCoupon?.length) {
      const totalPrice = getPackageTotalPrice(defaultPackageList);
      return totalPrice - couponDiscountPrice;
    }

    //* 2.Coupon specific packageId
    if (!!packageValidCoupon?.length && isAcceptMaxPoint && isAcceptMaxCard) {
      const discountedPrice = totalDiscountedPrice - couponDiscountPrice;
      return discountedPrice + totalNonDiscountedPrice;
    }

    //* 3.Coupon specific packageId and can't used maxpoint
    //* 4.Coupon specific packageId and can't used maxcard
    //* 5.Coupon specific packageId and can't used maxpoint & maxcard
    return totalNonDiscountedPrice;
  }, [couponData, defaultPackageList, couponDiscountPrice]);

  //* Get the total price after applying the coupon and maxpoint discount to calculate maxcard discount
  const discountedMaxPointPrice = useMemo(() => {
    const { maxPointDefaultDiscount } = formValues ?? {};
    const maxPointDiscount = maxPointDefaultDiscount?.discount ?? 0;
    const { totalDiscountedPrice, totalNonDiscountedPrice } =
      getTotalPackageDiscountedPrice();

    //* 1.Simple case
    if (!packageValidCoupon?.length) {
      const discountedPrice = discountedCouponPrice - maxPointDiscount;
      return discountedPrice;
    }

    //* 2.Coupon specific packageId
    if (packageValidCoupon?.length && isAcceptMaxPoint && isAcceptMaxCard) {
      const discountedPrice = discountedCouponPrice - maxPointDiscount;
      return discountedPrice;
    }

    //* 3.Coupon specific packageId and can't used maxpoint
    if (packageValidCoupon?.length && !isAcceptMaxPoint && isAcceptMaxCard) {
      const discountedPrice = totalDiscountedPrice - couponDiscountPrice;
      const unDiscountedPrice = totalNonDiscountedPrice - maxPointDiscount;
      return discountedPrice + unDiscountedPrice;
    }

    //* 4.Coupon specific packageId and can't used maxcard
    //* 5.Coupon specific packageId and can't used maxpoint & maxcard
    const unDiscountedPrice = totalNonDiscountedPrice - maxPointDiscount;
    return unDiscountedPrice;
  }, [discountedCouponPrice, formValues?.maxPointDefaultDiscount]);

  //* Get a maxcard discount price
  const maxCardDefaultDiscountPrice = useMemo(() => {
    const { maxCardDefaultDiscount } = formValues ?? {};
    const { maxcard_discount_percent, discount_per_month_used } =
      MaxCardDefaultDiscount ?? {};
    const discountPercent = maxcard_discount_percent ?? 0;
    const usedDiscount = discount_per_month_used ?? 0;

    const discountedPrice = Math.ceil(
      discountedMaxPointPrice * (discountPercent / 100),
    );

    //* if used per month less than discounted price return used per month
    if (!maxCardDefaultDiscount?.checked) {
      return 0;
    }
    return usedDiscount < discountedPrice ? usedDiscount : discountedPrice;
  }, [
    discountedMaxPointPrice,
    MaxCardDefaultDiscount,
    formValues?.maxCardDefaultDiscount,
  ]);

  const maxCardSpecificDiscountPrice = useMemo(() => {
    return specificPackageList.reduce((acc, item) => {
      const { packageId, packageDiscount } = item;
      const order = getConfigDiscountPackage(packageId);
      const totalPrice = item.totalPrice - (order?.discount ?? 0);
      const discountPercent = packageDiscount?.maxcard_discount_percent ?? 8;
      const discountedPrice = Math.ceil(totalPrice * (discountPercent / 100));
      return acc + discountedPrice;
    }, 0);
  }, [specificPackageList, formValues?.maxPointConfigDiscount]);

  const getDefaultMaxPointDiscount = () => {
    const { maxPointDefaultDiscount } = formValues ?? {};
    const defaultDiscount = maxPointDefaultDiscount?.discount ?? 0;

    const defaultTotalPrice = getPackageTotalPrice(defaultPackageList);
    return defaultDiscount > defaultTotalPrice
      ? defaultTotalPrice
      : defaultDiscount;
  };
  //* Total package payment summary
  const totalMaxPointDiscountPrice = useMemo(() => {
    const { maxPointConfigDiscount } = formValues ?? {};

    const defaultMaxPointDiscount = getDefaultMaxPointDiscount();
    const specificMaxPointDiscount =
      maxPointConfigDiscount
        ?.filter(({ checked }) => checked)
        ?.reduce((total, { discount }) => total + (discount ?? 0), 0) ?? 0;

    return defaultMaxPointDiscount + specificMaxPointDiscount;
  }, [formValues?.maxPointDefaultDiscount, formValues?.maxPointConfigDiscount]);

  const totalMaxCardDiscountPrice = useMemo(() => {
    return maxCardDefaultDiscountPrice + maxCardSpecificDiscountPrice;
  }, [maxCardDefaultDiscountPrice, maxCardSpecificDiscountPrice]);

  const nettPackagePrice = useMemo(() => {
    const totalPrice = paymentOrder.orderNetPrice;

    const discount =
      couponDiscountPrice +
      totalMaxPointDiscountPrice +
      totalMaxCardDiscountPrice;

    const nettTotalPrice = totalPrice > discount ? totalPrice - discount : 0;

    if (!!paymentOrder.posDefaultDiscount) {
      return totalPrice;
    }
    return nettTotalPrice;
  }, [
    couponDiscountPrice,
    totalMaxPointDiscountPrice,
    totalMaxCardDiscountPrice,
    paymentOrder.orderTotalPrice,
    paymentOrder.orderNetPrice,
  ]);

  const summaryDiscount: IPackageDiscountSummary = (() => {
    const defaultMaxPoint = getDefaultMaxPointDiscount();
    const defaultMaxPointDiscount =
      defaultMaxPoint > 0 ? defaultMaxPoint : undefined;

    return {
      couponData,
      nettPackagePrice,
      couponDiscountPrice,
      defaultMaxPointDiscount,
      maxCardDefaultDiscountPrice,
      maxCardSpecificDiscountPrice,
    };
  })();

  return {
    formValues,
    defaultPackageList,
    specificPackageList,
    couponDiscountPrice,
    discountedCouponPrice,
    discountedMaxPointPrice,
    maxCardDefaultDiscountPrice,
    totalMaxPointDiscountPrice,
    totalMaxCardDiscountPrice,
    nettPackagePrice,
    summaryDiscount,
  };
};
