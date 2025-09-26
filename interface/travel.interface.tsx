export interface ITravelPackage {
  package_id: string;
  package_name: string;
  package_image: string;
  package_stock: number;
  package_start: Date;
  package_end: Date;
  package_max_People: number;
  package_discount_percent?: string;
  package_price: number;
  package_price_format: string;
  package_price_discount_format?: string;
  package_price_total_format: string;
  package_category_name: string;
  travelName: string;
  image_list: string;
  image_url: string;
  location_travel: string;
  sale_count?: number;
  package_multi_price?: any;
  package_promotion_full_price?: any;
  package_location?: any;
  package_overview?: any;
  package_transportation_places_id?: any;
  package_promotion?: any;
  cntReview: number;
  total: number;
  package_type_id?: number;
  affiliate_link?: string;
  affiliate_type_id?: string;
  address?: string;
  affiliate_tab_type?: string;
  affiliate_icon?: string;
  affiliate_icon_row?: string;
  icon_type?: string;
  package_affiliate_name?: string;
}

export interface IPackageCard {
  package_id: string;
  package_name: string;
  package_image: string;
  package_stock: number;
  package_start: Date;
  package_end: Date;
  package_max_People: number;
  package_discount_percent?: string;
  package_price: number;
  package_price_format: string;
  package_price_discount_format?: string;
  package_price_total_format: string;
  package_category_name: string;
  travelName: string;
  image_list: string;
  image_url: string;
  location_travel: string;
  sale_count?: number;
  package_multi_price?: any;
  package_promotion_full_price?: any;
  package_location?: any;
  package_overview?: any;
  package_transportation_places_id?: any;
  package_promotion?: any;
  cntReview: number;
  total: number;
  package_type_id?: number;
  affiliate_link?: string;
  affiliate_type_id?: string;
  address?: string;
  affiliate_tab_type?: string;
  affiliate_icon?: string;
  affiliate_icon_row?: string;
  icon_type?: string;
}

export interface IShopTravelPackage {
  shop_id: string;
  shop_name: string;
  shop_desc: any;
  shop_overview: string;
  create_date: string;
  update_date: string;
  sale_count_product: number;
  image_profile: string;
  shop_category_name: string;
  shop_location: any;
}

export interface ITravelPackageDetail {
  favorite: boolean;
  saved_id: string;
  total: number;
  package_id: string;
  package_name: string;
  package_overview: string;
  package_desc: string;
  package_conditions_using: string;
  suitable_for_name: string;
  gender_name: string;
  package_stock: number;
  package_pets_option_id: string;
  package_pets_option_name: string;
  package_transportation_places_id: string;
  package_transportation_places_name: string;
  location_desc_package: string;
  location_desc_shop: string;
  remark: string;
  user_id: string;
  shop_id: string;
  shop_name: string;
  shop_image: string;
  package_price_format: any;
  package_price_discount_format: any;
  package_price_total_format: any;
  package_category_name: string;
  location_shop: string;
  location_id_shop: string;
  latitude_shop: number;
  longitude_shop: number;
  shop_address: string;
  location_package: string;
  location_id_package: string;
  latitude_package: number;
  longitude_package: number;
  package_address: string;
  package_tag: string;
  image_list: any;
  image_url: any;
  image_profile_list: any;
  image_profile_url: any;
  shop_active: boolean;
  shop_start_date: string;
  shop_end_date: string;
  package_image_url: any;
  sub_package: ISubPackage[];
  package_time: string;
  package_expire_time: string;
  categoryInfoList: ITravelPackageCategoryInfoList[];
  specialServicesInfoList: ITravelPackageSpecialServicesInfoList[];
  placesActivitiesInfo: ITravelPackagePlacesActivitiesInfo[];
  tagByPackageInfo: ITravelPackageTagByPackageInfo[];
  openDatetimeInfo: ITravelPackageOpenDatetimeInfo[];
  package_price?: any;
  product_type_id?: any;
  user_name?: any;
  package_max_People?: any;
  package_start?: any;
  package_end?: any;
  location_travel?: any;
  package_activity_time_day?: any;
  package_activity_time_hours?: any;
  package_activity_time_minutes?: any;
  user_image?: any;
  location_address?: any;
  location_name?: any;
  package_type_id: string;
  package_is_expire?: boolean;
  package_seo_desc?: string;
  is_requir_line_id?: boolean;
  is_requir_gender?: boolean;
  is_requir_birth_day?: boolean;
  is_requir_time_of_birth?: boolean;
  is_requir_birth_date?: boolean;
  is_requir_zodiac_year?: boolean;
  is_requir_worshiper?: boolean;
  is_requir_success?: boolean;
  is_requir_discuss?: boolean;
  is_requir_wish?: boolean;
  is_requir_address?: boolean;
  is_requir_donated_to_name?: boolean;
  is_requir_prayer_or_forgiveness_text?: boolean;
  maxmu_package_id: string;
  delivery_fee: number;
}

export interface ISubPackage {
  isExpired: boolean;
  sub_package_id: string;
  package_id: string;
  sub_package_name: string;
  sub_package_stock: number;
  sub_package_usage_count: number;
  sub_package_activity_time_id: any;
  sub_package_activity_time_hours?: number;
  sub_package_activity_time_minutes?: number;
  sub_package_activity_time_days?: number;
  sub_package_activity_time_nights?: number;
  sub_package_expire_options_id: string;
  sub_package_expire_first_day_payment?: number;
  sub_package_expire_first_day_use?: number;
  sub_package_expire_start_date?: string;
  sub_package_expire_end_date?: string;
  sub_package_price: number;
  sub_package_discount_percent: number;
  sub_package_discount?: number;
  sub_package_price_after_discount?: number;
  sub_package_desc: string;
  sub_package_image: any;
  sub_package_code: string;
  sub_package_ref_code: string;
  active: boolean;
  create_date: string;
  create_by: any;
  update_date: string;
  update_by: any;
  sub_package_sale_count: number;
  order_no: number;
  sub_package_expire_start_date_text?: string;
  sub_package_expire_start_date_text_shot?: string;
  sub_package_expire_end_date_text?: string;
  is_start_end_same_year: boolean;
  is_started: boolean;
  sub_package_time: string;
  sub_package_expire_text: string;
  select_value: number;
}

export interface ITravelPackageCategoryInfoList {
  package_category_id: string;
  package_category_name: string;
  package_category_desc: string;
  package_special_services_icon: string;
}

export interface ITravelPackageSpecialServicesInfoList {
  package_special_services_id: string;
  package_special_services_name: string;
  package_special_services_icon: string;
  order_no: number;
  active: boolean;
}

export interface ITravelPackagePlacesActivitiesInfo {
  package_places_activities_id: string;
  package_places_activities_name: string;
  package_places_activities_icon: string;
  active: boolean;
  order_no: number;
}

export interface ITravelPackageTagByPackageInfo {
  tag_id: string;
  tag_name: string;
}

export interface ITravelPackageOpenDatetimeInfo {
  opendatetimes_id: string;
  opendatetime_id: string;
  shopweekday_id: any;
  shopweekday_name: string;
  open_time: string;
  close_time: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  is_open_24_hour: boolean;
}

interface ITravelPackageDetailCategoryInfoList {
  package_category_desc: string;
  package_category_id: string;
  package_category_name: string;
  travelName: string;
  location_name: string;
  image_list: string;
  image_url: string;
  product_type_id: number;
  location_address: string;
  location_travel: string;
  package_provinces_id: string;
}

interface openDateTimes {
  opendatetime_id: string;
  shopweekday_id: string;
  shopweekday_name: string;
  open_time: string;
  close_time: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
}

export interface IPackageShopDetail {
  shop_id: string;
  shop_name: string;
  image_profile: string;
  opendatetime_id: string;
  shop_desc: string;
  location_desc: string;
  shop_location_desc: string;
  latitude: number;
  longitude: number;
  address: string;
  image_list: string;
  image_url: string;
  shop_category_name: string | "|";
  shop_openDateTimes: openDateTimes[];
}

export interface ITravelCategory {
  travel_category_id: string;
  travel_category_name: string;
  show_main_page: boolean;
  search_text: string;
  img_url: string;
  active: boolean;
  show_main_page_order_no: number;
  img_url_mobile: string;
}

export interface IsuitableFor {
  suitable_for_id: string;
  suitable_for_name: string;
  active: boolean;
  order_no: number;
}

export interface Ifacilities {
  other_services_id: string;
  other_services_name: string;
  active: boolean;
  order_no: number;
}

export interface IparkingService {
  parking_service_option_id: string;
  parking_service_option_name: string;
  active: boolean;
  order_no: number;
}

export interface IPetOption {
  pets_option_id: string;
  pets_option_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelTimePeriod {
  travel_time_period_id: string;
  travel_time_period_name: string;
  travel_time_period_desc: string;
  active: boolean;
  order_no: number;
}

export interface IPurposeOfTravel {
  purpose_of_travel_id: string;
  purpose_of_travel_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelingCompanion {
  traveling_companion_id: string;
  traveling_companion_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelPriceRange {
  travel_price_range_id: string;
  travel_price_range_name: string;
  travel_price_range_start: number;
  travel_price_range_end: number;
  active: boolean;
  order_no: number;
}

export interface ITravelReview {
  travel_id: string;
  location_id: string;
  travelName: string;
  prices: any;
  shopweekday_id: any;
  opening_time: any;
  closing_time: any;
  tel: string;
  travelBy: any;
  link: any;
  whatSuggest: any;
  images_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  view_count: string;
  active: boolean;
  opendatetime_id: string;
  email: string;
  line: string;
  facebook: string;
  tiktok: string;
  website: string;
  is_have_entrance_fee_Children: boolean;
  entrance_fee_Children_thai_price: any;
  entrance_fee_Children_foreign_price: any;
  is_have_entrance_fee_adults: boolean;
  entrance_fee_adults_thai_price: number;
  entrance_fee_adults_foreign_price: number;
  suitable_for_id: string;
  is_have_parking_service: boolean;
  is_have_room_service: boolean;
  is_have_room_service_price: boolean;
  pets_option_id: string;
  pets_option_name: string;
  is_merchant: boolean;
  travel_detail: string;
  travel_status_code: string;
  image_url: string;
  images_thumbnail_description: string;
  saved_id: any;
  latitude: number;
  longitude: number;
  favorite: boolean;
  types: string;
  location_name: string;
  traveling: string;
  facilities: string;
  atmosphere: string;
  worthiness: string;
  total: number;
  cntReview: number;
  suitable_for_name: string;
  categoryInfoList: ITravelReviewCategoryInfoList[];
  otherServiceInfoList: ITravelReviewOtherServiceInfoList[];
  parkingServoceOptionInfoList: ITravelReviewParkingServoceOptionInfoList[];
  travelOpenDatetimeInfoList: ITravelReviewTravelOpenDatetimeInfoList[];
  travelLocationInfo: ITravelReviewTravelLocationInfo[];
}

export interface ITravelReviewCategoryInfoList {
  travel_category_id: string;
  travel_category_name: string;
  show_main_page: boolean;
  search_text: string;
  img_url: string;
  active: boolean;
  show_main_page_order_no: number;
  img_url_mobile: string;
}

export interface ITravelReviewOtherServiceInfoList {
  other_services_id: string;
  other_services_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelReviewParkingServoceOptionInfoList {
  parking_service_option_id: string;
  parking_service_option_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelReviewTravelOpenDatetimeInfoList {
  opendatetimes_id: string;
  opendatetime_id: string;
  shopweekday_id: string;
  shopweekday_name: string;
  open_time: string;
  close_time: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  is_open_24_hour: boolean;
}

export interface ITravelReviewTravelLocationInfo {
  location_id: string;
  location_name: string;
  latitude: number;
  longitude: number;
  address: string;
  remark: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  subdistrict: string;
  distinct: string;
  province: string;
  country: string;
  address_input: string;
  address_output: string;
  shopName: any;
  importName: any;
  shop_id: any;
  active: number;
  postcode: string;
  road: any;
  home_address: any;
  provinces_id: string;
  district_id: any;
  sub_district_id: any;
}

export interface ITravelUserReview {
  travel_review_id: string;
  user_id: string;
  travel_id: string;
  review: string;
  created_at: string;
  updated_at: string;
  user_secret: string;
  name: string;
  profile_pic_line: string;
  profile_pic_patois: string;
  user_type: any;
  user_type_icon: any;
  traveling: string;
  facilities: string;
  atmosphere: string;
  worthiness: string;
  total: number;
  travel_review_like_id: any;
  post_review_love: boolean;
  post_review_like_count: number;
  comment_count: number;
  types: string;
  is_create_travel: boolean;
  Quality: string;
  img_count: number;
  quality_score: number;
  excellent_review: boolean;
  period_of_travel: string;
  period_of_travel_text: string;
  purpose_of_travel_id: string;
  purpose_of_travel_name: string;
  traveling_companion_id: string;
  traveling_companion_name: string;
  travel_price_range_id: string;
  travel_price_range_name: string;
  travelTimePeriodInfoList: ITravelUserReviewTimePeriodInfoList[];
  imageInfoList: ITravelUserReviewImageInfoList[];
}

export interface ITravelUserReviewTimePeriodInfoList {
  bind_travel_time_period_id: string;
  travel_time_period_id: string;
  travel_review_id: string;
  create_date: string;
  update_date: string;
  travel_time_period_name: string;
  travel_time_period_desc: string;
  active: boolean;
  order_no: number;
}

export interface ITravelUserReviewImageInfoList {
  images_id: string;
  fileName: string;
  fileExtensions: string;
  description: string;
  tag_id: any;
  img_alt: any;
  ref_id: string;
  ref_type: string;
  order_no: number;
  active: boolean;
  create_date: string;
  update_date: string;
  create_by: string;
  update_by: string;
  thumbnail_fileName?: string;
  thumbnail_description?: string;
}

export interface ITravelReview {
  travel_id: string;
  location_id: string;
  travelName: string;
  prices: any;
  shopweekday_id: any;
  opening_time: any;
  closing_time: any;
  tel: string;
  travelBy: any;
  link: any;
  whatSuggest: any;
  images_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  view_count: string;
  active: boolean;
  opendatetime_id: string;
  email: string;
  line: string;
  facebook: string;
  tiktok: string;
  website: string;
  is_have_entrance_fee_Children: boolean;
  entrance_fee_Children_thai_price: any;
  entrance_fee_Children_foreign_price: any;
  is_have_entrance_fee_adults: boolean;
  entrance_fee_adults_thai_price: number;
  entrance_fee_adults_foreign_price: number;
  suitable_for_id: string;
  is_have_parking_service: boolean;
  is_have_room_service: boolean;
  is_have_room_service_price: boolean;
  pets_option_id: string;
  pets_option_name: string;
  is_merchant: boolean;
  travel_detail: string;
  travel_status_code: string;
  image_url: string;
  images_thumbnail_description: string;
  saved_id: any;
  latitude: number;
  longitude: number;
  favorite: boolean;
  types: string;
  location_name: string;
  traveling: string;
  facilities: string;
  atmosphere: string;
  worthiness: string;
  total: number;
  cntReview: number;
  suitable_for_name: string;
  categoryInfoList: ITravelReviewCategoryInfoList[];
  otherServiceInfoList: ITravelReviewOtherServiceInfoList[];
  parkingServoceOptionInfoList: ITravelReviewParkingServoceOptionInfoList[];
  travelOpenDatetimeInfoList: ITravelReviewTravelOpenDatetimeInfoList[];
  travelLocationInfo: ITravelReviewTravelLocationInfo[];
}

export interface ITravelReviewCategoryInfoList {
  travel_category_id: string;
  travel_category_name: string;
  show_main_page: boolean;
  search_text: string;
  img_url: string;
  active: boolean;
  show_main_page_order_no: number;
  img_url_mobile: string;
}

export interface ITravelReviewOtherServiceInfoList {
  other_services_id: string;
  other_services_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelReviewParkingServoceOptionInfoList {
  parking_service_option_id: string;
  parking_service_option_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelReviewTravelOpenDatetimeInfoList {
  opendatetimes_id: string;
  opendatetime_id: string;
  shopweekday_id: string;
  shopweekday_name: string;
  open_time: string;
  close_time: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
}

export interface IPackageShopDetail {
  shop_id: string;
  shop_name: string;
  image_profile: string;
  opendatetime_id: string;
  shop_desc: string;
  location_desc: string;
  shop_location_desc: string;
  latitude: number;
  longitude: number;
  address: string;
  image_list: string;
  image_url: string;
  shop_category_name: string | "|";
  shop_openDateTimes: openDateTimes[];
}

export interface ITravelCategory {
  travel_category_id: string;
  travel_category_name: string;
  show_main_page: boolean;
  search_text: string;
  img_url: string;
  active: boolean;
  show_main_page_order_no: number;
  img_url_mobile: string;
}

export interface IsuitableFor {
  suitable_for_id: string;
  suitable_for_name: string;
  active: boolean;
  order_no: number;
}

export interface Ifacilities {
  other_services_id: string;
  other_services_name: string;
  active: boolean;
  order_no: number;
}

export interface IparkingService {
  parking_service_option_id: string;
  parking_service_option_name: string;
  active: boolean;
  order_no: number;
}

export interface IPetOption {
  pets_option_id: string;
  pets_option_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelTimePeriod {
  travel_time_period_id: string;
  travel_time_period_name: string;
  travel_time_period_desc: string;
  active: boolean;
  order_no: number;
}

export interface IPurposeOfTravel {
  purpose_of_travel_id: string;
  purpose_of_travel_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelingCompanion {
  traveling_companion_id: string;
  traveling_companion_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelPriceRange {
  travel_price_range_id: string;
  travel_price_range_name: string;
  travel_price_range_start: number;
  travel_price_range_end: number;
  active: boolean;
  order_no: number;
}

export interface ITravelReview {
  travel_id: string;
  location_id: string;
  travelName: string;
  prices: any;
  shopweekday_id: any;
  opening_time: any;
  closing_time: any;
  tel: string;
  travelBy: any;
  link: any;
  whatSuggest: any;
  images_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  view_count: string;
  active: boolean;
  opendatetime_id: string;
  email: string;
  line: string;
  facebook: string;
  tiktok: string;
  website: string;
  is_have_entrance_fee_Children: boolean;
  entrance_fee_Children_thai_price: any;
  entrance_fee_Children_foreign_price: any;
  is_have_entrance_fee_adults: boolean;
  entrance_fee_adults_thai_price: number;
  entrance_fee_adults_foreign_price: number;
  suitable_for_id: string;
  is_have_parking_service: boolean;
  is_have_room_service: boolean;
  is_have_room_service_price: boolean;
  pets_option_id: string;
  pets_option_name: string;
  is_merchant: boolean;
  travel_detail: string;
  travel_status_code: string;
  image_url: string;
  images_thumbnail_description: string;
  saved_id: any;
  latitude: number;
  longitude: number;
  favorite: boolean;
  types: string;
  location_name: string;
  traveling: string;
  facilities: string;
  atmosphere: string;
  worthiness: string;
  total: number;
  cntReview: number;
  suitable_for_name: string;
  categoryInfoList: ITravelReviewCategoryInfoList[];
  otherServiceInfoList: ITravelReviewOtherServiceInfoList[];
  parkingServoceOptionInfoList: ITravelReviewParkingServoceOptionInfoList[];
  travelOpenDatetimeInfoList: ITravelReviewTravelOpenDatetimeInfoList[];
  travelLocationInfo: ITravelReviewTravelLocationInfo[];
}

export interface ITravelReviewCategoryInfoList {
  travel_category_id: string;
  travel_category_name: string;
  show_main_page: boolean;
  search_text: string;
  img_url: string;
  active: boolean;
  show_main_page_order_no: number;
  img_url_mobile: string;
}

export interface ITravelReviewOtherServiceInfoList {
  other_services_id: string;
  other_services_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelReviewParkingServoceOptionInfoList {
  parking_service_option_id: string;
  parking_service_option_name: string;
  active: boolean;
  order_no: number;
}

export interface ITravelReviewTravelOpenDatetimeInfoList {
  opendatetimes_id: string;
  opendatetime_id: string;
  shopweekday_id: string;
  shopweekday_name: string;
  open_time: string;
  close_time: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  is_open_24_hour: boolean;
}

export interface ITravelReviewTravelLocationInfo {
  location_id: string;
  location_name: string;
  latitude: number;
  longitude: number;
  address: string;
  remark: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  subdistrict: string;
  distinct: string;
  province: string;
  country: string;
  address_input: string;
  address_output: string;
  shopName: any;
  importName: any;
  shop_id: any;
  active: number;
  postcode: string;
  road: any;
  home_address: any;
  provinces_id: string;
  district_id: any;
  sub_district_id: any;
}

export interface ITravelUserReview {
  travel_review_id: string;
  user_id: string;
  travel_id: string;
  review: string;
  created_at: string;
  updated_at: string;
  user_secret: string;
  name: string;
  profile_pic_line: string;
  profile_pic_patois: string;
  user_type: any;
  user_type_icon: any;
  traveling: string;
  facilities: string;
  atmosphere: string;
  worthiness: string;
  total: number;
  travel_review_like_id: any;
  post_review_love: boolean;
  post_review_like_count: number;
  comment_count: number;
  types: string;
  is_create_travel: boolean;
  Quality: string;
  img_count: number;
  quality_score: number;
  excellent_review: boolean;
  period_of_travel: string;
  period_of_travel_text: string;
  purpose_of_travel_id: string;
  purpose_of_travel_name: string;
  traveling_companion_id: string;
  traveling_companion_name: string;
  travel_price_range_id: string;
  travel_price_range_name: string;
  travelTimePeriodInfoList: ITravelUserReviewTimePeriodInfoList[];
  imageInfoList: ITravelUserReviewImageInfoList[];
}

export interface ITravelUserReviewTimePeriodInfoList {
  bind_travel_time_period_id: string;
  travel_time_period_id: string;
  travel_review_id: string;
  create_date: string;
  update_date: string;
  travel_time_period_name: string;
  travel_time_period_desc: string;
  active: boolean;
  order_no: number;
}

export interface ITravelUserReviewImageInfoList {
  images_id: string;
  fileName: string;
  fileExtensions: string;
  description: string;
  tag_id: any;
  img_alt: any;
  ref_id: string;
  ref_type: string;
  order_no: number;
  active: boolean;
  create_date: string;
  update_date: string;
  create_by: string;
  update_by: string;
  thumbnail_fileName?: string;
  thumbnail_description?: string;
}

export interface ITravelUserReviewComment {
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
}

export interface IPlaceStore {
  toashMsg?: string;
  maxpoint?: string;
  statusType?: string;
}

export interface ITravelCate {
  travel_category_id: string;
  travel_category_name: string;
  show_main_page: boolean;
  search_text: string;
  img_url: string;
  active: boolean;
  show_main_page_order_no: number;
  img_url_mobile: string;
  img_fav_category: string;
}
