export interface IBanner {
  active: boolean;
  body_html: string;
  button_text: string;
  create_by: string;
  create_date: string | Date;
  expire_date: string | Date;
  group_code: string;
  group_desc: string;
  image_url: string;
  image_url_thumbnail: string;
  link: string;
  order_no: number;
  patois_banner_id: string;
  title: string;
  update_by: string;
  update_date: string | Date;
  image_url_for_mobile: string;
  image_url_for_web: string;
  affiliate_id: number;
  package_affiliate_name: string;
  affiliate_icon: string;
  affiliate_icon_row: string;
  affiliate_type_id: string;
  affiliate_tab_type: string;
}
