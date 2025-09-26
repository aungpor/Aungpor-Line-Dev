export interface IGTMPackagePurchase {
  currency: string;
  value: number;
  coupon?: string;
  affiliation?: string;
  transaction_id?: string;
  discount?: number;
  payment_type?: string;
  ecommerce: IGTMECommerceItem[];
}

export interface IGTMECommerceItem {
  item_id: string;
  item_name: string;
  price: number;
  item_brand: string;
  item_list_name: string;
  item_list_id: string;
  quantity: number;
  index: number;
}
