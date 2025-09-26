import { IUserRanking } from "./user.interface";
export interface IShop {
  address: string;
  cleanliness: string;
  close_time: string;
  closing_time: string;
  cntReview: number;
  comment_count: number;
  created_at: string;
  delicious: string;
  favorite: boolean;
  foodType_id: string;
  categoryInfoList: Array<any>;
  history_id: string;
  image_list: string;
  image_list_thumbnail: string;
  image_url: string;
  image_url_thumbnail: string;
  images_id: string;
  isopen: boolean;
  latitude: number;
  like_count: number;
  location_id: string;
  location_name: string;
  longitude: number;
  love: boolean;
  openDateTimes: IOpenTime[];
  open_time: string;
  opendatetime_id: string;
  opening_time: string;
  owner_id: string | null;
  parkinglot_id: string | null;
  post_like_id: string | null;
  price_range: string | null;
  pricerange_text: string | null;
  pricing: string;
  recommend: string;
  remark: string;
  reviews: IReview[];
  saved_id: string;
  shopName: string;
  shopType_id: string;
  shop_id: string;
  shop_status_code: string | null;
  shopsize: string;
  shopsize_id: string;
  shopweekday_id: string;
  tel: string;
  total: number;
  types: string;
  updated_at: string | Date;
  user_id: string;
  view_count: number;
  email: string;
  line: string;
  tiktok: string;
  facebook: string;
  website: string;
  shop_detail: string;
  service: number;
  atmosphere: number;
}

export interface IOpenTime {
  close_time: string;
  created_at: string | Date;
  created_by: string;
  open_time: string;
  opendatetime_id: string;
  opendatetimes_id: string;
  shopweekday_id: string;
  shopweekday_name: string;
  updated_at: string | Date;
  updated_by: string;
}

export interface IReview {
  comment_count: number;
  created_at: string | Date;
  image_list: string;
  image_list_thumbnail: string;
  image_url: string;
  image_url_thumbnail: string;
  images_id: string;
  is_create_shop: string;
  name: string | null;
  post_review_id: string;
  post_review_like_count: number;
  post_review_like_id: string | null;
  post_review_love: boolean;
  profile_pic_line: string | null;
  profile_pic_patois: string | null;
  review: string;
  shop_id: string;
  total: number;
  types: string;
  updated_at: string | Date;
  user_id: string;
  shop_name?: string;
  user_type_icon: string;
  user_type: string;
  excellent_review: boolean;
  user_secret: string;
  userRanking?: Array<IUserRanking>;
  is_edited?: boolean | null;
  pricing?: string;
  price_text?: string;
  Quality?: string;
  review_image_url?: string;
}

export interface ITravelReview {
  comment_count: number;
  created_at: string | Date;
  image_list: string;
  image_list_thumbnail: string;
  image_url: string;
  image_url_thumbnail: string;
  images_id: string;
  is_create_shop: string;
  name: string | null;
  post_review_id: string;
  post_review_like_count: number;
  post_review_like_id: string | null;
  post_review_love: boolean;
  profile_pic_line: string | null;
  profile_pic_patois: string | null;
  review: string;
  shop_id: string;
  total: number;
  types: string;
  updated_at: string | Date;
  user_id: string;
  shop_name?: string;
  user_type_icon: string;
  user_type: string;
  excellent_review: boolean;
  user_secret: string;
  userRanking?: Array<IUserRanking>;
  is_edited?: boolean | null;
  pricing?: string;
  price_text?: string;
  period_of_travel?: string;
  travel_time_period?: string;
  purpose_of_travel_name?: string;
  traveling_companion_name?: string;
  travel_price_range_name?: string;
  Quality?: string;
  review_image_url?: string;
}

export interface IPosition {
  lat: number;
  lng: number;
}

export interface IShopReview {
  cntHit: number;
  desc: string;
  distance: number;
  foodType_id: string;
  imageDescription: string;
  imageSrc: string;
  images_thumbnail_description: string;
  images_thumbnail_fileName: string;
  score: number;
  sid: string;
  title: string;
  types: string;
}

interface INextMissionData {
  mission_code: string;
  mission_id: string;
  message: string;
  title: string;
  image: string;
  bg_color: string;
}

export interface IShopReviewedProps {
  coupon?: any;
  isVisibleModalCoupon?: boolean;
  image?: string;
  isVisibleSuccessModal?: boolean;
  isMyUserProfile?: boolean;
  toashMsg?: string;
  toashHeaderMsg?: string;
  nextMissionData?: INextMissionData;
  attendCampaign?: IAttendCampaign | null;
  maxpoint?: string;
  isCreateShop?: boolean;
  statusType?: string;
}

export interface IShopType {
  shopType_id: string;
  shopTypeName: string;
}

export interface IFoodType {
  foodType_id: string;
  foodTypeName: string;
}

export interface IEatingType {
  shop_eating_type_id: string;
  shop_eating_type_name: string;
  label?: string;
  value?: string;
}

export interface IPricerange {
  id: string;
  pricerange_text: string;
  label?: string;
  value?: string;
}

export interface IAttendCampaign {
  status: string;
  message: string;
  promo: IPromo;
}

export interface IPromo {
  promo_id: number;
  promo_code: string;
  promo_name: string;
  promo_desc: string;
  promo_begin_date: string;
  promo_end_date: string;
  promo_status: string;
  promo_usage_desc: string;
  promo_type: string;
  promo_type_desc: string;
  promo_img_url: string;
  promo_flag: string;
  promo_ghost_map_to_promo_type_real: string;
  promo_start_used_date_time: any;
  promo_remark: string;
  promo_ghost_detail_img_url: any;
  promo_expire_used_date_time: any;
  promo_used_time_minute: number;
  promo_detail_html: string;
  promo_show_use_button: any;
  promo_img_icon_url: string;
  show_popup_main_page: boolean;
  promo_use_type: string;
  promo_page_barcode_image_url: any;
  promo_background_color: string;
  condition_process_for_send_coupon: any;
  show_popup_period: any;
}

export interface IFoodTypeInPage {
  active: boolean;
  foodTypeName: string;
  foodType_id: string;
  img_url: string;
  menu: string;
  search_text: string;
  show_main_page: boolean;
  show_main_page_order_no: number;
}

export interface IReviewCoverImage {
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
  thumbnail_fileName: string;
  thumbnail_description: string;
}

export interface IShopsFilter {
  cntReview: number;
  created_at: string;
  desc: any;
  descDecimal: any;
  favorite: boolean;
  foodTypeName: string;
  image_url: string;
  images_id: number;
  images_thumbnail_description: string;
  latitude: string;
  location_name: string;
  longitude: string;
  opendatetime_id: number;
  order_no: any;
  saved_id: any;
  shopName: string;
  shopName_with_branch: any;
  shop_branch_name: any;
  shop_id: number;
  total: string;
  types: string;
  updated_at: string;
  user_id: number;
}
