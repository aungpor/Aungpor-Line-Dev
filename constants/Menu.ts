import { IFooterSocialIcon } from "interface/common.interface";
import {
  ICommerceMenu,
  IFooterMenu,
  IHamburgerMenu,
  IHeaderMenu,
  IProfileMenu,
  ISubProfileMenu,
  IUserAffiliateMenu,
} from "interface/menu.interface";

export enum HAMBURGER_MENU_TYPE {
  CONTENT = "CONTENT",
  SUB_CONTENT = "SUB_CONTENT",
}

export enum COMMERCE_MENU_TYPE {
  SALES_REPORT = "ประวัติการขาย",
  USING_PACKAGE = "ตัดแพ็กเกจ",
}

export enum USER_AFFILIATE_MENU_TYPE {
  DASHBOARD = "Dashboard",
  MANAGEMENT = "Affiliate Management",
  MY_REWARD_HISTORY = "My Reward",
  MY_REWARD_WITHDRAWAL = "ข้อมูลการถอนเงินค่าคอมมิชชั่น",
}

export const PROFILE_MENU: IProfileMenu[] = [
  {
    label: "การแจ้งเตือน",
    path: "/notification?type=coupon",
    iconPath: "NotificationOutline",
    disabledType: "DESKTOP",
  },
  {
    label: "ประวัติการซื้อของฉัน",
    path: "/profile/my-orders",
    iconPath: "BagOutline",
  },
  {
    label: "รายการที่บันทึก",
    path: "/profile/favorite",
    iconPath: "BookMaskOutline",
  },
  {
    label: "ภารกิจ",
    path: "/profile/mission",
    iconPath: "TargetOutline",
  },
  {
    label: "คูปองของฉัน",
    path: "/profile/coupons",
    iconPath: "CouponOutline",
  },
];

export const COMMERCE_PLATFORM_MENU: IProfileMenu[] = [
  {
    label: "จัดการร้านค้า",
    path: "/commerce-platform/sales-report",
    iconPath: "StorefrontOutline",
  },
  {
    label: "สแกน QR Code",
    path: "/commerce-platform/using-package?tab=using-by-qrcode-tabs",
    iconPath: "QRCodeFill",
    disabledType: "MOBILE",
  },
];

export const SUB_PROFILE_MENU: ISubProfileMenu[] = [
  {
    label: "สมัครเป็น Affiliate กับพาทัวร์",
    path: "https://docs.google.com/forms/d/e/1FAIpQLScCXQeXDlDV0UrnNBCOsLxuwntSD_bkm_KU7odgIdvhWXRbHg/viewform",
    type: "AFFILIATE_REGISTER",
  },
  {
    label: "จัดการ Affiliate ของฉัน",
    path: "/user-affiliate",
    type: "AFFILIATE_MANAGEMENT",
  },
  {
    label: "ออกจากระบบ",
    type: "LOGOUT",
  },
];

export const HEADER_NAVIGATION_MENU_LIST: IHeaderMenu[] = [
  {
    label: "กิจกรรม / บัตรเข้าชม",
    path: "/package/activity",
    icon: "VoucherFill",
    isSuggest: true,
    query: { init: "true" },
  },
  {
    label: "ที่พัก / โรงแรม",
    path: "/package/hotel",
    icon: "BedFill",
  },
  {
    label: "เช่ารถ",
    path: "/package/car-rental",
    icon: "CarFill",
  },
  {
    label: "อุ่นใจก่อนเดินทาง",
    path: "/package/travel-insurance",
    icon: "InsuranceFill",
  },
  {
    label: "บทความ",
    path: "/contents",
    icon: "ContentFill",
    query: { type: "all", page: "1" },
  },
  {
    label: "ร้านอาหาร",
    path: "/place/shop",
    icon: "FoodFill",
  },
  {
    label: "สถานที่ท่องเที่ยว",
    path: "/place/travel",
    icon: "LocationsPinFill",
  },
  // {
  //   label: "แพ็กเกจ",
  //   path: "/package",
  //   query: { init: "true" },
  // },
  // {
  //   label: "ที่พัก/โรงแรม",
  //   path: "/package/hotel",
  //   query: {
  //     pageNumber: "1",
  //     rowsOfPage: "12",
  //     order_by: "1",
  //     category_id_list: 19,
  //     init: "true",
  //   },
  // },
  // {
  //   label: "เช่ารถ",
  //   path: "/package/car-rental",
  // },
  // {
  //   label: "บทความ",
  //   path: "/contents?type=all&page=1",
  // },
  // {
  //   label: "เขียนรีวิว",
  //   path: "/addReview",
  // },
  // {
  //   label: "Young Scout",
  //   path: "/youngscout",
  // },
];

export const HAMBURGER_MENU_LIST: IHamburgerMenu[] = [
  {
    label: "กิจกรรม / บัตรเข้าชม",
    path: "/package/activity",
    query: { init: "true" },
    icon: "/icons/home/package_black.svg",
  },
  {
    label: "ที่พัก / โรงแรม",
    path: "/package/hotel",
    icon: "/icons/home/hotel_black.svg",
  },
  {
    label: "เช่ารถ",
    path: "/package/car-rental",
    icon: "/icons/home/car_black.svg",
  },
  {
    label: "อุ่นใจก่อนเดินทาง",
    path: "/package/travel-insurance",
    icon: "/icons/home/insurance_black.svg",
  },
  {
    label: "บทความ",
    path: "/contents?type=all&page=1",
    icon: "/icons/home/content_black.svg",
  },
  {
    label: "ร้านอาหาร",
    path: "/place/shop",
    icon: "/icons/home/food_black.svg",
  },
  {
    label: "สถานที่ท่องเที่ยว",
    path: "/place/travel",
    icon: "/icons/home/location_black.svg",
  },
];

export const HAMBURGER_SUB_MENU_LIST: IHamburgerMenu[] = [
  {
    label: "คำถามที่พบบ่อย",
    path: "/faq",
    icon: "/icons/home/info_black.svg",
  },
  {
    label: "ลูกค้าองค์กร",
    menu: [
      {
        label: "แพ็กเกจสำหรับองค์กร",
        path: "/seminar-package",
      },
      {
        label: "ที่พักสำหรับองค์กร",
        path: "/seminar-package",
      },
      {
        label: "ติดต่อจัดสัมมนา",
        path: "/seminar-package",
      },
      {
        label: "สนใจเป็นพาร์ทเนอร์กับเรา",
        path: "/partnership",
      },
    ],
    icon: "/icons/home/people_black.svg",
  },
  {
    label: "เกี่ยวกับเรา",
    menu: [
      {
        label: "เกี่ยวกับพาทัวร์",
        path: "/aboutme",
      },
      {
        label: "คำถามที่พบบ่อย",
        path: "/faq",
      },
      {
        label: "นโยบายความเป็นส่วนตัว",
        path: "/pdpapolicy",
      },
      {
        label: "เงื่อนไขการให้บริการ",
        path: "/termsofservice",
      },
      {
        label: "นโยบายคุกกี้",
        path: "/cookiepolicy",
      },
    ],
    icon: "/icons/home/about_black.svg",
  },
];

export const APP_FOOTER_SOCIAL_MENU: IFooterSocialIcon[] = [
  {
    bwIcon: "/images/social/facebook-bw.png",
    colorIcon: "/images/social/facebook-color.png",
    name: "facebook",
    path: "https://www.facebook.com/patois.th?mibextid=LQQJ4d",
    alt: "Facebook Patois พาทัวร์ พาทัวร์พาไปกิน พาทัวร์รวมร้านอร่อยเด็ด รีวิวร้านอาหาร สูตรอาหาร โรงแรม ที่พัก และสถานที่ท่องเที่ยว  on patois.com",
  },
  {
    bwIcon: "/images/social/line-bw.png",
    colorIcon: "/images/social/line-color.png",
    name: "line",
    path: "https://liff.line.me/1645278921-kWRPP32q/?accountId=patois",
    alt: "Line Patois พาทัวร์ พาทัวร์พาไปกิน พาทัวร์รวมร้านอร่อยเด็ด รีวิวร้านอาหาร สูตรอาหาร โรงแรม ที่พัก และสถานที่ท่องเที่ยว  on patois.com",
  },
  {
    bwIcon: "/images/social/tiktok-bw.png",
    colorIcon: "/images/social/tiktok-color.png",
    name: "tiktok",
    path: "https://www.tiktok.com/@patois.th",
    alt: "Tiktok Patois พาทัวร์ พาทัวร์พาไปกิน พาทัวร์รวมร้านอร่อยเด็ด รีวิวร้านอาหาร สูตรอาหาร โรงแรม ที่พัก และสถานที่ท่องเที่ยว  on patois.com",
  },
  {
    bwIcon: "/images/social/youtube-bw.png",
    colorIcon: "/images/social/youtube-color.png",
    name: "youtube",
    path: "https://www.youtube.com/@Patois-TH",
    alt: "Youtube Patois พาทัวร์ พาทัวร์พาไปกิน พาทัวร์รวมร้านอร่อยเด็ด รีวิวร้านอาหาร สูตรอาหาร โรงแรม ที่พัก และสถานที่ท่องเที่ยว  on patois.com",
  },
  {
    bwIcon: "/images/social/instagram-bw.png",
    colorIcon: "/images/social/instagram-color.png",
    name: "instagram",
    path: "https://www.instagram.com/patois.th",
    alt: "Instagram Patois พาทัวร์ พาทัวร์พาไปกิน พาทัวร์รวมร้านอร่อยเด็ด รีวิวร้านอาหาร สูตรอาหาร โรงแรม ที่พัก และสถานที่ท่องเที่ยว  on patois.com",
  },
];

export const APP_FOOTER_MENU: IFooterMenu[] = [
  {
    title: "ท่องเที่ยว",
    menu: [
      {
        label: "แพ็กเกจท่องเที่ยว",
        path: "/package",
      },
      {
        label: "ที่พัก / โรงแรม",
        path: "/package?pageNumber=1&rowsOfPage=12&order_by=1&category_id_list=19&init=true",
      },
      {
        label: "บทความท่องเที่ยว",
        path: "/contents?type=travel&page=1",
      },
      {
        label: "รีวิวท่องเที่ยว",
        path: "/place/travel",
      },
    ],
  },
  {
    title: "อาหาร",
    menu: [
      {
        label: "ร้านอาหารใกล้ฉัน",
        path: "/place/shop",
      },
      {
        label: "บทความอาหาร",
        path: "/contents?type=food&page=1",
      },
      {
        label: "รีวิวร้านอาหาร",
        path: "/place/shop",
      },
    ],
  },
  {
    title: "ลูกค้าองค์กร",
    menu: [
      {
        label: "แพ็กเกจสำหรับองค์กร",
        path: "/seminar-package",
      },
      {
        label: "ที่พักสำหรับองค์กร",
        path: "/seminar-package",
      },
      {
        label: "ติดต่อจัดสัมมนา",
        path: "/seminar-package",
      },
      {
        label: "สนใจเป็นพาร์ทเนอร์กับเรา",
        path: "/partnership",
      },
    ],
  },
  {
    title: "เกี่ยวกับเรา",
    menu: [
      {
        label: "เกี่ยวกับพาทัวร์",
        path: "/aboutme",
      },
      {
        label: "คำถามที่พบบ่อย",
        path: "/faq",
      },
      {
        label: "นโยบายความเป็นส่วนตัว",
        path: "/pdpapolicy",
      },
      {
        label: "เงื่อนไขการให้บริการ",
        path: "/termsofservice",
      },
      {
        label: "นโยบายคุกกี้",
        path: "/cookiepolicy",
      },
    ],
  },
];

export const COMMERCE_PLATFORM_MENU_BAR: ICommerceMenu[] = [
  {
    title: "ประวัติการขาย",
    iconPath: "ListEdgeOutline",
    path: "/commerce-platform/sales-report",
    type: COMMERCE_MENU_TYPE.SALES_REPORT,
  },
  {
    title: "ตัดแพ็กเกจ",
    iconPath: "BillsOutline",
    path: "/commerce-platform/using-package",
    type: COMMERCE_MENU_TYPE.USING_PACKAGE,
  },
];

export const USER_AFFILIATE_PLATFORM_MENU_BAR: IUserAffiliateMenu[] = [
  {
    title: "Dashboard",
    iconPath: "DashBoardOutline",
    type: USER_AFFILIATE_MENU_TYPE.DASHBOARD,
  },
  {
    title: "Affiliate Management",
    iconPath: "AffiliateOutline",
    type: USER_AFFILIATE_MENU_TYPE.MANAGEMENT,
  },
  {
    title: "My Reward",
    iconPath: "MyRewardOutline",
    type: USER_AFFILIATE_MENU_TYPE.MY_REWARD_HISTORY,
  },
];
