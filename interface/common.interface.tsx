import { IconName } from "components/Common/Icons";

export interface IOGShare {
  title: string;
  url: string;
  description: string;
  imageURL: string;
}

export interface IOption {
  key?: string | number;
  value: string | number;
  label: string | React.ReactNode;
  [name: string]: any;
}

export type TPaginationCallBack = (page: number, pageSize: number) => void;

export interface IPagination {
  page: number;
  pageSize: number;
}

export interface ITabItem {
  key: string;
  label: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  forceRender?: boolean;
  closable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

export interface ISiminarContentItem {
  icon: string;
  title: string;
  className?: string;
}

export type TEnum = Record<string, string | number>;

export interface IFooterIcon {
  name: IconName;
  size?: number;
  viewBox?: string;
  className?: string;
}

export interface IFooterSocialIcon {
  bwIcon: string;
  colorIcon: string;
  name: string;
  path: string;
  alt?: string;
}
