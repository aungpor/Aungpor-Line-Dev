import { BOOKING_SUBPACKAGE_TYPE } from "constants/enum/component";
import { ICartDetail, ICartDetailExpire } from "./cart.interface";
import { IUserBookingAddress, IUserContact } from "./ecommerce";
import { IMaxCardDiscount } from "./maxcard.interface";

export interface IBookingDetail {
  coupon_discount_group_patois_total_value?: number;
  coupon_discount_group_patois_code?: string;
  amount: number;
  booking_item_id: string;
  booking_id: string;
  product_id: string;
  product_type_id: string;
  quantity: number;
  package_id: string;
  package_name: string;
  package_start: string;
  package_end: string;
  package_price: number;
  package_discount_percent: any;
  booking_payment_time_start: string;
  booking_payment_time_end: string;
  booking_status: string;
  user_id: string;
  booking_transaction_id: string;
  booking_total_price: number;
  booking_remark: string;
  payment_id: string;
  need_tax_invoice: boolean;
  use_same_address_contact: boolean;
  accept_terms: boolean;
  booking_user_address_id: string;
  booking_vat_user_address_id: string;
  user_contact_id: string;
  booking_status_code: string;
  booking_status_name: string;
  booking_status_desc: string;
  payment_amount: number;
  payment_method_id: string;
  payment_status_id: string;
  payment_image_url: any;
  payment_create_date: string;
  payment_update_date: string;
  payment_slip_payload: any;
  payment_remark: any;
  payment_method_name: string;
  payment_method_desc: string;
  payment_type: string;
  bank_id: string;
  bank_name: string;
  bank_account_name: string;
  bank_account_type_name: string;
  bank_account_number: string;
  bank_logo_image_url: string;
  bank_qrcode_image_url: string;
  payment_status_code: string;
  payment_status_name: string;
  payment_status_desc: string;
  first_name: string;
  last_name: string;
  id_card: string;
  birth_date: string;
  email: string;
  tel: string;
  defult_address: boolean;
  address_type: string;
  address: string;
  subdistrict: string;
  distinct: string;
  province: string;
  postcode: number;
  vat_address_type: string;
  vat_address: string;
  vat_subdistrict: string;
  vat_distinct: string;
  vat_province: string;
  vat_postcode: number;
  booking_code: string;
  booking_ref_code: string;
  item: IBookingDetailItem[];
  booking_sub_total_price: number;
  booking_tax: number;
  package_expire_time: string;
  gender_id?: string;
  day_id?: string;
  birth_time?: string;
  birth_time_name?: string;
  chinese_zodiac_id?: string;
  worshipper_name?: string;
  title_need_success_id?: string;
  title_want_consult?: string;
  wish?: string;
  donated_to_name?: string;
  prayer_or_forgiveness_text?: string;
  maxmu_address?: string;
  maxmu_distinct?: string;
  maxmu_province?: string;
  maxmu_subdistrict?: string;
  maxmu_postcode?: string;
  maxmu_birth_date?: string;
  gender_name?: string;
  day_name?: string;
  birth_day?: string;
  chinese_zodiac_name?: string;
  package_type_id?: string;
  title_need_success_name?: string;
  booking_maxmu_id?: string;
  line_id?: string;
  promotion: IBookingPromotionItem;
  delivery_fee?: number;
  shipping_address?: string;
  is_self_tickup?: boolean;
  is_have_vat: boolean;
  is_can_redeem_max_point: boolean;
  is_can_discount_by_maxcard: boolean;
  discount_maxcard_redeem_point_amount?: string;
  discount_maxcard_redeem_point_total_value?: string;
  discount_maxcard_plus_percent?: string;
  discount_maxcard_plus_total_value?: number;
  discount_maxcard_plus_type?: string;
  booking_list_genlink_id?: string;
  genlink_ref_code?: string;
}

export interface IBookingPromotionItem {
  maxcard_discount: null;
  point_redeem: {
    discount: number;
    multiply: boolean;
    new_promo_redeem_config_name: string;
    point: number;
  };
}
export interface IBookingDetailItem {
  booking_item_id: string;
  booking_id: string;
  product_id: string;
  product_type_id: string;
  quantity: number;
  unit_price: number;
  discount_percent: number;
  discount_price: number;
  amount: number;
  sub_product_id: string;
  expire_date: string; // Consider using Date if you want to handle dates
  usage_count: number | null;
  version_product_id: string;
  product_name: string;
  image_url_profile: string;
  sub_package_expire_text: string;
  sub_package_time: string;
  type: string;
  remark_to_shop?: string;
  //* Maxmu infomations
  booking_maxmu_id?: string;
  gender_id?: string;
  gender_name?: string;
  day_id?: string;
  day_name?: string;
  birth_time?: string;
  birth_time_name?: string;
  maxmu_birth_date?: string;
  chinese_zodiac_id?: string;
  chinese_zodiac_name?: string;
  worshipper_name?: string;
  title_need_success_id?: string;
  title_need_success_name?: string;
  title_want_consult?: string;
  wish?: string;
  maxmu_address?: string;
  maxmu_subdistrict?: string;
  maxmu_distinct?: string;
  maxmu_province?: string;
  maxmu_postcode?: string;
  //* Maxnitron shipping
  is_self_tickup?: boolean;
  shipping_address?: string;
}

export interface IBookingCoupon {
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
}

export interface IupdateBookingMaxmuOnPaymentPage {
  gender_id?: string;
  day_id?: string;
  birth_time?: string;
  birth_date?: string;
  chinese_zodiac_id?: string;
  worshipper_name?: string;
  title_need_success_id?: string;
  title_want_consult?: string;
  wish?: string;
  address?: string;
  subdistrict?: string;
  distinct?: string;
  province?: string;
  postcode?: string;
  prayer_or_forgiveness_text?: string;
  donated_to_name?: string;
  booking_maxmu_id?: string;
}

export interface ITaxInvoiceForm {
  isNeedTaxInvoice: boolean;
  taxInvoiceType?: number;
  citizenId?: string;
  companyName?: string;
  branchName?: string;
  taxFirstName?: string;
  taxLastName?: string;
  taxAddress?: string;
  taxSubDistrict?: string;
  taxDistrict?: string;
  taxProvince?: string;
  taxZipCode?: string;
  taxDeliveryAddressType?: string;
  isUseTaxInvoiceAddress?: boolean;
  taxInvoiceName?: string;
  taxInvoiceAddress?: string;
  taxInvoiceZipCode?: string;
  taxInvoiceProvince?: string;
  taxInvoiceDistrict?: string;
  taxInvoiceSubDistrict?: string;
  taxInvoiceEmail?: string;
}

export interface IBookingForm extends ITaxInvoiceForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  lineId?: string;
  isAcceptTerms: boolean;
  bookingSubPackageList: IBookingSubPackageForm[];
}

export interface IBookingSubPackageForm extends TBookingSubPackageForm {
  subPackageId: string;
  packageRemark?: string;
}

export type TBookingSubPackageForm = IDeiveryAddressForm & IMaxMuInfomationForm;

export interface IDeiveryAddressForm {
  deliveryType?: string;
  deliveryAddress?: string;
  deliveryZipCode?: string;
  deliveryProvince?: string;
  deliveryDistrict?: string;
  deliverySubDistrict?: string;
}

export interface IMaxMuInfomationForm {
  maxmuGender?: string;
  maxmuBirthDay?: string;
  maxmuTimeOfBirth?: string;
  maxmuDayOfBirth?: string;
  maxmuMonthOfBirth?: string;
  maxmuYearOfBirth?: string;
  maxmuZodiacYear?: string;
  maxmuWorshiperName?: string;
  maxmuEnhanceSuccess?: string;
  maxmuDedicateName?: string;
  maxmuMattersToConsult?: string;
  maxmuWishRequest?: string;
  maxmuWordsOfForgiveness?: string;
  maxmuAddress?: string;
  maxmuZipCode?: string;
  maxmuProvince?: string;
  maxmuDistrict?: string;
  maxmuSubDistrict?: string;
}

export interface IBookingOrderStorage {
  orderTotalPrice: number;
  orderNetPrice: number;
  orderDiscount?: number;
  maxPointDiscount?: number;
  maxCardDiscount?: number;
  bookingOrderList: IBookingSubPackageStorage[];
  deliveryFee?: number;
  posDefaultDiscount?: IPosDefaultDiscount;
}

export interface IBookingPackageOrderStorage {
  packageId: string;
  packageName: string;
  subPackageId: string;
  subPackageName: string;
  subPackageImage: string;
  subPackageType: BOOKING_SUBPACKAGE_TYPE;
  subPackageRemark?: string;
  amount: number;
  expireText: string;
  durationText: string;
  subPackagePrice: number;
  subPackageNetPrice: number;
}

export interface IBookingPackageStorage {
  transactionId?: string;
  bookingId?: string;
  packageId: string;
  packageName: string;
  packageType: string;
  packageTypeId: string;
  totalPrice: number;
  subPackageList: IBookingSubPackageStorage[];
  packageDiscount: IMaxCardDiscount | undefined | null;
  deliveryFee?: number | null;
  maxmuRequiredField?: IMaxMuRequiredField | null;
  posDefaultDiscount?: IPosDefaultDiscount;
}

export interface IPosDefaultDiscount {
  maxCardDiscount: number;
  maxPointDiscount: number;
  couponDiscount: number;
  maxCardType: string;
}

export interface IBookingSubPackageStorage {
  productTypeId: string;
  packageId: string;
  packageName: string;
  subPackageId: string;
  subPackageName: string;
  subPackageImage: string;
  subPackageTypeId: string;
  cartId: string | undefined | null;
  subPackageType: BOOKING_SUBPACKAGE_TYPE;
  amount: number;
  expireText: string;
  durationText: string;
  subPackagePrice: number;
  subPackageNetPrice: number;
  subPackageRemark?: string;
  maxnitronRemark?: string;
  cost_type?: number;
  gp_percentage?: number;
  agent_rate_baht?: number;
  maxmuPackageDetail?: {
    lineId: string | undefined;
    gender: string | undefined;
    birthDay: string | undefined;
    timeOfBirth: string | undefined;
    dateOfBirth: string | undefined;
    zodiacYear: string | undefined;
    worshiperName: string | undefined;
    enhanceSuccess: string | undefined;
    dedicateName: string | undefined;
    mattersToConsult: string | undefined;
    wishRequest: string | undefined;
    wordsOfForgiveness: string | undefined;
    address: string | undefined;
    subDistrict: string | undefined;
    distinct: string | undefined;
    province: string | undefined;
    postcode: string | undefined;
  };
}

export interface IMaxMuRequiredField {
  requiredGender: boolean;
  requiredBirthDay: boolean;
  requiredTimeOfBirth: boolean;
  requiredDateOfBirth: boolean;
  requiredZodiacYear: boolean;
  requiredWorshiperName: boolean;
  requiredEnhanceSuccess: boolean;
  requiredDedicateName: boolean;
  requiredMattersToConsult: boolean;
  requiredWishRequest: boolean;
  requiredWordsOfForgiveness: boolean;
  requiredAddress: boolean;
  requiredLineId: boolean;
}

export interface IBookingOrderBody {
  booking_list: IBookingList[];
  booking_list_genlink_id: number | undefined;
  genlink_ref_code: string | undefined;
  need_tax_invoice: boolean;
  need_address_shipping: boolean;
  checked_shipping_type: string | undefined;
  booking_total_price: number;
  accept_terms: boolean;
  vatAddress: IBookingVatAddress;
  bookUserContact: IBookingUserContact;
  deliveryFee?: number;
}

export interface IBookingList {
  booking_total_price: number;
  package_type_id: string;
  user_affiliate_ref_code: string | undefined;
  booking_item: IBookingItem[];
}

export interface IBookingMaxMuItem {
  birth_date: string | undefined;
  gender_id: string | undefined;
  day_id: string | undefined;
  birth_time: string | undefined;
  chinese_zodiac_id: string | undefined;
  worshipper_name: string | undefined;
  title_need_success_id: string | undefined;
  title_want_consult: string | undefined;
  wish: string | undefined;
  address: string | undefined;
  subdistrict: string | undefined;
  distinct: string | undefined;
  province: string | undefined;
  postcode: string | undefined;
  donated_to_name: string | undefined;
  prayer_or_forgiveness_text: string | undefined;
}

export interface IBookingMaxnitronItem {
  shipping_address: string | undefined;
  is_self_pickup: boolean | undefined;
}
export interface IBookingItem extends IBookingMaxMuItem, IBookingMaxnitronItem {
  package_id: string;
  product_id: string;
  product_type_id: string;
  quantity: number;
  cart_id: number | string | undefined;
  remark_to_shop: string | undefined;
}

export interface IBookingVatAddress {
  booking_vat_user_address_id: null;
  address: string | undefined;
  subdistrict: string | undefined;
  distinct: string | undefined;
  province: string | undefined;
  postcode: string | undefined;
  vatTypeId: number | undefined;
  companyName: string | undefined;
  branchNo: string | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  shippingname: string | undefined;
  shippingaddress: string | undefined;
  shippingzidCode: string | undefined;
  shippingprovince: string | undefined;
  shippingdistrict: string | undefined;
  shppingsubDistrict: string | undefined;
  shippingmail: string | undefined;
}

export interface IUpdateUserAddressBody {
  user_address_id: string | undefined;
  address: string | undefined;
  subdistrict: string | undefined;
  distinct: string | undefined;
  province: string | undefined;
  postcode: string | undefined;
  vat_type_id: string | undefined;
  vat_company_name: string | undefined;
  vat_branch_no: string | undefined;
  need_address_shipping: boolean;
  checked_shipping_type: string | undefined;
  booking_vat_address_shipping: any;
  vat_addresses_shipping_id: string | undefined;
  first_name: string;
  last_name: string;
}

export interface IBookingUserContact {
  user_contact_id: null;
  first_name: string;
  last_name: string;
  email: string;
  tel: string;
  id_card: string | undefined;
  line_id: string | undefined;
}

export interface IRegisterBookingResponse {
  booking: {
    error_code: string | undefined;
    error_msg: string | undefined;
    booking_transaction_id: number;
    bookingList: IBookingListResponse[];
    resultBookingAddDiscount: IBookingErrorResponse;
  };
}

export interface IBookingErrorResponse {
  error_code: string;
  error_msg: string;
  status: string;
  usedPointFailInfo: any | null;
  booking_id: string | null;
  detail: any | null;
}

export interface IBookingListResponse {
  booking_id: number;
  detail: IBookingDetailResponse[];
}

export interface IBookingDetailResponse {
  booking_id: string;
  product_type_id: string;
  package_id: string;
  package_name: string;
  package_code: string;
  package_report_detail: string;
  package_type_id: string;
  is_have_vat: boolean;
  is_can_redeem_max_point: boolean;
  is_can_discount_by_maxcard: boolean;
  booking_payment_time_start: Date;
  booking_payment_time_end: Date;
  booking_transaction_id: string;
  booking_code: string;
  booking_status: string;
  user_id: string;
  booking_total_price: number;
  booking_remark: string | undefined;
  payment_id: string;
  need_tax_invoice: boolean;
  use_same_address_contact: boolean;
  accept_terms: boolean;
  booking_user_address_id: string | undefined;
  booking_vat_user_address_id: string | undefined;
  user_contact_id: string;
  booking_sub_total_price: number;
  booking_special_discount: string | undefined;
  booking_after_discount: string | undefined;
  booking_tax: number;
  booking_ref_code: string;
  coupon_discount_group_patois_total_value: string | undefined;
  coupon_discount_group_patois_code: string | undefined;
  coupon_discount_group_patois_id: string | undefined;
  discount_maxcard_redeem_point_amount: string | undefined;
  discount_maxcard_redeem_point_total_value: string | undefined;
  discount_maxcard_plus_percent: string | undefined;
  discount_maxcard_plus_total_value: string | undefined;
  discount_maxcard_no: string | undefined;
  discount_maxcard_id: string | undefined;
  discount_maxcard_plus_type: string | undefined;
  booking_status_code: string;
  booking_status_name: string;
  booking_status_desc: string;
  payment_amount: number;
  payment_method_id: string;
  payment_status_id: string;
  payment_image_url: string | undefined;
  payment_create_date: Date;
  payment_update_date: Date;
  payment_slip_payload: string | undefined;
  payment_remark: string | undefined;
  payment_method_name: string | undefined;
  payment_method_desc: string | undefined;
  payment_type: string | undefined;
  bank_id: string | undefined;
  bank_name: string | undefined;
  bank_account_name: string | undefined;
  bank_account_type_name: string | undefined;
  bank_account_number: string | undefined;
  bank_logo_image_url: string | undefined;
  bank_qrcode_image_url: string | undefined;
  payment_status_code: string;
  payment_status_name: string;
  payment_status_desc: string;
  first_name: string;
  last_name: string;
  id_card: string | undefined;
  birth_date: string | undefined;
  email: string;
  tel: string;
  line_id: string | undefined;
  defult_address: string | undefined;
  address_type: string | undefined;
  address: string | undefined;
  subdistrict: string | undefined;
  distinct: string | undefined;
  province: string | undefined;
  postcode: string | undefined;
  vat_type_id: string | undefined;
  vat_type_name: string | undefined;
  vat_company_name: string | undefined;
  vat_branch_no: string | undefined;
  vat_address_type: string | undefined;
  vat_address: string | undefined;
  vat_subdistrict: string | undefined;
  vat_distinct: string | undefined;
  vat_province: string | undefined;
  vat_postcode: string | undefined;
  payment_amount_format: string;
  user_title_id: string | undefined;
  user_title_name_th: string | undefined;
  user_title_name_en: string | undefined;
  booking_product_type: string;
  booking_maxmu_id: string | undefined;
  gender_id: string | undefined;
  gender_name: string | undefined;
  day_id: string | undefined;
  day_name: string | undefined;
  birth_time: string | undefined;
  birth_time_name: string | undefined;
  maxmu_birth_date: string | undefined;
  chinese_zodiac_id: string | undefined;
  chinese_zodiac_name: string | undefined;
  worshipper_name: string | undefined;
  title_need_success_id: string | undefined;
  title_need_success_name: string | undefined;
  title_want_consult: string | undefined;
  wish: string | undefined;
  maxmu_address: string | undefined;
  maxmu_subdistrict: string | undefined;
  maxmu_distinct: string | undefined;
  maxmu_province: string | undefined;
  maxmu_postcode: string | undefined;
  donated_to_name: string | undefined;
  prayer_or_forgiveness_text: string | undefined;
  delivery_fee: string | undefined;
  is_self_tickup: string | undefined;
  shipping_address: string | undefined;
  package_expire_time: string;
  item: IBookingItemResponse[];
}

export interface IBookingItemResponse {
  booking_id: string;
  product_id: string;
  remark_to_shop: string;
  product_type_id: string;
  quantity: number;
  unit_price: number;
  discount_percent: number;
  discount_price: number;
  amount: number;
  sub_product_id: string;
  usage_count: number;
  version_product_id: string;
  is_start_use: boolean;
  send_noti_near_expire: boolean;
  send_noti_expire: boolean;
  image_url_profile: string;
  product_name: string;
  sub_package_expire_text: string;
  type: string;
  sub_package_time: string;
}

export interface IEcodeBooking {
  product_id: string | number;
  product_type_id: string | number;
  quantity: string | number;
}

export interface IInquiryCouponBody {
  ecode: string;
  payment_type?: string | null;
  package_id?: string[];
  booking_total_price?: number[];
}

export interface ICouponAvailableSchema {
  err_code?: string;
  err_msg?: string;
  campaign_coupon_id: number;
  name: string;
  reward_id: string | undefined;
  e_code: string;
  active: boolean;
  promo_flag: string | undefined;
  promo_ghost_map_to_promo_type_real: string | undefined;
  promo_status: string;
  coupon_info_id: string;
  start_used_date_time: string | undefined;
  expire_used_date_time: string | undefined;
  used_time_minute: number;
  promo_discount_total_value: string | undefined;
  promo_discount_percent_value: string | undefined;
  email_receive: string;
  patois_ms_new_campaign_coupon_id: string;
  desc: string;
  usage_desc: string | undefined;
  type: string;
  type_desc: string;
  img_url: string | undefined;
  img_icon_url: string | undefined;
  detail_html: string | undefined;
  show_popup_main_page: boolean;
  coupon_discount_group_name: string;
  coupon_discount_group_code: string;
  coupon_discount_group_total_value: number;
  coupon_discount_group_percent_value: string | undefined;
  coupon_discount_group_condition_code: string | undefined;
  coupon_discount_group_use_chanel: string | undefined;
  allow_payment_type: string | undefined;
  condition_buy_minimum: string;
  condition_package_category_id: string | undefined;
  condition_package_id: string | undefined;
  is_use_with_redeem_maxpoint: boolean | undefined;
  is_use_with_discount_maxplus: boolean | undefined;
  is_available_always: string | undefined;
  packageIdListValidPackageCategoryCondition: any[];
  packageIdListValidPackageIdCondition: string[];
}

export interface IGenLinkBookingSchema {
  boolingGenlinkData: IBookingGenlinkDetailSchema;
  discount: IGenLinkDiscountSchema;
  userContact: IGenLinkUserContactSchema;
  userAddress: IGenLinkUserAddressSchema[];
  cart: ICartDetail;
  cartExpire: ICartDetailExpire;
  status?: string;
  booking?: IGenLinkBooking;
}

export interface IGenLinkUserAddressSchema extends IUserBookingAddress {
  booking_genlink_temp_id: string;
}

export interface IGenLinkBooking {
  booking_ref_code: string;
  booking_transaction_id: string;
  status: string;
}

export interface IBookingGenlinkDetailSchema {
  booking_genlink_id: number;
  genlink_ref_code: string;
  generate_refcode: string;
  status: string;
  booking_expire: string;
  status_redeem_void_maxpoint: string | undefined;
  qr_code: string;
  need_address_shipping: string | undefined;
  need_tax_invoice: boolean;
  checked_shipping_type: string | undefined;
}

export interface IGenLinkDiscountSchema {
  discount_genlink_id: number;
  booking_list_genlink_id: string;
  booking_genlink_temp_id: string;
  discount_maxcard_redeem_point_amount: string;
  discount_maxcard_redeem_point_total_value: number;
  discount_maxcard_plus_total_value: number;
  discount_maxcard_no: string;
  discount_maxcard_id: any;
  discount_maxcard_plus_type: string;
  discount_phone_no: string;
  coupon_discount_group_patois_total_value: number;
}

export interface IGenLinkUserContactSchema extends IUserContact {
  booking_genlink_temp_id: string;
}

export interface IUpdateUserContactBody {
  first_name: string;
  last_name: string;
  email: string;
  tel: string;
  line_id: string | undefined;
  user_contact_id: string;
  booking_id: string;
}

export interface IBookingCheckSlipBody {
  booking_transaction_id: string;
  booking_id: number | null;
  image_id?: number;
  image_url?: string;
  payment_method_id: string;
  notes_for_the_team?: string;
}

export interface IRegisterPaymentBody {
  booking_id: string | number;
  paymentType: string;
  payment_method_id: number | string;
}

export interface IOrderPaymentTransaction {
  payment_id: string;
  payment_method_id: string;
  payment_amount: number;
  payment_status_id: string;
  payment_image: string | undefined;
  user_id: string;
  payment_slip_payload: string | undefined;
  payment_remark: string | undefined;
  slip_amount: string | undefined;
  transfer_date: string;
  qrcode_for_payment: string | undefined;
  qrcode_for_payment_transaction_id: string | undefined;
  notes_for_the_team: string | undefined;
  payment_gw_order_id: string | undefined;
  payment_gw_ref1: string | undefined;
  payment_gw_ref2: string | undefined;
  payment_gw_ref3: string | undefined;
  payment_gw_qrbast64: string | undefined;
  payment_gw_file_extension: string | undefined;
  payment_gw_transaction_id: string | undefined;
  payment_gw_callback_amount_paid: string | undefined;
  payment_gw_callback_fee_amount: string | undefined;
  payment_gw_callback_vat_amount: string | undefined;
  payment_gw_callback_transaction_amount: string | undefined;
  payment_gw_callback_sender_account_name: string | undefined;
  payment_gw_callback_sender_bank_code: string | undefined;
  payment_gw_callback_sender_account_number: string | undefined;
  payment_gw_callback_transaction_datetime: string | undefined;
  payment_status_code: string;
  payment_status_name: string;
  payment_status_desc: string;
}
export interface IBookingCheckSlipResponse {
  paymentInfo: IOrderPaymentTransaction;
}

export interface IBookingPaymentDetail {
  OrderID: null;
  OrderStatus: null;
  Ref1: null;
  Ref2: null;
  Ref3: null;
  AmountPaid: number;
  SenderAccountName: null;
  SenderBankCode: null;
  SenderAccountNumber: null;
  Status: IBookingPaymentStatus;
}

export interface IBookingPaymentStatus {
  Code: string;
  Message: string;
}

export interface IAddDiscountPaymentBody {
  booking_transaction_id: string;
  booking_total_price: number;
  coupon_discount: IAddCouponDiscount[];
}

export interface IAddCouponDiscount {
  booking_id: number | string;
  coupon_discount_group_patois_code: string | null;
  coupon_discount_group_patois_id: number | null;
  coupon_discount_group_patois_total_value: number | null;
  discount_maxcard_redeem_point_amount: number | null;
  discount_maxcard_redeem_point_total_value: number | null;
  discount_maxcard_plus_total_value: number | null;
  discount_maxcard_plus_percent: number | null;
  discount_maxcard_id: number | null;
  discount_maxcard_no: string | null;
  discount_maxcard_plus_type: string | null;
  discount_phone_no: string | null;
  sub_package_id: string[];
}

export interface IAddBookingDiscountResponse {
  booking: {
    error_code: string;
    error_msg: string;
    status: string;
    usedPointFailInfo: null;
    booking_id: null;
    detail: null;
  };
}
