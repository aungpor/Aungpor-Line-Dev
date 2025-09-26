import { IMaxcardDiscount } from "interface/maxcard.interface";
import { ISubPackage, ITravelPackageDetail } from "interface/travel.interface";

const useGetPackageDetailUtils = (
  selectedPackage: ISubPackage[],
  packageData: ITravelPackageDetail,
  deliveryPrice: number,
  maxcardDiscount?: IMaxcardDiscount,
) => {
  const getPackageOrderTotalPrice = () => {
    const totalPrice = selectedPackage.reduce((prev, curr) => {
      const {
        select_value,
        sub_package_price,
        sub_package_price_after_discount,
      } = curr;

      const amount = select_value ?? 0;
      const price = sub_package_price_after_discount ?? sub_package_price;
      return prev + amount * price;
    }, 0);

    if (!totalPrice) {
      return 0;
    } else if (deliveryPrice > 0) {
      return totalPrice + deliveryPrice;
    } else {
      return totalPrice;
    }
  };

  const getPackageOrderActualPrice = () => {
    const actualPrice = selectedPackage.reduce((prev, curr) => {
      const { select_value, sub_package_price, sub_package_discount_percent } =
        curr;

      const amount = select_value ?? 0;

      if (!select_value) {
        return prev;
      }

      if (!sub_package_discount_percent && select_value) {
        return prev + amount * sub_package_price;
      }

      return prev + amount * (sub_package_price ?? 0);
    }, 0);

    if (!actualPrice) {
      return 0;
    } else if (deliveryPrice > 0) {
      return actualPrice + deliveryPrice;
    } else {
      return actualPrice;
    }
  };

  const getEnableTotalPrice = () => {
    let totalPrice = getPackageOrderTotalPrice();
    const actualPrice = getPackageOrderActualPrice();

    if (!!deliveryPrice) {
      totalPrice - deliveryPrice;
    }
    return actualPrice != totalPrice;
  };

  const getPriceTextColor = () => {
    let totalPrice = getPackageOrderTotalPrice();
    const actualPrice = getPackageOrderActualPrice();

    if (!!deliveryPrice) {
      totalPrice - deliveryPrice;
    }

    if (!totalPrice) {
      return "text-[#c7c7c7]";
    } else if (actualPrice != totalPrice) {
      return "text-[#303030]";
    } else {
      return "text-[#303030]";
    }
  };

  const getButtonText = () => {
    const totalPrice = getPackageOrderTotalPrice();

    if (packageData?.package_is_expire || !packageData?.package_stock) {
      return "สินค้าหมด";
    } else if (!totalPrice) {
      return "เลือกแพ็กเกจ";
    } else if (totalPrice) {
      return "ซื้อแพ็กเกจ";
    } else {
      return "เลือกแพ็กเกจ";
    }
  };

  const getDisabledPackageButton = () => {
    return !packageData?.package_stock || packageData?.package_is_expire;
  };

  const getDiscountMaxcardPrice = (deliveryPrice = 0) => {
    if (!maxcardDiscount) return 0;
    let totalPrice = getPackageOrderTotalPrice();

    if (deliveryPrice) totalPrice -= deliveryPrice;

    let maxcardValue = maxcardDiscount.MaxCardConfigDiscountList.length
      ? maxcardDiscount.MaxCardConfigDiscountList[0]
      : maxcardDiscount.MaxCardDefaultDiscount;

    if (!maxcardValue) return 0;

    const maxcardDiscountPercent = maxcardValue?.maxcard_discount_percent;

    const maxcardDiscountPerMonthUses = maxcardValue.discount_per_month_maximum;

    let discountInBath: number = totalPrice * (maxcardDiscountPercent / 100);
    discountInBath = Math.ceil(+discountInBath);

    if (discountInBath > maxcardDiscountPerMonthUses)
      return maxcardDiscountPerMonthUses;

    return discountInBath;
  };

  const getDiscountMaxcardPriceDefault = (deliveryPrice = 0) => {
    let totalPrice = getPackageOrderTotalPrice();

    if (deliveryPrice) totalPrice -= deliveryPrice;

    const maxcardDiscountPercent = 8;

    const maxcardDiscountPerMonthUses = 500;

    let discountInBath: number = totalPrice * (maxcardDiscountPercent / 100);
    discountInBath = Math.ceil(+discountInBath);

    if (discountInBath > maxcardDiscountPerMonthUses)
      return maxcardDiscountPerMonthUses;

    return discountInBath;
  };

  // const getDiscountMaxcardPriceWithDelivery = () => {
  //   return getDiscountMaxcardPrice(de)
  // };

  return {
    buttonText: getButtonText(),
    textPriceColor: getPriceTextColor(),
    isEnableTotalPrice: getEnableTotalPrice(),
    packageTotalPrice: getPackageOrderTotalPrice(),
    packageActualPrice: getPackageOrderActualPrice(),
    isDisabledOrderButton: getDisabledPackageButton(),
    maxcardDiscountPrice: getDiscountMaxcardPrice(),
    maxcardDiscountPriceTotal: getDiscountMaxcardPrice(deliveryPrice),
    maxcardDiscountPriceTotalDefaul:
      getDiscountMaxcardPriceDefault(deliveryPrice),
  };
};

export default useGetPackageDetailUtils;
