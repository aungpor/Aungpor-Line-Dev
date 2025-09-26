import { ICouponAvailableSchema } from "./booking.interface";

export interface IPaymentMethod {
  payment_method_id: string;
  payment_method_name: string;
  payment_method_desc: string;
  active: boolean | undefined[];
  payment_type: string;
  image_logo_url: string;
  bank_id?: string[];
  bank_name?: string;
  bank_account_name?: string;
  bank_account_type_name?: string;
  bank_account_number?: string;
  bank_logo_image_id?: string;
  bank_qrcode_image_Id?: string;
  receiver_bank_short?: string;
  receiver_account_bank_account?: string;
  receiver_account_proxy_account?: string;
  receiver_account_name_th?: string;
  bank_logo_image_url?: string;
  bank_qrcode_image_url?: string;
}

export interface ICreatePayment {
  payment_id: string;
  payment_method_id: string;
  payment_amount: number;
  payment_status_id: string;
  payment_image: any;
  user_id: string;
  create_date: string;
  create_by: string;
  update_date: string;
  update_by: string;
  payment_slip_payload: any;
  payment_remark: any;
  slip_amount: any;
  transfer_date: any;
  qrcode_for_payment: any;
  qrcode_for_payment_transaction_id: any;
  notes_for_the_team: any;
  payment_gw_order_id: string;
  payment_gw_ref1: string;
  payment_gw_ref2: string;
  payment_gw_ref3: string;
  payment_gw_qrbast64: string;
  payment_gw_file_extension: string;
  payment_gw_transaction_id: string;
  payment_gw_callback_amount_paid: any;
  payment_gw_callback_fee_amount: any;
  payment_gw_callback_vat_amount: any;
  payment_gw_callback_transaction_amount: any;
  payment_gw_callback_sender_account_name: any;
  payment_gw_callback_sender_bank_code: any;
  payment_gw_callback_sender_account_number: any;
  payment_gw_callback_transaction_datetime: any;
  payment_status_code: string;
  payment_status_name: string;
  payment_status_desc: string;
}

export interface IPaymentSummaryForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  lineId?: string;
  maxCardDiscount: number;
  paymentType: string;
  maxCardDefaultDiscount: IMaxCardDefaultDiscountForm;
  maxPointDefaultDiscount: IMaxPointDefaultDiscountForm;
  maxPointConfigDiscount: IMaxPointConfigDiscountForm[];
}

export interface IMaxCardDefaultDiscountForm {
  checked: boolean;
}
export interface IMaxPointDefaultDiscountForm {
  usedPoint: number;
  discount: number;
}

export interface IMaxPointConfigDiscountForm {
  packageId: string;
  checked: boolean;
  amount: number;
  usedPoint: number;
  discount: number;
}

export interface IPackageDiscountSummary {
  couponData: ICouponAvailableSchema | undefined;
  nettPackagePrice: number;
  couponDiscountPrice: number;
  defaultMaxPointDiscount: number | undefined;
  maxCardDefaultDiscountPrice: number;
  maxCardSpecificDiscountPrice: number;
}
