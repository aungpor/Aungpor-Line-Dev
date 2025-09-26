import { AFFILIATE_PACKAGE_CATEGORY_TABS } from "constants/enum/component";

export interface IUserAffiliateManagementForm {
  searchInput: string;
  filterProvinceId: string;
  filterProvinceName: string;
  filterCategories: string[];
  filterOrderBy: string;
}

export interface IAffiliatePackageCategory {
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

export interface IUserAffiliatePackage {
  count: number;
  list: IUserAffiliatePackageSchema[];
}

export interface IUserAffiliatePackageSchema {
  package_id: string;
  package_name: string;
  sale_count: number;
  create_date: Date;
  package_location: string;
  image_list: string;
  image_url: string;
  package_promotion_full_price: number;
  package_promotion: boolean;
  package_price: number;
  package_multi_price: boolean;
  max_commission_baht: number;
  min_commission_baht: number;
  commission_baht: string | undefined;
}

export interface ISearchAffiliatePackageParams {
  search_text: string;
  search_tab: AFFILIATE_PACKAGE_CATEGORY_TABS;
  province_id: string;
  category_id: string;
  order_by: string;
  pageNumber: number;
  rowsOfPage: number;
}

export interface IUserAffiliateProfile {
  user_affiliate_id: string;
  user_id: string;
  tel: string;
  email: string;
  user_affiliate_ref_code: string;
  my_affiliate_id: string;
  commission_total: number;
  account_name: string;
  account_number: string;
  bank_name: string;
  branch_name: string;
  first_name: string;
  last_name: string;
  id_card: string;
  address: string;
}

export interface ILogUserAffiliateGenLink {
  user_affiliate_id: string;
  package_id: string;
}

export interface IAffiliateTransaction {
  user_affiliate_ref_code: string;
  package_id: string;
}

export interface IAffiliateDashboardParams {
  filter_type: string;
  month?: string;
  year?: string;
}

export interface IAffiliateDashboard {
  click_count: number;
  ticket_count: number;
  commission_count: number;
  topPerformingAds: IAffiliateTopAds[];
  performanceClick: IAffiliatePerformanceChart[];
  performanceTickets: IAffiliatePerformanceChart[];
  performanceCommission: IAffiliatePerformanceChart[];
}

export interface IAffiliateTopAds {
  package_id: string;
  package_name: string;
  click_count: number;
}

export interface IAffiliatePerformanceChart {
  TransactionDate: string;
  TransactionCount: number;
}

export interface IAffiliateWithdrawalHistory {
  withdraw_date: string;
  commission_withdraw: number;
  billing_cycle: string;
}
