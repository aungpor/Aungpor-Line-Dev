import {
  AFFILIATE_PACKAGE_CATEGORY_TABS,
  BOOKING_SUBPACKAGE_TYPE,
  COMPETITION_TYPE,
  MANAGE_PACKAGE_TYPE,
  MY_ORDERS_FILTER_BY,
  MY_ORDERS_VOUCHER_STATUS,
  PACKAGE_USING_TYPE,
  PRODUCT_TYPE_ID,
} from "constants/enum/component";
import { YSC_API_CONFIG_NAME, YSC_UNIVERSITY } from "constants/youngScout";
import dayjs from "dayjs";
import {
  IAddCouponDiscount,
  IAddDiscountPaymentBody,
  IBookingDetail,
  IBookingForm,
  IBookingGenlinkDetailSchema,
  IBookingItem,
  IBookingList,
  IBookingOrderBody,
  IBookingOrderStorage,
  IBookingPackageStorage,
  IBookingSubPackageForm,
  IBookingSubPackageStorage,
  IMaxMuRequiredField,
  IPosDefaultDiscount,
  IUpdateUserAddressBody,
} from "interface/booking.interface";
import {
  ICartDetailList,
  ICartDetailProductList,
  ISubPackageForCart,
} from "interface/cart.interface";
import {
  ICommerceProfile,
  ICommerceProfileSchema,
} from "interface/commerce.interface";
import { IPagination } from "interface/common.interface";
import {
  IRegisterLeadSeminarPackage,
  IRegisterLeadSeminarPackageSchema,
} from "interface/component.interface";
import { IUserBookingAddress, IUserContact } from "interface/ecommerce";
import { IMaxCardBookingDiscount } from "interface/maxcard.interface";
import {
  IConfirmQrcodeBody,
  IGenerateQrcodeBody,
  IHistoryPurchaseParams,
  IMyOrdersSearchForm,
  IUseSubPackageList,
} from "interface/myOrders.interface";
import {
  IMyOrderPackage,
  IMyOrderPackageDetail,
  IMyOrderShopPackage,
  IUsedSubPackage,
  IUsedSubPackageForm,
} from "interface/ordersPackage.interface";
import {
  IPackageDiscountSummary,
  IPaymentSummaryForm,
} from "interface/payment.interface";
import { ITravelPackageDetail } from "interface/travel.interface";
import {
  IAffiliateDashboardParams,
  ISearchAffiliatePackageParams,
  IUserAffiliateManagementForm,
} from "interface/userAffiliate.interface";
import {
  IBookingPackageParams,
  ICompetitionTeam,
  IYSCMasterConfig,
  IYSCRecommendUniversity,
} from "interface/youngScout.interface";
import { getDateOptionsByDateLength } from "./dateTime";

export const getYSCBookingBody = (params: IBookingPackageParams) => {
  return {
    bookUserContact: {
      user_contact_id: null,
      first_name: "-",
      last_name: "-",
      id_card: null,
      birth_date: null,
      email: params.email,
      tel: "-",
      user_title_id: null,
    },
    booking_item: [
      {
        product_id: params.packageId,
        product_type_id: 3,
        quantity: params.amount,
      },
    ],
    need_tax_invoice: false,
    booking_total_price: params.totalPrice,
    booking_remark: "",
    accept_terms: true,
  };
};

export const getInitUseSubPakcageFrom = (orderPackage: IMyOrderPackage) => {
  return orderPackage.sub_package?.list?.map<IUsedSubPackage>((item) => {
    return {
      id: item.sub_package_id,
      bookingItemId: item.booking_item_id,
      name: item.sub_package_name,
      maxAmount: item.usage_count,
      amount: item?.use_count ?? 0,
      isExpire: item?.is_expire,
      expireDate: item.expire_date,
    };
  });
};

export const getHistoryPurchaseParams = (
  value: IMyOrdersSearchForm,
  historyType: string,
  pagination: IPagination,
): IHistoryPurchaseParams => {
  const ordeyBy =
    historyType === MY_ORDERS_VOUCHER_STATUS.DEFAULT
      ? value.searchFilter === MY_ORDERS_FILTER_BY.STATUS
        ? "1"
        : "2"
      : value.searchFilter;

  return {
    pageNumber: pagination.page,
    rowsOfPage: pagination.pageSize,
    searchText: value.searchText,
    historyType,
    ordeyBy: ordeyBy as MY_ORDERS_FILTER_BY,
  };
};

export const transformPagination = (page?: number, pageSize?: number) => {
  return { page: page ?? 1, pageSize: pageSize ?? 12 };
};

export const getGenerateQrcodeBody = (
  bookingId: string,
  values: IUsedSubPackageForm,
): IGenerateQrcodeBody => {
  return {
    booking_id: bookingId,
    use_list: getUsePackageListByFormValue(values.usedSubPackage),
  };
};

export const getBookingParamsWithQRCodeURL = (url: string) => {
  const pathURL = url.split("/").slice(-1)?.[0];
  const params = pathURL?.split("?");
  return {
    bookingRef: params?.[0],
    type: params?.[1].split("=")?.[1],
  };
};

export const transformMyOrderShopPackage = (
  shopPackage: IMyOrderShopPackage | undefined,
) => {
  if (!shopPackage) return null;
  return {
    ...shopPackage,
    isPackageExpire:
      shopPackage.sub_package?.list?.every((e) => e.is_expire) ?? null,
  };
};

export const transformMyOrderPackageDetail = (
  packageDetail: IMyOrderPackageDetail | undefined,
): IMyOrderPackageDetail | null => {
  if (!packageDetail) return null;

  const { maxmu_image, open_datetime } = packageDetail;
  const maxmuImage = maxmu_image as unknown as string | undefined;

  const firstOpenTime = open_datetime[0].open_time;
  const firstCloseTime = open_datetime[0].close_time;

  const isSamePackageOpenDate = open_datetime.every(
    ({ open_time, close_time }) =>
      open_time === firstOpenTime && close_time === firstCloseTime,
  );

  return {
    ...packageDetail,
    maxmu_image: maxmuImage?.split(",") ?? [],
    travelRoute: transfromTagListToArrayString(packageDetail.location_desc),
    is_same_business_time_all: isSamePackageOpenDate,
    is_voucher_package_type:
      packageDetail.package_type_id === MANAGE_PACKAGE_TYPE.E_VOUCHER,
  };
};

export const transfromTagListToArrayString = (location: string | undefined) => {
  if (location) {
    const regex = /<li>(.*?)<\/li>/g;
    const items: string[] = [];
    let match: RegExpExecArray | null;

    while ((match = regex.exec(location)) !== null) {
      items.push(match[1]);
    }
    return items;
  }
  return [""];
};

export const getConfirmMyOrderQrCodeBody = (
  bookingRef: string,
  bookingId: string | undefined,
  type: PACKAGE_USING_TYPE,
  values: IUsedSubPackageForm,
): IConfirmQrcodeBody => {
  if (type === PACKAGE_USING_TYPE.BY_MEMBER) {
    return {
      use_product_transaction_ref_code: bookingRef,
      use_type: type,
    };
  } else {
    return {
      use_type: type,
      booking_id: bookingId ?? "",
      use_list: getUsePackageListByFormValue(values.usedSubPackage),
    };
  }
};

export const getUsePackageListByFormValue = (values: IUsedSubPackage[]) => {
  return values
    .filter(({ amount }) => amount > 0)
    .map<IUseSubPackageList>((value) => {
      return {
        booking_item_id: value.bookingItemId,
        sub_package_id: value.id,
        sub_package_name: value.name,
        use_count: value.amount,
      };
    });
};

export const getCompetitionTypeText = (type: COMPETITION_TYPE) => {
  switch (type) {
    case COMPETITION_TYPE.WINNER:
      return "รางวัลชนะเลิศ";
    case COMPETITION_TYPE.FIRST_RUNNER:
      return "รองชนะเลิศอันดับ 1";
    case COMPETITION_TYPE.SECOND_RUNNER:
      return "รองชนะเลิศอันดับ 2";
    case COMPETITION_TYPE.HONORABLE_MENTION:
      return "รางวัลชมเชย 2 รางวัล";
  }
};

export const getImageListFromMasterConfig = (master: IYSCMasterConfig[]) => {
  return master.map((value) => value.config_value);
};

export const getCompetitionTeamData = (
  defalutValue: ICompetitionTeam[],
  mapValue: Map<string, COMPETITION_TYPE>,
  configValue: IYSCMasterConfig[],
) => {
  return defalutValue.map((value) => {
    const imageURL = configValue?.find(({ type }) => {
      return mapValue.get(type ?? "") === value.type;
    })?.config_value;
    return { ...value, imageSrc: imageURL ?? "" };
  });
};
// YSC_API_CONFIG_NAME
export const getMasterConfigNameFromType = (type: YSC_UNIVERSITY) => {
  switch (type) {
    case YSC_UNIVERSITY.FIRST_GEN:
      return YSC_API_CONFIG_NAME.FIRST_GALLERY;
    case YSC_UNIVERSITY.SUT:
      return YSC_API_CONFIG_NAME.SUT_GALLERY;
    case YSC_UNIVERSITY.CU:
      return YSC_API_CONFIG_NAME.CU_GALLERY;
    default:
      return YSC_API_CONFIG_NAME.ABOUT_YSC;
  }
};

export const getYSCRecommendUniversityBody = (
  params: IYSCRecommendUniversity,
) => {
  return {
    university_name: params.universityName,
    type: params.type,
  };
};

export const getRegisterSeminarBody = (
  params: IRegisterLeadSeminarPackage,
): IRegisterLeadSeminarPackageSchema => {
  return {
    contact_name: params.name,
    contact_phone: params.phoneNumber,
    contact_email: params.email,
    contact_lineid: params.lineId ?? "",
    company_name: params.companyName ?? "",
    interested_activities: params.activityList.sort().join(","),
    additional_details: params.remark ?? "",
  };
};

export const transformCommerceProfileSchema = (
  profileList: ICommerceProfileSchema[],
) => {
  return profileList?.map<ICommerceProfile>((value) => {
    return {
      shopId: value.shop_id,
      shopName: value.shop_name,
      imageURL: value?.image_profile ?? "/images/logo-patois.png",
    };
  });
};

export const getSalesReportDateOptions = (firstDatePartner: Date | string) => {
  const currDate = dayjs().set("date", 1);
  const firstStartDate = dayjs(firstDatePartner).set("date", 1);

  const startOptions = getDateOptionsByDateLength(firstStartDate, currDate);
  const endOptions = getDateOptionsByDateLength(currDate, currDate);

  return { startOptions, endOptions };
};

export const getSentLoginOTPBody = (phoneNumber: string, times = 0) => {
  return {
    otp: {
      otp_to: phoneNumber,
      otp_module: "PATOIS-LOGIN",
      otp_status: `Sending OTP confirm${times}`,
      patois_maxcard_id: "0",
    },
  };
};

export const getSentLoginBody = (
  authenID: string,
  password: string,
  provider: "tel" | "email",
) => {
  return {
    redirect: false,
    username: authenID,
    password,
    provider,
    campaign_data: "",
  };
};

export enum MY_ORDERS_STATUS {
  READY_TO_USE = "1",
  USED_UP = "2",
  EXPIRED = "3",
}

export enum MY_ORDERS_OTHER_STATUS {
  IN_PROGRESS = "4",
  PROGRESSED = "5",
}

export const getAffiliateManagementParams = (
  value: IUserAffiliateManagementForm,
  pagination: IPagination,
  filterPackageType: AFFILIATE_PACKAGE_CATEGORY_TABS,
): ISearchAffiliatePackageParams => {
  return {
    search_text: value.searchInput,
    search_tab: filterPackageType,
    province_id: value.filterProvinceId !== "0" ? value.filterProvinceId : "",
    category_id: value.filterCategories.join(","),
    order_by: value.filterOrderBy,
    pageNumber: pagination.page,
    rowsOfPage: pagination.pageSize,
  };
};

export const getUserAffiliateDashboardParams = (
  filterType: string,
  date?: moment.Moment,
): IAffiliateDashboardParams => {
  return {
    filter_type: filterType,
    month: date ? date.format("MM") : "",
    year: date ? date.format("YYYY") : "",
  };
};

export const getBookingInitialForm = (
  userContact: IUserContact | undefined,
  userAddress: IUserBookingAddress[],
) => {
  const vatAddress = userAddress.find(
    (address) => address.address_type === "VAT",
  );
  const invoiceAddress = userAddress.find(
    (address) => address.address_type === "SEND_VAT",
  );

  const useFromInvoice = vatAddress?.need_address_tax_invoice ?? false;

  return {
    firstName: userContact?.first_name,
    lastName: userContact?.last_name,
    phoneNumber: userContact?.tel,
    email: userContact?.email,
    citizenId: userContact?.id_card,
    taxFirstName: vatAddress?.first_name,
    taxLastName: vatAddress?.last_name,
    taxAddress: vatAddress?.address,
    taxZipCode: vatAddress?.postcode,
    taxProvince: vatAddress?.province,
    taxDistrict: vatAddress?.distinct,
    taxSubDistrict: vatAddress?.subdistrict,
    isUseTaxInvoiceAddress: useFromInvoice,
    taxInvoiceName: useFromInvoice
      ? vatAddress?.name_recipient
      : invoiceAddress?.name_recipient,
    taxInvoiceAddress: useFromInvoice
      ? vatAddress?.address
      : invoiceAddress?.address,
    taxInvoiceZipCode: useFromInvoice
      ? vatAddress?.postcode
      : invoiceAddress?.postcode,
    taxInvoiceProvince: useFromInvoice
      ? vatAddress?.province
      : invoiceAddress?.province,
    taxInvoiceDistrict: useFromInvoice
      ? vatAddress?.distinct
      : invoiceAddress?.distinct,
    taxInvoiceSubDistrict: useFromInvoice
      ? vatAddress?.subdistrict
      : invoiceAddress?.subdistrict,
    taxInvoiceEmail: invoiceAddress?.send_tax_invoice_email,
    taxInvoiceType: vatAddress?.address_type_vat_type_id ?? "1",
    taxDeliveryAddressType:
      invoiceAddress?.send_method_tax_invoice ?? "address",
  };
};

export const getDiscountFromBookingOrder = (value: IBookingPackageStorage) => {
  const { packageDiscount } = value;
  const point = packageDiscount?.point ?? 100;
  const discountPerPoint = packageDiscount?.discount_value_bath ?? 30;
  return { point, discountPerPoint };
};

export const convertTypeIdToSubPackageType = (packageTypeId: string) => {
  if (packageTypeId === "3" || packageTypeId === "5") {
    return BOOKING_SUBPACKAGE_TYPE.MAXMU;
  } else if (packageTypeId === "7") {
    return BOOKING_SUBPACKAGE_TYPE.MAXNITRON;
  } else {
    return BOOKING_SUBPACKAGE_TYPE.DEFAULT;
  }
};

export const transformCartToSubPackageBooking = (
  item: ICartDetailProductList,
): IBookingSubPackageStorage => {
  const subPackageType = convertTypeIdToSubPackageType(item.package_type_id);
  return {
    productTypeId: item.product_type_id,
    packageId: item.product_id,
    packageName: item.package_name,
    subPackageId: item?.sub_product_id ?? "",
    subPackageTypeId: item.package_type_id,
    subPackageName: item.sub_package_name,
    subPackageImage: item.image_url_profile,
    subPackageType: subPackageType,
    subPackageRemark: item.remark,
    cartId: item?.cart_id ?? null,
    amount: item.quantity,
    expireText: item.sub_package_expire_text,
    durationText: item.sub_package_time,
    subPackagePrice: item.price,
    subPackageNetPrice: item.quantity * item.price,
    cost_type: item.cost_type,
    gp_percentage: item.gp_percentage,
    agent_rate_baht: item.agent_rate_baht,
  };
};

export const transformPosDefaultDiscount = (
  acc: IPosDefaultDiscount | undefined,
  item: IPosDefaultDiscount | undefined,
): IPosDefaultDiscount | undefined => {
  const { maxCardDiscount, couponDiscount, maxPointDiscount } = acc ?? {};
  const {
    maxCardType: itemMaxCardType,
    maxCardDiscount: itemMaxCardDiscount,
    couponDiscount: itemCouponDiscount,
    maxPointDiscount: itemMaxPointDiscount,
  } = item ?? {};

  const isUnDiscounted =
    !itemMaxCardDiscount && !itemCouponDiscount && !itemMaxPointDiscount;

  if (!acc && isUnDiscounted) {
    return;
  }

  if (isUnDiscounted) {
    return {
      maxCardType: acc?.maxCardType ?? "",
      maxCardDiscount: acc?.maxCardDiscount ?? 0,
      couponDiscount: acc?.couponDiscount ?? 0,
      maxPointDiscount: acc?.maxPointDiscount ?? 0,
    };
  }

  return {
    maxCardType: acc?.maxCardType ?? itemMaxCardType ?? "",
    maxCardDiscount: (maxCardDiscount ?? 0) + (itemMaxCardDiscount ?? 0),
    couponDiscount: (couponDiscount ?? 0) + (itemCouponDiscount ?? 0),
    maxPointDiscount: (maxPointDiscount ?? 0) + (itemMaxPointDiscount ?? 0),
  };
};

export const transformCartToBookingOrder = (
  packageList: IBookingPackageStorage[],
) => {
  const bookingOrder = packageList.reduce<IBookingOrderStorage>(
    (acc, item) => {
      const { posDefaultDiscount: accDiscount } = acc;
      const { posDefaultDiscount: itemDiscount } = item;
      let deliveryFee = item?.deliveryFee ? +item?.deliveryFee : 0;

      const itemTotalPrice = item.subPackageList.reduce(
        (prev, curr) => prev + curr.subPackageNetPrice,
        0,
      );

      //* Total price package before Calculated discount
      acc.orderTotalPrice += itemTotalPrice;
      //* Nett price package after backend Calculated discount
      acc.orderNetPrice += item.totalPrice;

      acc.deliveryFee = (acc?.deliveryFee ?? 0) + deliveryFee;

      const posDefaultDiscount = transformPosDefaultDiscount(
        accDiscount,
        itemDiscount,
      );

      acc.posDefaultDiscount = posDefaultDiscount;
      acc.bookingOrderList.push(...item.subPackageList);
      return acc;
    },
    {
      orderTotalPrice: 0,
      orderNetPrice: 0,
      bookingOrderList: [],
      deliveryFee: 0,
    },
  );
  return bookingOrder;
};

export const convertPackageTypeToBookingType = (booking: IBookingDetail) => {
  if (booking.package_type_id === "3" || booking.package_type_id === "5") {
    return BOOKING_SUBPACKAGE_TYPE.MAXMU;
  } else if (booking.package_type_id === "7") {
    return BOOKING_SUBPACKAGE_TYPE.MAXNITRON;
  } else {
    return BOOKING_SUBPACKAGE_TYPE.DEFAULT;
  }
};

export const transformSubPackageToPaymentList = (booking: IBookingDetail) => {
  return booking.item.map<IBookingSubPackageStorage>((subPackage) => {
    const subPackageType = convertPackageTypeToBookingType(booking);

    return {
      productTypeId: booking.product_type_id,
      packageId: booking.package_id,
      packageName: booking.package_name,
      subPackageId: subPackage.sub_product_id,
      //TODO: Fix defect
      subPackageTypeId: "subPackage.",
      subPackageName: subPackage.product_name,
      subPackageImage: subPackage.image_url_profile,
      subPackageType: subPackageType,
      cartId: null,
      amount: subPackage.quantity,
      expireText: subPackage.sub_package_expire_text,
      durationText: subPackage.sub_package_time,
      subPackagePrice: subPackage.unit_price,
      subPackageNetPrice: subPackage.amount,
      maxmuRequiredField: null,
      subPackageRemark: subPackage.remark_to_shop ?? "",
      maxnitronRemark: subPackage.shipping_address,
      maxmuPackageDetail: {
        gender: subPackage.gender_name,
        birthDay: subPackage.day_name,
        timeOfBirth: subPackage.birth_time_name,
        dateOfBirth: subPackage.maxmu_birth_date,
        zodiacYear: subPackage.chinese_zodiac_name,
        worshiperName: subPackage.worshipper_name,
        enhanceSuccess: subPackage.title_need_success_name,
        mattersToConsult: subPackage.title_want_consult,
        wishRequest: subPackage.wish,
        dedicateName: "",
        wordsOfForgiveness: "",
        address: subPackage.maxmu_address,
        subDistrict: subPackage.maxmu_subdistrict,
        distinct: subPackage.maxmu_distinct,
        province: subPackage.maxmu_province,
        postcode: subPackage.maxmu_postcode,
        lineId: "",
      },
    };
  });
};

export const transformBookingToPaymentList = (
  bookingList: IBookingDetail[],
  paymentDiscount: IMaxCardBookingDiscount | undefined,
) => {
  const { MaxCardConfigDiscountList } = paymentDiscount ?? {};

  return bookingList.map<IBookingPackageStorage>((booking) => {
    const subPackageList = transformSubPackageToPaymentList(booking);
    const configDiscount =
      MaxCardConfigDiscountList?.find(
        (e) => e.package_id === booking.package_id,
      ) ?? null;

    const deliveryFee = Number(booking.delivery_fee ?? 0);

    return {
      bookingId: booking.booking_id,
      transactionId: booking.booking_transaction_id,
      packageId: booking.package_id,
      packageName: booking.package_name,
      packageTypeId: booking.package_type_id ?? "",
      packageType: booking.item?.[0]?.type ?? "",
      totalPrice: booking.booking_total_price - deliveryFee,
      subPackageList: subPackageList,
      packageDiscount: configDiscount,
      deliveryFee: booking.delivery_fee,
      posDefaultDiscount: {
        maxCardType: booking.discount_maxcard_plus_type ?? "",
        maxCardDiscount: booking.discount_maxcard_plus_total_value ?? 0,
        couponDiscount: booking.coupon_discount_group_patois_total_value ?? 0,
        maxPointDiscount: Number(
          booking?.discount_maxcard_redeem_point_total_value ?? 0,
        ),
      },
    };
  });
};

export const transformCartToBookingList = (
  cartItems: ICartDetailList[],
  maxmuRequiredField?: IMaxMuRequiredField | null,
  deliveryFee?: number | null,
) => {
  const productList = cartItems.flatMap((item) => item.productList);

  return productList.reduce<IBookingPackageStorage[]>((acc, item) => {
    const { product_id } = item;
    const currPackage = acc.find(({ packageId }) => packageId === product_id);

    if (!currPackage) {
      const subPackage = transformCartToSubPackageBooking(item);
      acc.push({
        packageId: item.product_id,
        packageName: item.package_name,
        packageTypeId: item.product_type_id,
        packageType: item.type,
        totalPrice: subPackage.subPackageNetPrice,
        subPackageList: [subPackage],
        packageDiscount: null,
        maxmuRequiredField: maxmuRequiredField,
        deliveryFee: deliveryFee ? deliveryFee : null,
      });
      return acc;
    }
    const subPackage = transformCartToSubPackageBooking(item);
    currPackage.subPackageList.push(subPackage);
    currPackage.totalPrice += subPackage.subPackageNetPrice;

    return acc;
  }, []);
};

export const transformPackageToBookingMaxmu = (
  packageData: ITravelPackageDetail,
) => {
  if (!packageData?.maxmu_package_id) return undefined;
  return {
    requiredGender: packageData.is_requir_gender ?? false,
    requiredBirthDay: packageData.is_requir_birth_day ?? false,
    requiredTimeOfBirth: packageData.is_requir_time_of_birth ?? false,
    requiredDateOfBirth: packageData.is_requir_birth_date ?? false,
    requiredZodiacYear: packageData.is_requir_zodiac_year ?? false,
    requiredWorshiperName: packageData.is_requir_worshiper ?? false,
    requiredEnhanceSuccess: packageData.is_requir_success ?? false,
    requiredDedicateName: packageData.is_requir_discuss ?? false,
    requiredMattersToConsult: packageData.is_requir_discuss ?? false,
    requiredWishRequest: packageData.is_requir_wish ?? false,
    requiredWordsOfForgiveness:
      packageData.is_requir_prayer_or_forgiveness_text ?? false,
    requiredAddress: packageData.is_requir_address ?? false,
    requiredLineId: packageData.is_requir_line_id ?? false,
  };
};

export const transformPackageDataToCartData = (data: ISubPackageForCart[]) => {
  if (!data.length) return [];
  let sortData: any = data.map((val) => {
    console.log("val", val);
    return {
      cart_id: null,
      product_id: val.package_id,
      sub_product_id: val.sub_package_id,
      quantity: val.select_value,
      create_date: val.create_date,
      create_by: val.create_by,
      update_date: val.update_date,
      update_by: val.update_by,
      shop_id: val.shop_id,
      shop_name: val.shop_name,
      package_name: val.package_name,
      image_url_profile: val.image_url_profile,
      sub_package_stock: val.sub_package_stock,
      sub_package_name: val.sub_package_name,
      price: val.sub_package_price_after_discount ?? val.sub_package_price,
      is_expire: val.isExpired,
      type: null,
      sub_package_time: val.sub_package_time,
      sub_package_expire_text: val.sub_package_expire_text,
      product_type_id: val?.product_type_id ?? PRODUCT_TYPE_ID.PACKAGE,
      package_type_id: val.package_type_id,
      cost_type: val.cost_type,
      gp_percentage: val.gp_percentage,
      agent_rate_baht: val.agent_rate_baht,
    };
  });

  return [
    {
      shop_name: data[0]?.shop_name,
      shop_id: data[0]?.shop_id,
      productList: sortData,
    },
  ];
};

export const addPrefixTaxAddress = (
  text: string | undefined,
  prefix: string,
) => {
  if (!text) return;

  if (text.startsWith(prefix)) {
    return text;
  } else {
    return `${prefix} ${text}`;
  }
};

export const getTransformDistrictAddress = (
  province: string | undefined,
  district: string | undefined,
  subDistrict: string | undefined,
) => {
  const isBangkok = province?.includes("กรุงเทพ");
  const districtPrefix = isBangkok ? "เขต" : "อำเภอ";
  const subDistrictPrefix = isBangkok ? "แขวง" : "ตำบล";
  return {
    district: addPrefixTaxAddress(district, districtPrefix),
    subDistrict: addPrefixTaxAddress(subDistrict, subDistrictPrefix),
  };
};

export const getBookingMaxmuItemBody = (
  value: IBookingSubPackageForm | undefined,
) => {
  let birthDate: string | undefined;

  const { maxmuDayOfBirth, maxmuMonthOfBirth, maxmuYearOfBirth } = value ?? {};
  if (maxmuDayOfBirth && maxmuMonthOfBirth && maxmuYearOfBirth) {
    birthDate = `${maxmuDayOfBirth}/${maxmuMonthOfBirth}/${Number(maxmuYearOfBirth) - 543}`;
  }

  const { district, subDistrict } = getTransformDistrictAddress(
    value?.maxmuProvince,
    value?.maxmuDistrict,
    value?.maxmuSubDistrict,
  );

  return {
    birth_date: birthDate,
    gender_id: value?.maxmuGender,
    day_id: value?.maxmuBirthDay,
    birth_time: value?.maxmuTimeOfBirth,
    chinese_zodiac_id: value?.maxmuZodiacYear,
    worshipper_name: value?.maxmuWorshiperName,
    title_need_success_id: value?.maxmuEnhanceSuccess,
    title_want_consult: value?.maxmuMattersToConsult,
    wish: value?.maxmuWishRequest,
    address: value?.maxmuAddress,
    distinct: district,
    subdistrict: subDistrict,
    province: value?.maxmuProvince,
    postcode: value?.maxmuZipCode,
    donated_to_name: value?.maxmuDedicateName,
    prayer_or_forgiveness_text: value?.maxmuWordsOfForgiveness,
  };
};

export const getBookingPackageBody = (
  value: IBookingForm,
  bookingPackageList: IBookingPackageStorage[],
  affiliateId?: string,
  genLinkDetail?: IBookingGenlinkDetailSchema,
): IBookingOrderBody => {
  let bookingTotalPrice = 0;
  let deliveryFee = 0;

  const booking_list = bookingPackageList.map<IBookingList>((item) => {
    bookingTotalPrice += item.totalPrice;

    const booking_item = item.subPackageList.map<IBookingItem>((subPackage) => {
      const packageForm = value.bookingSubPackageList.find(
        (item) => item.subPackageId === subPackage.subPackageId,
      );

      const {
        deliveryType,
        deliveryAddress,
        deliveryProvince,
        deliveryDistrict,
        deliverySubDistrict,
        deliveryZipCode,
      } = packageForm ?? {};

      const bookingMaxmuItem = getBookingMaxmuItemBody(packageForm);

      const { district, subDistrict } = getTransformDistrictAddress(
        deliveryProvince,
        deliveryDistrict,
        deliverySubDistrict,
      );

      const isMaxnitron =
        subPackage.subPackageType === BOOKING_SUBPACKAGE_TYPE.MAXNITRON;

      const shippingAddress =
        deliveryType === "2"
          ? "มารับพัสดุด้วยตนเอง CW Tower ฝ่ายขาย ชั้น 46"
          : `${deliveryAddress} ${district} ${subDistrict} ${deliveryProvince} ${deliveryZipCode}`;

      const maxnitronAddress = {
        shipping_address: isMaxnitron ? shippingAddress : undefined,
        is_self_pickup: isMaxnitron ? deliveryType === "2" : undefined,
      };

      return {
        package_id: item.packageId,
        product_id: subPackage.subPackageId,
        quantity: subPackage.amount,
        //* In the future, this will be changed to PRODUCT_TYPE_ID.PACKAGE to subPackage.productTypeId
        product_type_id: PRODUCT_TYPE_ID.PACKAGE,
        cart_id: subPackage.cartId ?? undefined,
        remark_to_shop: packageForm?.packageRemark,
        cost_type: subPackage.cost_type,
        gp_percentage:
          subPackage.cost_type == 1 ? subPackage.gp_percentage : null,
        agent_rate_baht:
          subPackage.cost_type == 2 ? subPackage.agent_rate_baht : null,
        ...bookingMaxmuItem,
        ...maxnitronAddress,
      };
    });

    //* Check maxnitron if every package is self pickup could be free delivery
    const isMaxnitronSelfPickup = value.bookingSubPackageList.every(
      ({ deliveryType }) => deliveryType === "2",
    );

    if (!isMaxnitronSelfPickup) {
      deliveryFee += Number(item.deliveryFee ?? 0) || 0;
    }

    const itemDeliveryFee = !isMaxnitronSelfPickup
      ? Number(item.deliveryFee ?? 0)
      : 0;

    return {
      package_type_id: item.packageTypeId,
      booking_total_price: item.totalPrice + itemDeliveryFee,
      user_affiliate_ref_code: affiliateId,
      booking_item: booking_item,
      deliveryFee: itemDeliveryFee,
    };
  });

  const { district, subDistrict } = getTransformDistrictAddress(
    value?.taxProvince,
    value?.taxDistrict,
    value?.taxSubDistrict,
  );

  const { district: invoiceDistrict, subDistrict: invoiceSubDistrict } =
    getTransformDistrictAddress(
      value?.taxInvoiceProvince,
      value?.taxInvoiceDistrict,
      value?.taxInvoiceSubDistrict,
    );

  return {
    booking_total_price: bookingTotalPrice + deliveryFee,
    booking_list_genlink_id: genLinkDetail?.booking_genlink_id,
    genlink_ref_code: genLinkDetail?.genlink_ref_code,
    accept_terms: value.isAcceptTerms,
    need_tax_invoice: !!value.isNeedTaxInvoice,
    deliveryFee: deliveryFee,
    //TODO: --------Disscuss with BE----------
    need_address_shipping: !!value.isUseTaxInvoiceAddress,
    checked_shipping_type: value.taxDeliveryAddressType,
    //TODO: ----------------------------------
    bookUserContact: {
      user_contact_id: null,
      first_name: value.firstName,
      last_name: value.lastName,
      tel: value.phoneNumber,
      email: value.email,
      line_id: value.lineId,
      id_card: value.citizenId,
    },
    vatAddress: {
      booking_vat_user_address_id: null,
      address: value.taxAddress,
      distinct: district,
      subdistrict: subDistrict,
      province: value.taxProvince,
      postcode: value.taxZipCode,
      vatTypeId: value.taxInvoiceType,
      companyName: value.companyName,
      branchNo: value.branchName,
      firstname: value.taxFirstName,
      lastname: value.taxLastName,
      shippingname: value.taxInvoiceName,
      shippingaddress: value.taxInvoiceAddress,
      shippingzidCode: value.taxInvoiceZipCode,
      shippingprovince: value.taxInvoiceProvince,
      shippingdistrict: invoiceDistrict,
      shppingsubDistrict: invoiceSubDistrict,
      shippingmail: value.taxInvoiceEmail,
    },
    booking_list: booking_list,
  };
};

export const getUpdateUserAddressBody = (
  value: IBookingForm,
  vatAddress: IUserBookingAddress,
  invoiceAddress?: IUserBookingAddress,
): IUpdateUserAddressBody => {
  const { district, subDistrict } = getTransformDistrictAddress(
    value?.taxProvince,
    value?.taxDistrict,
    value?.taxSubDistrict,
  );

  const { district: invoiceDistrict, subDistrict: invoiceSubDistrict } =
    getTransformDistrictAddress(
      value?.taxInvoiceProvince,
      value?.taxInvoiceDistrict,
      value?.taxInvoiceSubDistrict,
    );

  return {
    first_name: value.taxFirstName || "",
    last_name: value.taxLastName || "",
    user_address_id: vatAddress?.user_address_id,
    address: value.taxAddress,
    distinct: district,
    subdistrict: subDistrict,
    province: value.taxProvince,
    postcode: value.taxZipCode,
    vat_type_id: value.taxInvoiceType?.toString() ?? "1",
    vat_company_name: value.companyName,
    vat_branch_no: value.branchName,
    need_address_shipping: !!value.isUseTaxInvoiceAddress,
    checked_shipping_type: value.taxDeliveryAddressType,
    vat_addresses_shipping_id: invoiceAddress?.send_tax_invoice_address_id,
    booking_vat_address_shipping: {
      shippingname: value.taxInvoiceName,
      shippingaddress: value.taxInvoiceAddress,
      shippingzidCode: value.taxInvoiceZipCode,
      shippingprovince: value.taxInvoiceProvince,
      shippingdistrict: invoiceDistrict,
      shppingsubDistrict: invoiceSubDistrict,
      shippingmail: value.taxInvoiceEmail,
    },
  };
};

export const getRegisterCouponDiscountBody = (
  value: IPaymentSummaryForm,
  paymentPackageList: IBookingPackageStorage[],
  summaryDiscount: IPackageDiscountSummary,
  paymentOrder: IBookingOrderStorage,
  paymentDiscount?: IMaxCardBookingDiscount,
): IAddDiscountPaymentBody => {
  const couponDiscount: IAddCouponDiscount[] = [];
  const {
    maxCardDefaultDiscount,
    maxPointDefaultDiscount,
    maxPointConfigDiscount,
  } = value;
  const {
    couponData,
    nettPackagePrice,
    couponDiscountPrice,
    defaultMaxPointDiscount,
    maxCardDefaultDiscountPrice,
  } = summaryDiscount;

  const { MaxCardDefaultDiscount, MaxCardConfigDiscountList } =
    paymentDiscount ?? {};

  const defaultPackage = paymentPackageList.filter(({ packageDiscount }) => {
    return !packageDiscount;
  });

  const configPackage = paymentPackageList.filter(({ packageDiscount }) => {
    return (packageDiscount?.maxcard_discount_percent ?? 0) > 0;
  });

  console.log(String(maxPointDefaultDiscount?.usedPoint) == "");

  if (!!defaultPackage) {
    const defaultDiscountBody = defaultPackage.map<IAddCouponDiscount>(
      (value, index) => {
        const { bookingId, subPackageList } = value;
        const isFirstItem = index === 0;
        return {
          booking_id: bookingId ?? "",
          discount_phone_no: null,
          discount_maxcard_no:
            isFirstItem && paymentDiscount ? paymentDiscount.CardNo : null,
          discount_maxcard_id: isFirstItem
            ? (paymentDiscount?.maxcard_id ?? 0)
            : null,
          discount_maxcard_plus_type: isFirstItem
            ? (paymentDiscount?.CardType ?? null)
            : null,
          discount_maxcard_plus_total_value: isFirstItem
            ? maxCardDefaultDiscountPrice > 0
              ? maxCardDefaultDiscountPrice
              : null
            : null,
          discount_maxcard_plus_percent:
            isFirstItem && maxCardDefaultDiscount?.checked
              ? (MaxCardDefaultDiscount?.maxcard_discount_percent ?? null)
              : null,
          discount_maxcard_redeem_point_amount: isFirstItem
            ? String(maxPointDefaultDiscount?.usedPoint) == "" ||
              maxPointDefaultDiscount?.usedPoint == null
              ? null
              : maxPointDefaultDiscount.usedPoint
            : null,

          discount_maxcard_redeem_point_total_value: isFirstItem
            ? (defaultMaxPointDiscount ?? null)
            : null,
          coupon_discount_group_patois_id: isFirstItem
            ? (couponData?.campaign_coupon_id ?? null)
            : null,
          coupon_discount_group_patois_code: isFirstItem
            ? (couponData?.coupon_discount_group_code ?? null)
            : null,
          coupon_discount_group_patois_total_value: isFirstItem
            ? couponDiscountPrice > 0
              ? couponDiscountPrice
              : null
            : null,
          sub_package_id: subPackageList.map(
            (subPackage) => subPackage.subPackageId,
          ),
        };
      },
    );
    couponDiscount.push(...defaultDiscountBody);
  }

  if (!!(MaxCardConfigDiscountList?.length ?? 0)) {
    const configDiscountBody = configPackage.map<IAddCouponDiscount>(
      (value) => {
        const { packageDiscount } = value;
        let maxCardDiscount = 0;

        const maxPoint = maxPointConfigDiscount?.find(
          ({ packageId }) => packageId === value.packageId,
        );

        if (!!packageDiscount?.maxcard_discount_percent) {
          const totalPrice = value.totalPrice - (maxPoint?.discount ?? 0);
          const maxCardPercent = packageDiscount?.maxcard_discount_percent;
          maxCardDiscount = Math.ceil(totalPrice * (maxCardPercent / 100));
        }
        return {
          booking_id: value.bookingId ?? "",
          discount_phone_no: null,
          discount_maxcard_no: paymentDiscount?.CardNo ?? null,
          discount_maxcard_id: paymentDiscount?.maxcard_id ?? 0,
          discount_maxcard_plus_type: paymentDiscount?.CardType ?? null,
          discount_maxcard_plus_total_value: maxCardDiscount ?? null,
          discount_maxcard_plus_percent:
            packageDiscount?.maxcard_discount_percent ?? null,
          discount_maxcard_redeem_point_amount: maxPoint?.usedPoint ?? null,
          discount_maxcard_redeem_point_total_value: maxPoint?.discount ?? null,
          coupon_discount_group_patois_id: null,
          coupon_discount_group_patois_code: null,
          coupon_discount_group_patois_total_value: null,
          sub_package_id: value.subPackageList.map(
            (subPackage) => subPackage.subPackageId,
          ),
        };
      },
    );
    couponDiscount.push(...configDiscountBody);
  }

  const deliveryFee = paymentOrder?.deliveryFee ?? 0;

  return {
    booking_transaction_id: paymentPackageList?.[0].transactionId ?? "",
    booking_total_price: nettPackagePrice + deliveryFee,
    coupon_discount: couponDiscount,
  };
};
