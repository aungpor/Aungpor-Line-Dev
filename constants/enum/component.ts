export enum SIZE {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export enum PROCESS_STATUS {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  WAITING = "WAITING",
}

export enum PAYMENT_FEATURE {
  YOUNG_SCOUT = "YOUNG_SCOUT",
  OFFLINE_PAYMENT = "OFFLINE_PAYMENT",
}

export enum MY_ORDER_TYPE {
  COMMON = "COMMON_TYPE",
  VOUCHER = "VOUCHER_TYPE",
  OTHER = "OTHER_TYPE",
}

export enum MY_ORDER_TABS_KEY {
  ACTIVITY = "my-order-activity-tabs",
  VOUCHER = "my-order-voucher-tabs",
  OTHERS = "my-order-others-tabs",
}

export type TMyOrdersStatus =
  | MY_ORDERS_STATUS
  | MY_ORDERS_OTHER_STATUS
  | MY_ORDERS_VOUCHER_STATUS;

export enum MY_ORDERS_STATUS {
  READY_TO_USE = "1",
  USED_UP = "2",
  EXPIRED = "3",
}

export enum MY_ORDERS_VOUCHER_STATUS {
  DEFAULT = "6",
}

export enum MY_ORDERS_OTHER_STATUS {
  IN_PROGRESS = "4",
  PROGRESSED = "5",
}

export enum MY_ORDERS_FILTER_BY {
  PURCHASE_DATE = "1",
  EXPIRED_DATE = "2",
  WAITING_FOR_REVIEW = "3",
  LAST_USED_DATE = "4",
  STATUS = "5",
}

export enum PACKAGE_USING_CONTENT_TYPE {
  SUMMARY = "SUMMARY",
  SELECT_AMOUNT = "SELECT_AMOUNT",
}

export enum PACKAGE_USING_TYPE {
  BY_MEMBER = "use_by_member",
  BY_GUEST = "use_by_no_member",
}

export enum SHOP_PACKAGE_STATUS {
  GENERATE = "GENERATE",
  USED = "USED",
}

export enum COMPETITION_TYPE {
  WINNER = "WINNER",
  FIRST_RUNNER = "FIRST_RUNNER",
  SECOND_RUNNER = "SECOND_RUNNER",
  HONORABLE_MENTION = "HONORABLE_MENTION",
}

export enum USING_PACKAGE_TABS {
  BY_BOOKING = "using-by-booking-tabs",
  BY_QR_CODE = "using-by-qrcode-tabs",
}

export const MY_ORDER_CARD_SHOW_TRANSFER_DATE: TMyOrdersStatus[] = [
  MY_ORDERS_STATUS.READY_TO_USE,
  MY_ORDERS_OTHER_STATUS.IN_PROGRESS,
  MY_ORDERS_OTHER_STATUS.PROGRESSED,
  MY_ORDERS_VOUCHER_STATUS.DEFAULT,
];

export const MY_ORDER_CARD_SHOW_EXPIRED_DATE = [
  MY_ORDERS_OTHER_STATUS.IN_PROGRESS,
  MY_ORDERS_OTHER_STATUS.PROGRESSED,
];

export enum MAXMU_PACKAGE_ID {
  HOROSCOPE = "15",
  TRIP = "18",
  MAKE_MERIT = "73",
}

export enum SOCIAL_AUTH_TYPE {
  LINE = "LINE",
  FACEBOOK = "Facebook",
  GOOGLE = "Google",
}

export enum AUTHENTICATION_STATUS {
  OTP = "OTP",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  REGISTER_OTP = "REGISTER_OTP",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
}

export enum ERROR_MESSAGE {
  TRY_AGAIN = "เกิดข้อผิดพลาดบางอย่าง กรุณาลองอีกครั้ง",
}

export enum AUTHENTICATION_ERROR {
  EMIAL_INVALID = "ข้อมูลอีเมลไม่ถูกต้อง",
  REQUIRED_AUTHEN_ID = "กรุณาระบุอีเมลหรือเบอร์โทรศัพท์",
  EMAIL_LOGIN_INVALID = "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
  OTP_EXPIRED = "OTP หมดอายุ กรุณาขอ OTP ใหม่",
  OTP_INVALID = "รหัสยืนยันไม่ถูกต้อง",
  OTP_EXCEEDED = "กรอก OTP ผิดเกินจำนวนครั้ง สามารถขอ OTP ใหม่ภายหลัง",
}

export enum SIGN_IN_ERROR_RESPONSE {
  EXPIRED = "expire",
  EXCEEDED = "exceeded",
  INCORRECT = "incorrect",
}
export enum HOME_SEARCH_TYPE {
  all = "all",
  activity_ticket = "activity_ticket",
  hotel = "hotel",
  insurance = "insurance",
}

export enum HOME_SEARCH_RESAULT_TYPE {
  location = "location",
  activity_ticket = "activity_ticket",
  content = "content",
  hotel = "hotel",
  insurance = "insurance",
  package = "package",
  shop = "shop",
  travel = "travel",
  food = "food",
  rent_car = "rent_car",
}

export enum MANAGE_PACKAGE_TYPE {
  PACKAGE = "1",
  COURSES = "2",
  MAX_MU = "3",
  AFFILIATE = "4",
  MAX_MU_CUSTOM = "5",
  E_VOUCHER = "6",
}

export enum AFFILIATE_PACKAGE_CATEGORY_TABS {
  ACTIVITY = "activity_tab",
  HOTEL = "hotel_tab",
}

export enum AFFILIATE_PACKAGE_ORDER_BY {
  NEWEST = "1",
  HIGHEST_COMMISSION = "2",
  BEST_SELLER = "3",
}

export enum FILTER_DASHBOARD_TYPE {
  LAST_WEEK = "last7days",
  LAST_MONTH = "last30days",
  BY_MONTH = "month",
}

export enum CHART_FILTER_TYPE {
  CLICK = "1",
  COMMISSIONS = "2",
  TICKETS = "3",
}

export enum MASTER_CONFIG {
  AFFILIATE_MINIMUM_COMMISSION = "minimum_commission_user_affiliate",
}

export enum TAX_INVOICE_TYPE {
  INDIVIDUAL = 1,
  CORPORATE = 2,
}

export enum BILLING_ADDRESS_TYPE {
  ADDRESS = "address",
  EMAIL = "email",
}

export enum BOOKING_PACKAGE_TYPE {
  ACTIVITY = "activity_ticket",
  HOTEL = "hotel",
  PRODUCT = "product",
}

export enum BOOKING_SUBPACKAGE_TYPE {
  DEFAULT = "default",
  MAXMU = "maxmu",
  MAXNITRON = "maxnitron",
  CONTENT = "content",
}

export enum GTM_EVENT {
  BEGIN_CHECKOUT = "begin_checkout",
  WAITING_PAYMENTS = "waiting_payments",
  PAYMENT_INFO = "add_payment_info",
}

export enum PRODUCT_TYPE_ID {
  PACKAGE = "1",
  PRODUCT = "2",
  YSC_PACKAEG = "3",
}
