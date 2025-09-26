import { IconName } from "components/Common/Icons";
import { COMMERCE_MENU_TYPE, USER_AFFILIATE_MENU_TYPE } from "constants/Menu";
import { ParsedUrlQueryInput } from "querystring";

export interface IMenu {
  key: string;
  label: string;
  path: string;
}

export interface IHeaderMenu {
  label: string;
  path: string;
  icon?: IconName;
  isSuggest?: boolean;
  query?: string | ParsedUrlQueryInput | null;
}

export interface IProfileMenu {
  label: string;
  path?: string;
  iconPath: IconName;
  disabledType?: "DESKTOP" | "MOBILE";
}

export interface IFooterMenu {
  title: string;
  menu: ISubProfileMenu[];
}

export interface ISubProfileMenu {
  label: string;
  path?: string;
  type?: "AFFILIATE_REGISTER" | "AFFILIATE_MANAGEMENT" | "LOGOUT";
}

export enum MENU_TYPE {
  DIVIDER = "divider",
}

export interface IHamburgerMenu {
  label: string;
  path?: string;
  query?: Object;
  menu?: ISubMenuItem[];
  icon?: string;
}

export interface IHamburgerSubMenu {
  key: string;
  label: string;
  menu: ISubMenuItem[];
}

export interface ISubMenuItem {
  label: string;
  path: string;
}

export interface ICommerceMenu {
  title: string;
  iconPath: IconName;
  path: string;
  type: COMMERCE_MENU_TYPE;
}

export interface IUserAffiliateMenu {
  title: string;
  iconPath: IconName;
  type: USER_AFFILIATE_MENU_TYPE;
}
