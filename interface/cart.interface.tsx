export interface ICartDetail {
  count: number;
  list: ICartDetailList[];
}

export interface ICartCheckout {
  count: number;
  list: ICartDetailList[];
}

export interface ICartDetailExpire {
  count: number;
  list: ICartDetailList[];
}

export interface ICartDetailList {
  shop_name: string;
  shop_id: string;
  productList: ICartDetailProductList[];
}

export interface ICartDetailProductList {
  cart_id: string;
  product_id: string;
  sub_product_id: string;
  product_type_id: string;
  package_type_id: string;
  quantity: number;
  create_date: string;
  create_by: string;
  update_date: string;
  update_by: string;
  shop_id: string;
  shop_name: string;
  package_name: string;
  image_url_profile: string;
  sub_package_stock: number;
  sub_package_name: string;
  price: number;
  is_expire: boolean;
  type: string;
  sub_package_time: string;
  sub_package_expire_text: string;
  sub_package_id?: string;
  sub_package_discount_percent: number | null;
  sub_package_discount: number | null;
  sub_package_price: number;
  remark?: string;
  cost_type: number;
  gp_percentage: number;
  agent_rate_baht: number;
}

export interface ISubPackageForCart {
  isExpired?: boolean;
  sub_package_id?: string;
  package_id?: string;
  sub_package_name?: string;
  sub_package_stock?: number;
  sub_package_usage_count?: number;
  sub_package_activity_time_id?: any;
  sub_package_activity_time_hours?: number;
  sub_package_activity_time_minutes?: number;
  sub_package_activity_time_days?: number;
  sub_package_activity_time_nights?: number;
  sub_package_expire_options_id?: string;
  sub_package_expire_first_day_payment?: number;
  sub_package_expire_first_day_use?: number;
  sub_package_expire_start_date?: string;
  sub_package_expire_end_date?: string;
  sub_package_price?: number;
  sub_package_discount_percent?: number;
  sub_package_discount?: number;
  sub_package_price_after_discount?: number;
  sub_package_desc?: string;
  sub_package_image?: any;
  sub_package_code?: string;
  sub_package_ref_code?: string;
  active?: boolean;
  create_date?: string;
  create_by?: any;
  update_date?: string;
  update_by?: any;
  sub_package_sale_count?: number;
  order_no?: number;
  sub_package_expire_start_date_text?: string;
  sub_package_expire_start_date_text_shot?: string;
  sub_package_expire_end_date_text?: string;
  is_start_end_same_year?: boolean;
  is_started?: boolean;
  sub_package_time?: string;
  sub_package_expire_text?: string;
  select_value?: number;
  item_brand?: string;
  item_list_name?: string | null;
  item_list_id?: string;
  index?: number;
  cart_id?: string;
  product_id?: string;
  sub_product_id?: string;
  quantity: number;
  shop_id: string;
  shop_name: string;
  package_name?: string;
  image_url_profile?: string;
  price?: number;
  is_expire?: boolean;
  type?: string;
  product_type_id?: string;
  package_type_id?: string;
  cost_type?: number;
  gp_percentage?: number;
  agent_rate_baht?: number;
}

export interface ICartDetailResponse {
  cart: ICartDetail;
  cartExpire: ICartDetailExpire;
}

export interface ICartResponse {
  total: number;
  data: ICartDetailProductList[];
}

export interface IHeaderCartData {
  cart_id: string;
  product_id: string;
  sub_product_id: string;
  quantity: number;
  user_affiliate_ref_code: string;
  shop_id: string;
  shop_name: string;
  package_name: string;
  product_type_id: string;
  package_type_id: string;
  image_url_profile: string;
  sub_package_name: string;
  sub_package_desc: null;
  price: number;
  type: string;
}
