import { COMPETITION_TYPE } from "constants/enum/component";
import { YSC_PHASE_STATUS } from "constants/youngScout";

export interface IYSCDetailList {
  id?: string;
  title: string;
  criteria: string[];
}

export interface IYSCProposition {
  title: string;
  description: string;
}

export interface IYSCCompetition {
  src: string;
  label: string;
  desc: string;
  descMobile?: string;
}

export interface IYSCDirectorImage {
  name: string;
  position?: string;
  directorImage: string;
  companyImage?: string;
}

export interface IYSCTimelineDetail {
  title: string;
  date: string;
  mobileWidth?: number;
  lapTopWidth?: number;
  deskTopWidth?: number;
}

export interface IYSCDetailHeader {
  id: string;
  title: string;
}

export interface IYSCTimeline {
  status: YSC_PHASE_STATUS;
}

export interface IYSCPackageSchema {
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
  location_travel: string;
  image_list: string;
  image_url: string;
  shop_active: boolean;
  shop_start_date: Date;
  shop_end_date: Date;
  sale_count: number;
  cntReview: number;
  total: number;
}

export interface IYSCDetailSchema {
  package_id: string;
  package_name: string;
  package_overview: string;
  package_desc: string;
  package_price: number;
  package_discount_percent: string;
  package_image: string;
  package_start: Date;
  package_end: Date;
  package_start_sale: Date;
  package_end_sale: Date;
  package_max_People: number;
  package_stock: number;
  active: boolean;
  create_date: Date;
  create_by: string;
  update_date: Date;
  update_by: string;
  package_activity_time_day: string;
  package_activity_time_minutes: string;
  package_activity_time_hours: string;
  product_type_id: string;
  package_code: string;
  package_report_detail: string;
  shop_email: string;
  order_no: string;
  is_for_test_flag: boolean;
  sale_count: number;
  shop_id: string;
  user_id: string;
  user_name: string;
  user_image: string;
  package_price_format: string;
  package_price_discount_format: string;
  package_price_total_format: string;
  package_category_name: string;
  travelName: string;
  location_name: string;
  location_address: string;
  location_travel: string;
  package_tag: string;
  image_list: string;
  image_url: string;
  shop_active: boolean;
  shop_start_date: Date;
  shop_end_date: Date;
}

export interface IBookingPackageParams {
  email: string;
  packageId: number;
  amount: number;
  totalPrice: number;
}

export interface IYSCBookingPackage {
  booking: IBookingSchema;
}

export interface IBookingSchema {
  error_code: string | undefined;
  error_msg: string | undefined;
  booking_id: number | undefined;
  detail: IBookingDetailSchema | undefined;
}

export interface IBookingDetailSchema {
  booking_item_id: string;
  booking_id: string;
  product_id: string;
  product_type_id: string;
  quantity: number;
  unit_price: number;
  discount_percent?: string;
  discount_price?: string;
  amount: number;
  package_id: string;
  package_name: string;
  package_code: string;
  package_report_detail?: string;
  package_start: Date;
  package_end: Date;
  package_price: number;
  package_discount_percent?: string;
  booking_payment_time_start: Date;
  booking_payment_time_end: Date;
  booking_code: string;
  booking_status: string;
  user_id?: string;
  booking_total_price: number;
  booking_remark: string;
  payment_id: string;
  need_tax_invoice: boolean;
  use_same_address_contact: boolean;
  accept_terms: boolean;
  booking_user_address_id?: string;
  booking_vat_user_address_id?: string;
  user_contact_id: string;
  booking_sub_total_price: number;
  booking_special_discount?: string;
  booking_after_discount?: string;
  booking_tax: number;
  booking_ref_code: string;
  booking_status_code: string;
  booking_status_name: string;
  booking_status_desc: string;
  payment_amount: number;
  payment_method_id: string;
  payment_status_id: string;
  payment_image_url?: string;
  payment_create_date: Date;
  payment_update_date: Date;
  payment_slip_payload?: string;
  payment_remark?: string;
  payment_method_name?: string;
  payment_method_desc?: string;
  payment_type?: string;
  bank_id?: string;
  bank_name?: string;
  bank_account_name?: string;
  bank_account_type_name?: string;
  bank_account_number?: string;
  bank_logo_image_url?: string;
  bank_qrcode_image_url?: string;
  payment_status_code: string;
  payment_status_name: string;
  payment_status_desc: string;
  first_name: string;
  last_name: string;
  id_card?: string;
  birth_date?: string;
  email: string;
  tel: string;
  defult_address?: string;
  address_type?: string;
  address?: string;
  subdistrict?: string;
  distinct?: string;
  province?: string;
  postcode?: string;
  vat_address_type?: string;
  vat_address?: string;
  vat_subdistrict?: string;
  vat_distinct?: string;
  vat_province?: string;
  vat_postcode?: string;
  payment_amount_format: string;
  user_title_id?: number;
  user_title_name_th?: string;
  user_title_name_en?: string;
  item: IBookingDetailItemSchema[];
  coupon_discount_group_patois_total_value?: number;
}

export interface IBookingDetailItemSchema {
  booking_item_id: string;
  booking_id: string;
  product_id: string;
  product_type_id: string;
  quantity: number;
  unit_price: number;
  discount_percent?: number;
  discount_price?: number;
  amount: number;
  product_name: string;
}

export interface IMaxMePaymentSchema {
  payment_id: string;
  payment_method_id: string;
  payment_amount: number;
  payment_status_id: string;
  payment_image?: string;
  user_id?: string;
  create_date: Date;
  create_by?: string;
  update_date: Date;
  update_by?: string;
  payment_slip_payload?: string;
  payment_remark?: string;
  slip_amount?: string;
  transfer_date?: string;
  qrcode_for_payment: string;
  qrcode_for_payment_transaction_id: string;
  notes_for_the_team?: string;
  payment_status_code: string;
  payment_status_name: string;
  payment_status_desc: string;
}

export interface IUniversityClass {
  imageSrc: string;
  logoSrc: string;
  title: string;
  universityName?: string;
  dateTime: string;
  locations: string;
  navigatePath: string;
}

export interface ICompetitionTeam {
  imageSrc: string;
  name: string;
  type: COMPETITION_TYPE;
  nameList: string[];
}

export interface ICompetitionReward {
  value: number;
  type: COMPETITION_TYPE;
}

export interface YSCRegisterTimeline {
  date: string;
  schedule: string;
}

export interface IYSCMasterConfig {
  config_ysc_id: string;
  config_name: string;
  config_value: string;
  order_no: number;
  type: string | undefined;
}

export interface IYSCRecommendUniversity {
  type: string;
  universityName: string;
}
