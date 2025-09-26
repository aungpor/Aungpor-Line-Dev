export interface IGetSearchPackage {
  pageNumber: number;
  rowsOfPage?: number;
  order_by?: string;
  condition_price?: string;
  province_id?: string;
  district_id?: string;
  sub_district_id_list?: string;
  category_id_list?: string;
  open_day_id_list?: string;
  shop_id?: string;
  search_text?: string;
  is_online?: string;
  is_course?: string;
  suitable_for_id_list?: string | any[];
  special_services_id_list?: string;
  package_pets_option_id?: string;
  places_activities_id_list?: string;
  section?: string;
}

export interface IPackageActivity {
  package_activity_time_day?: string;
  package_activity_time_hours?: string;
  package_activity_time_minutes?: string;
}

export interface IPackageLocation {
  location_name: string;
  location_address: string;
  location_travel: string;
}

export interface IPackageBusinessTimes {
  shopweekday_name: string;
  open_time: string;
  close_time: string;
}

export interface IPackageReviewComment {
  comment_id: string;
  post_review_id: string;
  user_id: string;
  comment_text: string;
  images_id: any;
  active: boolean;
  quality: any;
  create_date: string;
  update_date: string;
  name: string;
  profile_pic_line: string;
  profile_pic_patois: any;
  user_secret: string;
  types: string;
  commentReply: any[];
  is_edited: boolean;
  review_by: string;
  shop_id: string;
}

export interface IPackageAffiliate {
  package_affiliate_id: string;
  package_affiliate_name: string;
  active: boolean;
  order_no: any;
  affiliate_icon: string;
  affiliate_icon_row: string;
  affiliate_type_id: string;
  icon_type: string;
  affiliate_link: string;
  affiliate_tab_type: string;
  link?: string;
}
export interface IPackagePriceDetail {
  package_multi_price: boolean;
  package_promotion: boolean;
  package_promotion_full_price: number;
  package_price: number;
}
