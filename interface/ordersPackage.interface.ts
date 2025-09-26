import {
  MY_ORDERS_STATUS,
  SHOP_PACKAGE_STATUS,
} from "constants/enum/component";
import { Key } from "react";
import { IPackageBusinessTimes } from "./package.interface";

export type IMyOrderPackage = IMyOrderUserPackage | IMyOrderShopPackage;
export interface IMyOrderUserPackage {
  booking_id: string;
  image_profile: string;
  image_url_profile: string;
  package_name: string;
  shop_name: string;
  location_package: string;
  package_transportation_places_id: string;
  receipt_no: string;
  booking_code: string;
  sub_package: IMyOrderUsingSubPackage;
}

export interface IMyOrderShopPackage extends IMyOrderUserPackage {
  last_use_date: string;
  status: SHOP_PACKAGE_STATUS;
  isPackageExpire: boolean;
  sub_package: IMyOrderUsingSubPackage;
  user_title_name_th?: string;
  user_title_name_en?: string;
  first_name: string;
  last_name: string;
  full_name: string;
}

export interface IMyOrderUsingSubPackage {
  count_list: number;
  count_package: number;
  list: IUsingSubPackage[];
}

export interface IUsingSubPackage {
  booking_item_id: string;
  sub_package_id: string;
  sub_package_name: string;
  is_expire: boolean;
  usage_count: number;
  use_count?: number;
  expire_date: string;
}

export interface IAdditionalService {
  name: string;
  icon: string;
}

export interface IHistoryPurchaseDetail {
  use_product_transaction_item_id: string;
  use_product_transaction_id: string;
  booking_item_id: string;
  booking_item_use_count: number;
  sub_product_id: string;
  sub_package_name: string;
}

export interface IMyOrderHistoryPurchase {
  use_product_transaction_id: string;
  use_date: string;
  history_purchase_detail: IHistoryPurchaseDetail[];
}

export interface ISubPackageExpire {
  sub_package_name: string;
  expire_date: string;
  expire_text: string;
}

export interface IMyOrderPackageDetail {
  package_id: string;
  package_name: string;
  maxmu_package_id?: string;
  image_profile: string;
  image_url_profile: string;
  package_image_profile: string;
  shop_id: string;
  shop_name: string;
  package_desc: string;
  package_conditions_using: string;
  package_transportation_places_id: string;
  location_text: string;
  suitable_for_and_gender: string;
  sub_package: ISubPackageItem[];
  discount: number;
  maxmu_detail: string;
  maxmu_image: string[];
  amount_total: number;
  service_all: IAdditionalService[];
  open_datetime: IShopBussinessDate[];
  location_desc: string;
  latitude: number;
  longitude: number;
  address: string;
  remark: string;
  travelRoute: string[];
  history_purchase: IMyOrderHistoryPurchase[];
  receipt_no: string;
  booking_code: string;
  transfer_date: string;
  last_use_date: string | undefined;
  status: string;
  file_url: string;
  sub_pacakge_expire: ISubPackageExpire[];
  discount_maxcard_redeem_point_total_value: string | null;
  discount_maxcard_plus_type: string | null;
  discount_maxcard_plus_percent: string | null;
  discount_maxcard_plus_total_value: string | null;
  package_type_id: string;

  location: string;
  totalPrice: number;
  package_activity_time_hours: string;
  package_activity_time_minutes: string;
  location_name: string;
  location_travel: string;
  location_address: string;
  additionalService: string[];
  packageConditions: string[];
  is_can_show_button_review: boolean;
  booking_id: string;
  review_properties: IReviewProperties;
  is_same_business_time_all: boolean;
  is_voucher_package_type: boolean;
  delivery_fee: string;
}

export interface IReviewProperties {
  status: string;
  is_reviewed: boolean;
  is_start_use: boolean;
  is_used_sold_out: boolean;
  is_over_30_day_after_last_used: boolean;
  is_over_30_day_after_last_package_expire: boolean;
  is_over_30_day_after_last_sub_package_expire: boolean;
  is_over_30_day_after_main_package_expire: boolean;
  booking_noti_for_review_status_read: boolean;
  is_show_popup_noti_review: boolean;
  popup_noti_msg: string | undefined;
}
export interface ISubPackageItem {
  sub_package_id: string;
  sub_package_name: string;
  sub_package_activity_time: string;
  sub_package_expire: string;
  sub_package_desc: string;
  quantity: number;
  amount: number;
  expire_date: string;
  expire_text: string;
  isPurchaseDetail: boolean;
  sub_pacakge_expire: string;
  voucher_code?: string;
}

export interface IShopBussinessDate {
  opendatetimes_id: string;
  opendatetime_id: string;
  shopweekday_id: string;
  shopweekday_name: string;
  open_time: string;
  close_time: string;
  is_open_24_hour: boolean;
}

export interface IOrderPackageDetail {
  packageName: string;
  shopName: string;
  location: string;
  packageImages: string;
  packageDiscount: number;
  totalPrice: number;
  packageStatus: MY_ORDERS_STATUS;
  travelRoute: string[];
  packageItems: IPackageItemDetail[];
  packageConditions: string[];
  additionalService: string[];
  remark: string[];

  package_desc: string;
  shop_openDateTimes: IPackageBusinessTimes[];
  location_name: string;
  location_address: string;
  location_travel: string;

  package_activity_time_day?: string;
  package_activity_time_hours?: string;
  package_activity_time_minutes?: string;
}

export interface IPackageItemDetail {
  id: number;
  name: string;
  amount: number;
  price: number;
  descriptions?: string;
}

export interface IPackageDetail {
  key: Key;
  packageName: string;
  amount: number;
}

export interface IUsedSubPackageForm {
  usedSubPackage: IUsedSubPackage[];
}

export interface IUsedSubPackage {
  id: string;
  bookingItemId: string;
  name: string;
  maxAmount: number;
  amount: number;
  isExpire: boolean;
  expireDate: string;
}
