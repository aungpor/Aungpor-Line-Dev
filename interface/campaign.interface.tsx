export interface ICampaignInfoEncrypt {
  campaign_id: string;
  campaign_code: string;
  campaign_name: string;
  campaign_desc: string;
  limit_promo_per_giver: number;
  limit_promo_per_receiver: number;
  limit_promo_per_campaign: number;
  campaign_start_date: Date;
  campaign_end_date: Date;
  active: boolean;
  promo_point_code?: any;
  promo_coupon_type?: any;
  for_new_user_only: string;
  campaign_noti_title?: any;
  landing_page_title: string;
  landing_page_detail_html: string;
  landing_page_condition_html: string;
  campaign_noti_icon?: any;
  campaign_noti_condition?: any;
  global_for_new_user?: any;
  new_campaign_image_html: string;
}

export interface ISendCampaignPromo {
  page_type: string | string[] | undefined;
  campaign_code: string | string[] | undefined;
  ref_code: string | string[] | undefined;
  ref_type: string | string[] | undefined;
}

export interface ICampaignByUserRefCode {
  campaign_id: string;
  campaign_code: string;
  campaign_name: string;
  campaign_desc: string;
  limit_promo_per_giver: number;
  limit_promo_per_receiver: number;
  limit_promo_per_campaign: number;
  campaign_start_date: string;
  campaign_end_date: string;
  active: boolean;
  promo_point_code: any;
  promo_coupon_type: any;
  for_new_user_only: string;
  campaign_noti_title: any;
  landing_page_title: string;
  landing_page_detail_html: string;
  landing_page_condition_html: string;
  campaign_noti_icon: any;
  campaign_noti_condition: any;
  global_for_new_user: any;
  ref_code: string;
  campaign_url: string;
  new_campaign_image_html: string;
}
