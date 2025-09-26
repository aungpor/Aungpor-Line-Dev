export interface IPatoisMaxcard {
  patois_maxcard_id: number;
  patois_user_id: string;
  patois_tel: string;
  patois_maxcard_no: string;
  patois_status: string;
  patois_active: boolean;
  patois_created_at: Date | string;
  patois_updated_at: Date | string;
  patois_create_by: string;
  patois_update_by: string;
}

export interface IMaxcard {
  ActivateDate: string | Date;
  ActivateShop: string;
  CarType: string;
  CardNo: string;
  CardStatus: string;
  CardType: string;
  CitizenId: string;
  CustomerId: string;
  CustomerStatus: number;
  FirstName: string;
  LastName: string;
  NormalPoint: number;
  PhoneNo: string;
  RegisterDate: string | Date;
  SpecialPoint: number;
  IconMaxcard: string;
}

export interface IMaxcardDiscount {
  CustomerId: string;
  CardNo: string;
  CardStatus: string;
  ActivateDate: string;
  RegisterDate: string;
  CitizenId: string;
  FirstName: string;
  LastName: string;
  PhoneNo: string;
  CustomerStatus: number;
  ActivateShop: string;
  CardType: string;
  CarType: string;
  NormalPoint: number;
  SpecialPoint: number;
  discount_per_month_used: any;
  maxcard_discount_percent: any;
  discount_per_month_maximum: any;
  maxcard_discount_buy_miminum: any;
  maxcard_id: number;
  IconMaxcard: string;
  discount_value_bath: number;
  point: number;
  multiply: boolean;
  payment_amount: number;
  earn_point: number;
  unlimited_discounts: boolean;
  MaxCardDiscountList: IMaxcardDiscountList[];
  MaxCardConfigDiscountList: IMaxcardDiscountList[];
  MaxCardDefaultDiscount: IMaxcardDiscountList;
}

export interface IMaxcardDiscountList {
  discount_value_bath: number;
  maxcard_discount_percent: number;
  discount_per_month_maximum: number;
  maxcard_discount_buy_miminum: number;
  multiply: boolean;
  point: number;
  promotion_id: number;
  promotion_name: string;
  earn_point: number;
  payment_amount: number;
  pattern_type: string;
  unlimited_discounts: any;
  package_id: string;
  discount_per_month_used: number;
}

export interface IMaxCardBookingDiscount {
  CustomerId: string;
  CardNo: string;
  CardStatus: string;
  ActivateDate: string;
  RegisterDate: string;
  CitizenId: string;
  FirstName: string;
  LastName: string;
  CustomerStatus: number;
  ActivateShop: string;
  CardType: string;
  CarType: string;
  NormalPoint: number;
  SpecialPoint: number;
  TotalPoint: number;
  IconMaxcard: string;
  maxcard_id: number | undefined;
  MaxCardDefaultDiscount: IMaxCardDiscount;
  MaxCardConfigDiscountList: IMaxCardDiscount[];
}

export interface IMaxCardDiscount {
  discount_value_bath: number | undefined;
  maxcard_discount_percent: number;
  discount_per_month_maximum: number;
  maxcard_discount_buy_miminum: number;
  multiply: boolean | undefined;
  point: number | undefined;
  promotion_id: number;
  promotion_name: string;
  earn_point: number;
  payment_amount: number;
  pattern_type: string;
  unlimited_discounts: boolean;
  package_id: string;
  discount_per_month_used: number;
}

export interface IMaxCardDiscountParams {
  phoneNo: string;
  package_id: string;
}

export interface IMaxcardInfoResponse {
  patois_maxcard_id: number;
  patois_user_id: string;
  patois_tel: string;
  patois_maxcard_no: string;
  patois_status: string;
  patois_active: boolean;
  patois_created_at: Date;
  patois_updated_at: Date;
  patois_create_by: string;
  patois_update_by: string;
}
