export interface ICommerceProfileSchema {
  shop_id: string;
  shop_name: string;
  image_profile: string | undefined;
}
export interface ICommerceProfile {
  shopId: string;
  shopName: string;
  imageURL: string | undefined;
}

export interface ICommerceBookingSchema {
  booking_code: string;
  package_name: string;
  shop_name: string;
  booking_text: string;
  booking_ref_code: string;
}

export interface IEmpB2BbookingDetail {
  bookingInfo: IEmpB2BBookingInfo;
  empList: IEmpB2BEmpList[];
  detailHotelList: IEmpB2BDetailHotelList[];
}

export interface IEmpB2BBookingInfo {
  booking_id: string;
  booking_code: any;
  booking_request_no: string;
  booking_ref_code: string;
  booking_status: string;
  booking_approve_date: string;
  b2_order_id: string;
  b2_order_create_date: string;
  b2_order_status: string;
  travel_objective: string;
  remark: string;
  create_date: string;
  create_by: any;
  update_date: string;
  update_by: any;
  active: boolean;
  booking_request_data: string;
  is_approve: boolean;
  booking_status_code: string;
  booking_status_name: string;
  booking_status_desc: string;
  booking_status_id: string;
  booking_label_status_1: string;
  booking_label_status_2: any;
  is_show_button_cancel: boolean;
  is_can_cancel: boolean;
  no_cancel_text: string;
  cancel_condition_text: string;
  button_cancel_text: string;
  create_date_text_yyyy_th: string;
  approve_date_textt_yyyy_th: string;
  create_date_text_yyyy_en: string;
  approve_date_textt_yyyy_en: string;
}

export interface IEmpB2BEmpList {
  booking_emp_id: string;
  booking_id: string;
  emp_id: string;
  emp_name: string;
  emp_pos: string;
  emp_dep: string;
  emp_cost: string;
  emp_tel: string;
  emp_mail: string;
  create_date: string;
  create_by: any;
  update_date: string;
  update_by: any;
  manager_mail: any;
  manager_name: any;
  costcompany: string;
  costcenter_name: string | null;
  costcenter_id: string | null;
  io: string | null;
}

export interface IEmpB2BDetailHotelList {
  booking_detail_id: string;
  booking_id: string;
  province: string;
  hotel_id: string;
  hotel_name: string;
  check_in: string;
  check_out: string;
  detail: string;
  create_date: string;
  create_by: any;
  update_date: string;
  update_by: any;
  check_in_text_format_yy: string;
  check_in_text_format_yyyy: string;
  check_out_text_format_yy: string;
  check_out_text_format_yyyy: string;
  check_in_out_text_for_send_email: string;
  create_date_text_for_send_email: string;
}

export interface IBookingMaxMu {
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
  donated_to_name?: string;
  prayer_or_forgiveness_text?: string;
}
