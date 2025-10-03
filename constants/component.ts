import { IUtmQuery } from "interface/auth.interface";
import { IFooterIcon, IOption, IPagination } from "interface/common.interface";
import {
  AFFILIATE_PACKAGE_ORDER_BY,
  BILLING_ADDRESS_TYPE,
  CHART_FILTER_TYPE,
  MY_ORDERS_FILTER_BY,
  MY_ORDERS_OTHER_STATUS,
  MY_ORDERS_STATUS,
  MY_ORDERS_VOUCHER_STATUS,
  PACKAGE_USING_CONTENT_TYPE,
  PACKAGE_USING_TYPE,
  TAX_INVOICE_TYPE,
  TMyOrdersStatus,
} from "./enum/component";
import type { Options as TScrollIntoViewOptions } from "scroll-into-view-if-needed";

export const UPLOAD_IMAGE_ACCEPT = "image/*";

export const DROP_ZONE_IMAGE_ACCEPT = {
  "image/jpeg": [],
  "image/png": [],
  "image/webp": [],
  "image/heic": [],
  "image/jfif": [],
};

export const MAP_ORDERS_STATUS_TITLE = new Map<string, string>([
  [MY_ORDERS_STATUS.READY_TO_USE, "พร้อมใช้"],
  [MY_ORDERS_STATUS.USED_UP, "ใช้หมดแล้ว"],
  [MY_ORDERS_STATUS.EXPIRED, "หมดอายุ"],
  [MY_ORDERS_OTHER_STATUS.IN_PROGRESS, "กำลังดำเนินการ"],
  [MY_ORDERS_OTHER_STATUS.PROGRESSED, "ดำเนินการแล้ว"],
]);

export const MAP_ORDERS_STATUS_TYPE = new Map<string, TMyOrdersStatus>([
  ["พร้อมใช้งาน", MY_ORDERS_STATUS.READY_TO_USE],
  ["ใช้หมดแล้ว", MY_ORDERS_STATUS.USED_UP],
  ["หมดอายุ", MY_ORDERS_STATUS.EXPIRED],
  ["กำลังดำเนินการ", MY_ORDERS_OTHER_STATUS.IN_PROGRESS],
  ["ดำเนินการแล้ว", MY_ORDERS_OTHER_STATUS.PROGRESSED],
]);

export const IS_SHOW_USED_PACKAGE_DATE: TMyOrdersStatus[] = [
  MY_ORDERS_STATUS.READY_TO_USE,
  MY_ORDERS_STATUS.USED_UP,
  MY_ORDERS_OTHER_STATUS.IN_PROGRESS,
  MY_ORDERS_OTHER_STATUS.PROGRESSED,
  MY_ORDERS_VOUCHER_STATUS.DEFAULT,
];

export const IS_SHOW_EXPIRED_PACKAGE_DATE: TMyOrdersStatus[] = [
  MY_ORDERS_STATUS.READY_TO_USE,
  MY_ORDERS_STATUS.USED_UP,
  MY_ORDERS_STATUS.EXPIRED,
  MY_ORDERS_OTHER_STATUS.PROGRESSED,
  MY_ORDERS_VOUCHER_STATUS.DEFAULT,
];

export const MY_ORDERS_FILTER_OPTIONS: IOption[] = [
  {
    label: "วันที่ซื้อ",
    value: MY_ORDERS_FILTER_BY.PURCHASE_DATE,
  },
  {
    label: "วันหมดอายุ",
    value: MY_ORDERS_FILTER_BY.EXPIRED_DATE,
  },
  {
    label: "รอรีวิว",
    value: MY_ORDERS_FILTER_BY.WAITING_FOR_REVIEW,
  },
];

export const MY_ORDERS_FILTER_USED_UP_OPTIONS: IOption[] = [
  {
    label: "วันที่ใช้ล่าสุด",
    value: MY_ORDERS_FILTER_BY.LAST_USED_DATE,
  },
  {
    label: "รอรีวิว",
    value: MY_ORDERS_FILTER_BY.WAITING_FOR_REVIEW,
  },
];

export const MY_ORDERS_FILTER_EXPIRED_OPTIONS: IOption[] = [
  {
    label: "วันหมดอายุ",
    value: MY_ORDERS_FILTER_BY.EXPIRED_DATE,
  },
  {
    label: "รอรีวิว",
    value: MY_ORDERS_FILTER_BY.WAITING_FOR_REVIEW,
  },
];

export const MY_ORDERS_FILTER_VOUCHER_OPTIONS: IOption[] = [
  {
    label: "สถานะ",
    value: MY_ORDERS_FILTER_BY.STATUS,
  },
  {
    label: "วันที่ซื้อ",
    value: MY_ORDERS_FILTER_BY.PURCHASE_DATE,
  },
];

export const INIT_PAGINATION: IPagination = {
  page: 1,
  pageSize: 12,
};

export enum API_RESPONSE {
  SUCCESS = 200,
}

export const FETCH_INTERVAL = 5000;

export const MAP_MY_ORDERS_PACKAGE_TYPE = new Map([
  [PACKAGE_USING_TYPE.BY_MEMBER, PACKAGE_USING_CONTENT_TYPE.SUMMARY],
  [PACKAGE_USING_TYPE.BY_GUEST, PACKAGE_USING_CONTENT_TYPE.SELECT_AMOUNT],
]);

export const PAGINATION_PAGE_SIZE_OPTIONS = ["12", "24", "36"];

export const SIMINAR_ACTIVITY_OPTIONS: IOption[] = [
  {
    label: "ที่พัก",
    value: "1",
  },
  {
    label: "Team Building",
    value: "2",
  },
  {
    label: "โรงแรมจัดสัมมนา",
    value: "3",
  },
  {
    label: "อื่นๆ",
    value: "4",
  },
  {
    label: "แพ็กเกจกิจกรรม",
    value: "5",
  },
];

export const FOOTER_DESCRIPTION =
  "แพลตฟอร์มที่จะพาคุณไปเปิดประสบการณ์การ\nท่องเที่ยวและลิ้มลองอาหารใหม่ๆ";
export const FOOTER_COPYRIGHT =
  "Copyright © 2020-2024 Max Ventures Co., Ltd. All rights reserved.";

export const FOOTER_SOCIAL_ICON: IFooterIcon[] = [
  {
    name: "SocialFacebook",
    viewBox: "0 0 20 20",
    className: "!w-[20px] !h-[20px]",
  },
  {
    name: "SocialLine",
    viewBox: "0 0 24 24",
    className: "!w-[24px] !h-[24px]",
  },
  {
    name: "SocialTiktok",
    viewBox: "0 0 24 24",
    className: "!w-[24px] !h-[24px]",
  },
  {
    name: "SocialYoutube",
    viewBox: "0 0 20 14",
    className: "!w-[20px] !h-[14px]",
  },
  {
    name: "SocialInstagram",
    viewBox: "0 0 20 20",
    className: "!w-[20px] !h-[20px]",
  },
];

export const PT_LOGO = "/images/logo/pt-logo.png";

export const PATOIS_LOGO =
  "https://wonknokstoragestdaccount.blob.core.windows.net/patois-picture/logo2024/logo-patois.png";

export const PTG_LOGO = "https://i.postimg.cc/PJ8QYbfJ/1147px-PTG-Energy-Logo-svg.png"

export const PATOIS_IMAGE_ALT =
  "Patois พาทัวร์ พาทัวร์พาไปกิน พาทัวร์รวมร้านอร่อยเด็ด รีวิวร้านอาหาร สูตรอาหาร โรงแรม ที่พัก และสถานที่ท่องเที่ยว on patois.com";

export const PATOIS_DEFAULT_AVATAR = "/images/profile-avatar.svg";

export const INIT_UTM_QUERY: IUtmQuery = {
  utm_source: "",
  utm_medium: "",
  utm_term: "",
  utm_content: "",
  utm_campaign: "",
};

export const MAXCARD_IMAGES = {
  PLUS: "https://wonknokstoragestdaccount.blob.core.windows.net/patois-picture/icon_maxcard/maxcard_plus_new.png",
  EV: "https://wonknokstoragestdaccount.blob.core.windows.net/patois-picture/icon_maxcard/maxcard_vertical_ev_new.png",
};

export const AFFILIATE_PACKAGE_ORDER_BY_OPTIONS: IOption[] = [
  {
    label: "ใหม่ล่าสุด",
    value: AFFILIATE_PACKAGE_ORDER_BY.NEWEST,
  },
  {
    label: "ค่าคอมมิชชั่นสูงสุด",
    value: AFFILIATE_PACKAGE_ORDER_BY.HIGHEST_COMMISSION,
  },
  {
    label: "ขายดี",
    value: AFFILIATE_PACKAGE_ORDER_BY.BEST_SELLER,
  },
];

export const INIT_AFFILIATE_MANAGEMENT_FORM_VALUE = {
  searchInput: "",
  filterProvinceId: "0",
  filterProvinceName: "ทุกจังหวัด",
  filterCategories: [],
  filterOrderBy: AFFILIATE_PACKAGE_ORDER_BY.NEWEST,
};

export const DEFAULT_PACKAGE_IMAGES =
  "https://wonknokstoragestdaccount.blob.core.windows.net/patois-picture/patois-picture/OG_Homepage_Contents_.jpg";

export const CHART_PERFOMANCE_OPTIONS: IOption[] = [
  {
    label: "Click",
    value: CHART_FILTER_TYPE.CLICK,
  },
  {
    label: "Commissions",
    value: CHART_FILTER_TYPE.COMMISSIONS,
  },
  {
    label: "Tickets",
    value: CHART_FILTER_TYPE.TICKETS,
  },
];

export const TAX_INVOICE_TYPE_OPTIONS: IOption[] = [
  {
    label: "บุคคลธรรมดา",
    value: TAX_INVOICE_TYPE.INDIVIDUAL,
  },
  {
    label: "นิติบุคคล",
    value: TAX_INVOICE_TYPE.CORPORATE,
  },
];

export const BILLING_ADDRESS_TYPE_OPTIONS: IOption[] = [
  {
    label: "จัดส่งทางที่อยู่",
    value: BILLING_ADDRESS_TYPE.ADDRESS,
  },
  {
    label: "Email อิเล็กทรอนิกส์",
    value: BILLING_ADDRESS_TYPE.EMAIL,
  },
];

export const SCROLL_FIRST_ERROR: TScrollIntoViewOptions = {
  behavior: "smooth",
  block: "center",
};
