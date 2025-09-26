import { MY_ORDERS_FILTER_BY } from "constants/enum/component";

export interface IHistoryPurchase {
  countData: number;
  countExpireData: number;
  listData: IPackagePurchaseSchema[];
}

export interface IHistoryPurchaseParams {
  pageNumber: number;
  rowsOfPage: number;
  searchText: string;
  historyType: string;
  ordeyBy: MY_ORDERS_FILTER_BY;
}

export interface IPackagePurchaseSchema {
  booking_id: string;
  booking_item_id?: string;
  booking_ref_code: string | undefined;
  package_id: string;
  image_profile: string | undefined;
  image_url_profile: string | undefined;
  package_name: string;
  shop_name: string;
  location_package: string;
  transfer_date: string | undefined;
  expire_date: string;
  is_near_expire: string | undefined;
  count_expire_day: string | undefined;
  last_use_date: string | undefined;
  used_date: string | undefined;
  usage_count: number;
  package_type_id: string;
  package_transportation_places_id: string;
  is_can_show_button_review: boolean;
}

export interface IMyOrdersSearchForm {
  searchText: string;
  searchFilter: MY_ORDERS_FILTER_BY;
}

export interface IGenerateQrcodeBody {
  booking_id: string;
  use_list: IUseSubPackageList[];
}

export interface IGenerateQrcodeSchema {
  use_product_transaction_ref_code: string;
  create_date: string;
  use_list: IUseSubPackageList[];
}

export interface IUseSubPackageList {
  booking_item_id: string;
  sub_package_id: string;
  sub_package_name: string;
  use_count: number;
}

export type IConfirmQrcodeBody =
  | IConfirmMemberOrderBody
  | IConfirmNonMemberOrderBody;

export interface IConfirmMemberOrderBody {
  use_product_transaction_ref_code: string;
  use_type: string;
}

export interface IConfirmNonMemberOrderBody {
  use_type: string;
  booking_id: string;
  use_list: IUseSubPackageList[];
}
