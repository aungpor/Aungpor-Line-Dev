export interface IProvince {
  id: string;
  code: string;
  name_th: string;
  name_en: string;
  geography_id: number;
  geography_name: string;
}
export interface IRegion {
  id: number;
  geography_id: string;
  geography_name: string;
}

export interface IMasterConfig {
  config_id: string;
  config_name: string;
  config_values: string;
}

export interface IAddress {
  provinces_name: string;
  districts_name: string;
  subdistricts_name: string;
  zipcode: number;
  provinces_id: string;
  districts_id: number;
  subdistricts_id: number;
}

export interface IGender {
  gender_id: string;
  gender_name: string;
}

export interface IChineseZodiac {
  chinese_zodiac_id: string;
  chinese_zodiac_name: string;
}

export interface IEnhanceSuccess {
  title_need_success_id: string;
  title_need_success_name: string;
}

export interface IPackageCategory {
  package_category_id: string;
  package_category_name: string;
  package_category_desc: string;
  active: boolean;
  order_no: number;
  show_main_page: boolean;
  search_text: string;
  img_url: string;
  show_main_page_order_no: number;
}
