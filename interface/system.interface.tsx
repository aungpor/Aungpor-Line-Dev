export interface IServerDate {
  currentDatetime: Date;
}

export interface ISeminarActivities {
  seminar_interested_activities_id: string;
  seminar_interested_activities_name: string;
  active: boolean;
  order_no: number;
}

export interface ILanding {
  section_name: string;
  landing_section_id: string;
  category_name: string;
  landing_category_id: string;
  sub_category_name: string;
  landing_id: string;
  landing_sub_category_id: string;
  landing_name: string;
  landing_detail: string;
  images_id: string;
  short_desc: string;
  short_quote: string;
  show_writer_name: boolean;
  start_date: string;
  end_date: string;
  active: boolean;
  create_date: string;
  create_by: string;
  update_date: string;
  update_by: string;
  order_no: string;
  approve: boolean;
  image_list: string;
  image_url: string;
  image_list_thumbnail: string;
  image_url_thumbnail: string;
  tag_name: string;
  tag_id: string;
  name: string;
  profile_pic_line: string;
  profile_pic_patois: any;
  image_desktop_url: string;
  image_desktop_list: string;
  list_landing_detail?: Array<any>;
  type: string;
  image_mobile_url: string;
  image_mobile_list: string;
  show_all_package_button: boolean;
}
