import { ICartDetailList } from "./cart.interface";

export interface IProvince {
  id: string;
  code: string;
  name_th: string;
  name_en: string;
  geography_id: number;
  geography_name: string;
}

export interface IDistrict {
  id: string;
  code: string;
  name_th: string;
  name_en: string;
  geography_id: string;
  province_id: string;
}

export interface ISubDistrict {
  id: string;
  code: string;
  name_th: string;
  name_en: string;
  districts_id: string;
  geography_id: string;
  province_id: string;
}

export interface IDay {
  shopweekday_id: string;
  shopweekday_criteria: string;
  shopweekday_criteria_eng: string;
}

export interface IPackagePriceRange {
  package_price_range_id: string;
  pricerange_text: string;
  pricerange_start: number;
  procerange_end: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface IPackageSpecialServices {
  package_special_services_id: string;
  package_special_services_name: string;
  active: boolean;
  order_no: number;
  package_special_services_icon: string;
}

export interface IPackagePetsServices {
  package_pets_option_id: string;
  package_pets_option_name: string;
  active: boolean;
  order_no: number;
  package_pets_option_icon: string;
}
export interface IPackageActivitiesServices {
  package_places_activities_id: string;
  package_places_activities_name: string;
  active: boolean;
  order_no: number;
  package_places_activities_icon: string;
}

export interface IPackageCategory {
  package_category_id: string;
  package_category_name: string;
  package_category_desc: string;
  active: boolean;
  create_date: string | Date;
  create_by: string;
  update_date: string | Date;
  update_by: string;
}

export interface IBookingCheckSlip {
  paymentStatus: IPaymentStatus;
  paymentInfo: IPaymentInfo;
}

export interface IPaymentStatus {
  paymentInfo: IPaymentInfoPaymentStatus;
}

export interface IPaymentInfoPaymentStatus {
  issue_msg: string;
  checkSlip: any;
}

export interface IPaymentInfo {
  payment_id: string;
  payment_method_id: string;
  payment_amount: number;
  payment_status_id: string;
  payment_image: any;
  user_id: any;
  create_date: string;
  create_by: any;
  update_date: string;
  update_by: any;
  payment_slip_payload: any;
  payment_remark: string;
  slip_amount: any;
  transfer_date: any;
  qrcode_for_payment: string;
  qrcode_for_payment_transaction_id: string;
  payment_status_code: string;
  payment_status_name: string;
  payment_status_desc: string;
}

export interface IMaxMeQrCodePaymentStatus {
  inquiryCSBResult: IInquiryCSBResult;
}

export interface IInquiryCSBResult {
  code: string;
  message: string;
  result: IMaxMeCSBResult[];
}

export interface IMaxMeCSBResult {
  orderinfo: IMaxMeOrderInfo[];
  shopinfo: IMaxMeShopInfo;
  amount: number;
  net_amount: number;
  settleDate: Date;
  maxcard_no: string;
  customer_name: string;
  transactionID: string;
}

export interface IMaxMeShopInfo {
  mid: string;
  shopcode: string;
}

export interface IMaxMeOrderInfo {
  product_name: string;
  product_code?: string;
  product_qty: number;
  product_price: number;
  product_discount?: string;
}

export interface IUserPartner {
  isPartner: boolean;
}

export interface IPackageReportHistorySchema {
  first_day_partner: Date;
  total: number;
  list: IPackageReportHistory[];
}

export interface IPackageReportHistory {
  package_id: string;
  package_name: string;
  package_text: string;
}

export interface IRegisterReportBody {
  startDate: string;
  endDate: string;
  packageListId: string[];
}

export interface ICouponAvailableByEcode {
  err_code?: string;
  err_msg?: string;
  campaign_coupon_id: string;
  name: string;
  reward_id: string;
  e_code: string;
  active: boolean;
  start_date: string;
  end_date: string;
  create_date: string;
  update_date: string;
  create_by: string;
  update_by: string;
  promo_flag: any;
  promo_ghost_map_to_promo_type_real: any;
  promo_status: string;
  coupon_info_id: string;
  start_used_date_time: any;
  expire_used_date_time: any;
  used_time_minute: any;
  patois_ms_new_campaign_coupon_id: string;
  desc: string;
  usage_desc: string;
  type: string;
  type_desc: string;
  img_url: string;
  img_icon_url: string;
  detail_html: string;
  show_popup_main_page: boolean;
  coupon_discount_group_name: string;
  coupon_discount_group_code: string;
  coupon_discount_group_total_value: number;
  coupon_discount_group_percent_value: any;
  coupon_discount_group_condition_code: string;
  coupon_discount_group_use_chanel: string;
  is_use_with_discount_maxplus: boolean;
  is_use_with_redeem_maxpoint: boolean;
}

export interface IBookingCouponBody {
  coupon_discount_group_patois_id: number;
  coupon_discount_group_patois_total_value: number;
  coupon_discount_group_patois_code: string;
}

export interface IPackageDataForReview {
  package_id: string;
  booking_id: string;
  package_name: string;
  sub_package_name: string;
  image_list: string;
  image_url: string;
}

export interface IAddPackageReview {
  package_id: string;
  review: string;
  quality_status: string;
  booking_id: string;
  imageList: string;
  impressed: number;
  total: number;
  worthiness: number;
  service: number;
  atmosphere: number;
}

export interface IEditPackageReview {
  package_review_id: string;
  package_id: number;
  review: string;
  quality_status: string;
  imageList: string;
  impressed: number;
  total: number;
  worthiness: number;
  service: number;
  atmosphere: number;
}

export interface IReviewPackage {
  shop_thumbnail_url: string;
  post_review_id: string;
  shop_id: string;
  shop_name: string;
  is_edited: boolean;
  package_review_id: string;
  user_id: string;
  package_id: string;
  booking_id: string;
  sub_package_name: any;
  review: string;
  created_at: string;
  updated_at: string;
  user_secret: string;
  name: string;
  profile_pic_line: string;
  profile_pic_patois: any;
  user_type: any;
  user_type_icon: any;
  impressed: string;
  worthiness: string;
  service: string;
  atmosphere: string;
  total: number;
  package_review_like_id: any;
  post_review_love: boolean;
  post_review_like_count: number;
  comment_count: number;
  types: string;
  Quality: string;
  img_count: number;
  quality_score: number;
  excellent_review: boolean;
  imageInfoList: IReviewPackageImageInfoList[];
  is_edit: boolean;
  sub_shop_name?: string;
  is_can_comment: boolean;
  shop_image_url: string;
  review_image_url: string;
  count_comment: number;
}

export interface IReviewPackageImageInfoList {
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

export interface IReviewPackageForEditAuth {
  package_review_id: string;
  user_id: string;
  package_id: string;
  booking_id: string;
  package_name: string;
  sub_package_name: string;
  review: string;
  created_at: string;
  updated_at: string;
  impressed: string;
  worthiness: string;
  service: string;
  atmosphere: string;
  total: number;
  image_list: string;
  image_url: string;
  imageInfoList: any[];
}

export interface BookingAddressCouponDiscount {
  coupon_discount_group_patois_id: any;
  coupon_discount_group_patois_total_value: any;
  coupon_discount_group_patois_code: any;
  discount_maxcard_redeem_point_amount: number | null;
  discount_maxcard_redeem_point_total_value: number | null;
  discount_maxcard_plus_type: string | undefined;
  discount_maxcard_plus_percent: number;
  discount_maxcard_plus_total_value: number;
  discount_maxcard_no: string | undefined;
  discount_maxcard_id: number | undefined;
}

export interface IUserContactOnPaymentPage {
  user_contact_id: number;
  first_name: string;
  last_name: string;
  email: string;
  tel: string;
  booking_remark: string;
  booking_id: number;
}

export interface SearchFilterBarRef {
  setSearchTextValue: (val: any) => void;
}
export interface IAffiliate {
  package_affiliate_id: string;
  package_affiliate_name: string;
  active: string;
  order_no: number;
  affiliate_icon: string;
  affiliate_icon_row: string;
}

export interface ISEOCATEGORY {
  items: ISEOSUB_CATEGORY[];
  category: string;
}

export interface ISEOSUB_CATEGORY {
  items: ISEOITEM[][];
  sub_category: string;
}

export interface ISEOITEM {
  text: string;
  link: null | string | string;
}

export interface IUserContact {
  user_contact_id: string;
  first_name: string;
  last_name: string;
  id_card: string | undefined;
  birth_date: string | undefined;
  email: string;
  tel: string;
  user_id: string;
  user_title_id: string | undefined;
  line_id: string | undefined;
}

export interface IUserBookingAddress {
  user_address_id: string;
  user_id: string;
  defult_address: boolean;
  address_type: string;
  address: string;
  subdistrict: string;
  distinct: string;
  province: string;
  postcode: number;
  active: boolean;
  address_type_vat_type_id: string;
  company_name: string | undefined;
  branch_no: string | undefined;
  first_name: string;
  last_name: string;
  name_recipient: string;
  send_method_tax_invoice: string;
  send_tax_invoice_address_id: string;
  send_tax_invoice_email: string | undefined;
  need_address_tax_invoice: boolean;
}

export interface IGenLinkData {
  booking_genlink_id: number;
  generate_refcode: string;
  status: string;
  booking_expire: string;
  status_redeem_void_maxpoint: any;
  qr_code: string;
  need_address_shipping: any;
  need_tax_invoice: boolean;
  checked_shipping_type: any;
  created_date: string;
  update_date: string;
}

export interface IGenLinkDiscount {
  discount_genlink_id: number;
  booking_list_genlink_id: string;
  booking_genlink_temp_id: string;
  discount_maxcard_redeem_point_amount: string;
  discount_maxcard_redeem_point_total_value: string;
  discount_maxcard_plus_total_value: number;
  discount_maxcard_no: string;
  discount_maxcard_id: any;
  discount_maxcard_plus_type: string;
  discount_phone_no: string;
}

export interface IGenLinkUserContact {
  user_contact_id: string;
  booking_genlink_temp_id: string;
  first_name: string;
  last_name: string;
  id_card: string;
  birth_date: any;
  email: string;
  tel: string;
  user_id: string;
  active: boolean;
  create_date: string;
  create_by: string;
  update_date: string;
  update_by: string;
  user_title_id: any;
  line_id: any;
}

export interface IGenLinkPackage {
  product_id: string;
  sub_package_id: string;
  quantity: number;
  created_date: string;
  update_date: string;
  package_name: string;
  shop_id: string;
  shop_name: string;
  product_type_id: string;
  image_url_profile: string;
  sub_package_stock: number;
  sub_package_name: string;
  sub_package_desc: any;
  price: number;
  is_expire: boolean;
  type: string;
  sub_package_time: string;
  sub_package_expire_text: string;
}

export interface IGenLinkCartItem {
  shop_name: string;
  shop_id: string;
  productList: IGenLinkPackage[];
}

export interface IGenLinkCart {
  count: number;
  list: ICartDetailList[];
}

export interface IGenLinkBookingData {
  boolingGenlinkData: IGenLinkData;
  discount: IGenLinkDiscount;
  userContact: IGenLinkUserContact;
  userAddress: any[];
  cart: IGenLinkCart;
  cartExpire: any;
}
