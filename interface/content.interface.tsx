export interface IContent {
  section_name: string;
  content_section_id: string;
  category_name: string;
  content_category_id: string;
  sub_category_name: string;
  content_id: string;
  content_sub_category_id: string;
  content_name: string;
  content_detail: string;
  images_id: string;
  short_desc: string;
  short_quote: string;
  show_writer_name: boolean;
  start_date: string;
  end_date: string;
  active: boolean;
  create_date: string;
  create_by: string;
  update_date: string;
  update_by: string;
  order_no: string;
  approve: boolean;
  image_list: string;
  image_url: string;
  image_list_thumbnail: string;
  image_url_thumbnail: string;
  tag_name: string;
  tag_id: string;
  name: string;
  profile_pic_line: string;
  profile_pic_patois: any;
  image_desktop_url: string;
  image_desktop_list: string;
  shop_review_list?: Array<IContentShopList>;
  list_content_detail?: Array<any>;
  type: string;
  image_mobile_url: string;
  image_mobile_list: string;
}

export interface IContentShopList {
  shop_id: string;
  location_id: string;
  location_name: string;
  latitude: number;
  longitude: number;
  address: string;
  tel: string;
  shopName: string;
  shopType_id: string;
  foodType_id: string;
  opening_time: string;
  recommend: string;
  images_id: string;
  image_list: string;
  image_url: string;
  image_list_thumbnail: string;
  image_url_thumbnail: string;
  remark: string;
  owner_id: any;
  user_id: string;
  parkinglot_id: any;
  created_at: string;
  updated_at: string;
  shopsize_id: any;
  shopweekday_id: string;
  closing_time: string;
  price_range: string;
  shop_status_code: string;
  shopsize: string;
  post_like_id: any;
  love: boolean;
  saved_id: any;
  favorite: boolean;
  like_count: number;
  view_count: number;
  comment_count: number;
  cleanliness: string;
  delicious: string;
  pricing: string;
  service: string;
  atmosphere: string;
  total: number;
  cntReview: number;
  pricerange_text: string;
  opendatetime_id: string;
  open_time: string;
  close_time: string;
  isopen: boolean;
  types: string;
  history_id: string;
  shop_eating_type_id: string;
  desc: string;
  distance: number;
}

export interface IContentCard {
  type: string;
  content_id: string;
  content_name: string;
  images_id: string;
  short_desc: string;
  active: boolean;
  create_date: string;
  create_by: string;
  update_date: string;
  update_by: string;
  order_no: string;
  approve: boolean;
  image_list: string;
  image_url: string;
  image_list_thumbnail: string;
  image_url_thumbnail: string;
  image_mobile_url: string;
  image_desktop_url: string;
}

export interface IContentCarouselBanner {
  content_id: string;
  content_name: string;
  images_id: string;
  short_desc: string;
  content_active: boolean;
  create_date: string;
  create_by: string;
  update_date: string;
  update_by: string;
  order_no: number;
  active: boolean;
  approve: boolean;
  image_list: string;
  image_url: string;
  images_id_desktop: string;
  image_desktop_list: string;
  image_desktop_url: string;
}

export interface IContentADSbannerConfig {
  ads_banner_id: string;
  image_id: string;
  url: string;
  order_no: number;
  active: boolean;
  image_list: string;
  image_url: string;
  image_id_desktop: string;
  image_desktop_list: string;
  image_desktop_url: string;
}

export interface IBannerInpageByConfigName {
  image_branner_in_page_config_id: string;
  config_name: string;
  config_image_id: string;
  config_image_id_desktop: string;
  active: boolean;
  image_list: string;
  image_url: string;
  image_desktop_list: string;
  image_desktop_url: string;
}

export interface IPartnership {
  partnership_id: string;
  partnership_name: string;
  image_id: string;
  url: string;
  order_no: number;
  active: boolean;
  image_list: string;
  image_url: string;
}

export interface IAnnouncementBanner {
  patois_banner_welcome_to_patois: string;
  title: string;
  image_url: string;
  image_url_thumbnail: string;
  body_html: string;
  button_text: string;
  link: string;
  active: boolean;
  create_date: string;
  update_date: string;
  order_no: number;
  group_code: string;
  group_desc: string;
  expire_date: string;
  shop_id: string;
  open_new_tab: boolean;
  type: string;
}

export interface ITravelTypeInPage {
  travel_category_id: string;
  active: boolean;
  travel_category_name: string;
  img_url: string;
  search_text: string;
  show_main_page: boolean;
  show_main_page_order_no: number;
}

export interface IcontentPackageCard {
  package_promotion: number;
  package_promotion_full_price: number;
  package_multi_price: boolean;
  package_price: number;
  card_type: string;
  id: string;
  name: string;
  cntReview: number;
  cntTotal: number;
  location_name: string;
  images_thumbnail: string;
  isExpired: boolean;
}
