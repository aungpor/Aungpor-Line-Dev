import { IPackageCard } from "./travel.interface";

export interface IHomeTabs {
  key: number | string;
  title: string;
  value: string;
  seeMoreUrl: string;
  width?: string;
  redirectUrl?: string;
}

export interface IHomeSuggestionPackage {
  popularPackageList: IPackageCard[];
  recommendPackageList: IPackageCard[];
  newPackageList: IPackageCard[];
}

export interface IPackageCategoryIcon {
  package_category_id: string;
  package_category_name: string;
  package_category_desc: string;
  active: boolean;
  create_date: string;
  create_by: string;
  update_date: string;
  update_by: string;
  order_no: number;
  show_main_page: boolean;
  search_text: string;
  img_url: any;
  show_main_page_order_no: number;
}

export interface IHomeSearchResault {
  type: string;
  id: string;
  name: string;
  location_name: string;
  wonnok_location_name: string;
  match_order: number;
  view_popular_order: number;
  province_id?: string;
  districts_id?: number;
  subdistrict_id?: number;
  package_type_id?: string;
  package_image_profile_url?: string;
  affiliate_link?: string;
  affiliate_type_id?: string;
}
