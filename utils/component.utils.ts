import { TMyOrdersStatus } from "constants/enum/component";
import { ITabItem } from "interface/common.interface";
import {
  MY_ORDERS_OTHER_STATUS,
  MY_ORDERS_STATUS,
} from "./transformData.utils";

export const getYSCTabsClassName = (
  activeKey: string,
  tabItems: ITabItem[],
  isMobile = false,
  defaultClassName = "ysc-tab-container",
) => {
  let className = defaultClassName;
  if (!tabItems.length) return className;

  const lastIndex = tabItems.length - 1;

  if (isMobile && tabItems.length > 3) {
    className += " sut-mobile-tab";
  }

  if (activeKey === tabItems?.[0].key) {
    className += " first-tabs-ink-bar";
  } else if (activeKey === tabItems?.[lastIndex].key) {
    className += " last-tabs-ink-bar";
  }

  return className;
};

export const isCommonOrdersStatus = (type: TMyOrdersStatus | undefined) => {
  if (!type) return false;
  return Object.values(MY_ORDERS_STATUS).includes(type as MY_ORDERS_STATUS);
};

export const isOtherOrdersStatus = (type: TMyOrdersStatus | undefined) => {
  if (!type) return false;

  return Object.values(MY_ORDERS_OTHER_STATUS).includes(
    type as MY_ORDERS_OTHER_STATUS,
  );
};

export const filterSelectOption = (input: string, option: any) => {
  return (option?.label?.toString() ?? "").includes(input);
};
