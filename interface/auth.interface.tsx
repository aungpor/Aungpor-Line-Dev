export interface IAuthen {
  id: string;
  email: string;
  empid: string | null;
  groupsid: number;
  isBindMaxcard: boolean;
  lineid: string;
  name: string;
  password: boolean;
  patoisMaxcardId: number;
  pdpa_id: number;
  pdpa_version: string;
  picture: string;
  picturePatois: string;
  provider: string;
  status: string;
  tel: string;
  tokenCustomer: string;
  userId: string;
  userSecret: string;
  userlineId: string;
  profile_pic_line: string;
  profile_pic_patois: string;
  isMerchant: boolean;
  isUserAffiliate: boolean;
  is_new_version: boolean;
}

export interface IPdpaConsemtAccept {
  accept_subtitle_id: number;
  accept_title_id: number;
  accept_subtitle_name: string;
  accept_subtitle_img: string;
  accept_subtitle_route: string;
  accept_subtitle_text: string;
  accept_subtitle_not_submit: string;
  accept_subtitle_submit: string;
  accept_subtitle_validate: string;
  create_date: Date;
  update_date: Date;
  start_date: Date;
  end_date: Date;
  create_by: null;
  update_by: null;
  active: boolean;
  accept_subtitle_defaultvalue: string;
  accept_subtitle_header: string;
  accept_subtitle_detail: string;
}

export interface IUtmQuery {
  utm_source: string;
  utm_medium: string;
  utm_term: string;
  utm_content: string;
  utm_campaign: string;
}
