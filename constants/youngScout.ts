import { ColumnsType } from "antd/lib/table";
import {
  IOGShare,
  IOption,
  IPagination,
  ITabItem,
} from "interface/common.interface";
import {
  ICompetitionReward,
  ICompetitionTeam,
  IYSCDetailList,
  IYSCDirectorImage,
  IYSCProposition,
  YSCRegisterTimeline,
} from "interface/youngScout.interface";
import { COMPETITION_TYPE } from "./enum/component";

export enum YSC_UNIVERSITY {
  CU = "CU",
  SUT = "SUT",
  CMU = "CMU",
  FIRST_GEN = "FIRST-GEN",
}

export enum PROPOSITION_ID {
  SELECTION = "Selection",
  FINAL = "Final",
}

//* YSC Competitions Data List

export const FIRST_COMPETITION_TEAM: ICompetitionTeam[] = [
  {
    imageSrc: "",
    name: "ไปเที่ยวกาญญ",
    type: COMPETITION_TYPE.WINNER,
    nameList: [
      "นายคณุตม์ ทรัพย์ทวีชัยกุล",
      "นางสาวอัจฉรา วงศ์เจริญวาณิชย์",
      "นายไกร สาตรักษ์",
    ],
  },
  {
    imageSrc: "",
    name: "สุขกาญเถอะเรา",
    type: COMPETITION_TYPE.FIRST_RUNNER,
    nameList: ["นางสาวอภิญญา บ่อวารี", "นายกฤษกร สิทธิอาษา"],
  },
  {
    imageSrc: "",
    name: "เพื่อนไม่ทิ้งกัน",
    type: COMPETITION_TYPE.SECOND_RUNNER,
    nameList: [
      "นายฉัตรชนก คงทน",
      "นางสาวนัสรี พุ่มเกื้อ",
      "นางสาววรรธน์วรี ไชยมงคล",
    ],
  },
];

export const SUT_CONTENT_COMPETITION_TEAM: ICompetitionTeam[] = [
  {
    imageSrc: "",
    name: "Yourmatter Production",
    type: COMPETITION_TYPE.WINNER,
    nameList: [
      "นางสาวณัฐพร ผิวศิริ",
      "นายภูมิบดินทร์ อินธิสุทธิ์",
      "นางสาวสุธิตา ประเสริฐถาวร",
      "นางสาวไอศวรรย์ ยินดีชาติ",
      "นางสาวภมรรัตน์ ลันวงษา",
    ],
  },
  {
    imageSrc: "",
    name: "ก๊อกกิ๊ก",
    type: COMPETITION_TYPE.FIRST_RUNNER,
    nameList: [
      "นางสาวพิชชาพร ฤาวงศ์",
      "นางสาวเพ็ญพิชญา ปัญญาประดิษฐ์",
      "นางสาวมนัสวี เวโรจน์วัฒนัน",
      "นางสาวปาณิสรา ทองไพโรจน์",
      "นางสาวธนวฤนท์ ศรีอัครวิทยา",
      "นางสาวลภัสรดา ชูสกุลประชารักษ์",
    ],
  },
  {
    imageSrc: "",
    name: "Blessing House",
    type: COMPETITION_TYPE.SECOND_RUNNER,
    nameList: [
      "นางสาววริศรา บุญเลิศพาณิชย์",
      "นางสาวภัทธิรา สุขไสยาสน์",
      "นายณฤทธิ์ สรุจวรโชติ",
      "นางสาวธนาภา ทากุ",
      "นางสาวณัฐวรรณ วงศ์ท้าว",
      "นางสาวณัฐกาญจน์ ทิพยบุญนนท์",
    ],
  },
];

export const SUT_DEVELOP_COMPETITION_TEAM: ICompetitionTeam[] = [
  {
    imageSrc: "",
    name: "TT",
    type: COMPETITION_TYPE.WINNER,
    nameList: [
      "นายวสันต์ ดวงเกิด",
      "นายจักรพงศ์ วังหอม",
      "นางสาวณัฐภรณ์ ไชยสูงเนิน",
      "นายสุกฤต ปัจจุโส",
      "นายสุรพร แสงศรีจันทร์",
    ],
  },
  {
    imageSrc: "",
    name: "Utopia",
    type: COMPETITION_TYPE.FIRST_RUNNER,
    nameList: [
      "นางสาวธัญชนก กิ่งปรุ",
      "นางสาวกฤษณาพร พรมมานอก",
      "นายสุกฤษฎิ์ ศรีพุทซา",
      "นางสาวฐิติกานต์ ไวทยสุวรรณ",
      "นางสาวพรทิวา กาละนิโย",
    ],
  },
  {
    imageSrc: "",
    name: "DOBBY",
    type: COMPETITION_TYPE.SECOND_RUNNER,
    nameList: [
      "นางสาวพรรณนภา จงชาญสิทโธ",
      "นางสาวสุภารัตน์ กิมิพันธ์",
      "นายแทนไทย บุญไทยกลาง",
      "นายอชิรวรรธน์ เปล่งกระโทก",
    ],
  },
];

export const CU_COMPETITION_TEAM: ICompetitionTeam[] = [
  {
    imageSrc: "",
    name: "Wips",
    type: COMPETITION_TYPE.WINNER,
    nameList: [
      "นายปราบดา ขันชัยภูมิ",
      "นายกิตติภูมิ บุญสุภากุล",
      "นายพิชชากร โชติสุภาพล",
      "นางสาวชลธิชา ฉันทะ",
    ],
  },
  {
    imageSrc: "",
    name: "น้องสำนักงาน",
    type: COMPETITION_TYPE.FIRST_RUNNER,
    nameList: [
      "นายพีรภัทร กุรัมย์",
      "นายปรินทร ศิริปะกะ",
      "นางสาวนิชาภัทร ชนะพล",
      "นางสาวเพชรลัดดา บุตรมหา",
    ],
  },
  {
    imageSrc: "",
    name: "Minionaire Consulting",
    type: COMPETITION_TYPE.SECOND_RUNNER,
    nameList: [
      "นางสาวศรินภัสร์ ศุภลักษณ์เมธา",
      "นางสาวรดา รัศมีสุนทรางกูล",
      "นางสาวอัณณา เหลียง",
      "นางสาวรสา เธียรปรีชา",
    ],
  },
];

//* YSC JudgingCriteria Data List
export const CMU_CONTENT_CRITERIA_ITEM_LIST: IYSCDetailList[] = [
  {
    title: "รอบสุดท้าย",
    criteria: [
      "Presentation 25%",
      "Content Strategy 25%",
      "Community Building 25%",
      "Feasibility 25%",
    ],
  },
];

export const CMU_DEVELOP_CRITERIA_ITEM_LIST: IYSCDetailList[] = [
  {
    title: "รอบสุดท้าย",
    criteria: [
      "Monetization Strategy & Scalability 30%",
      "Functionality & Usability 20%",
      "Technical Performance 20%",
      "Innovation 20%",
      "Presentation 10%",
    ],
  },
];

//* YSC Proposition Data List
export const CMU_PROPOSITION_ITEMS_LIST: IYSCProposition[] = [
  {
    title: "Understanding the Problem (15%)",
    description: "ผู้เข้าร่วมอธิบายปัญหาได้ชัดเจนและสอดคล้องกับกรณีศึกษา",
  },
  {
    title: "Analysis and Insights (15%)",
    description:
      "ผู้เข้าร่วมวิจัยและวิเคราะห์อย่างละเอียด -xsbr-ค้นพบข้อมูลเชิงลึกที่สนับสนุนข้อเสนอ",
  },
  {
    title: "Creativity and Innovation (10%)",
    description: "แนวทางแก้ไขมีความคิดสร้างสรรค์และ-xsbr-เป็นไปได้จริง",
  },
  {
    title: "Feasibility and Implementation (25%)",
    description: "แผนที่เสนอมีความสมจริงและชัดเจนใน-xsbr-กลยุทธ์การนำไปใช",
  },
  {
    title: "Revenue Generation Potential (25%)",
    description: "แผนการเงินมีเหตุผลและแนวทางแก้ไขคุ้มค่า-xsbr-ในแง่ ROI",
  },
  {
    title: "Presentation and Communication (10%)",
    description:
      "การนำเสนอโครงสร้างชัดเจน น่าสนใจ -xsbr-และใช้สื่อสนับสนุนอย่างมีประสิทธิภาพ",
  },
];

export const CMU_COMPETITION_TOPIC = [
  "เพิ่มช่องทางการสร้างรายได้ของ Patois และ-xsbr-ยกระดับสู่ความเป็นผู้นำในอุตสาหกรรมการท่องเที่ยว-xsbr-โดยการผนวกรวมธุรกิจในเครือ PTG Energy-lgbr--xsbr-ผ่านการใช้ Max Card เพื่อสร้างโอกาสทางธุรกิจใหม่ ๆ-xsbr-รวมถึงขยายฐานลูกค้าของ Patois-xsbr-ให้สามารถเข้าถึงกลุ่มลูกค้าใหม่ที่หลากหลายมากยิ่งขึ้น-lgbr--xsbr-กดเพื่อ",
  "โจทย์การแข่งขัน",
];

//* YSC Director Data List
export const CMU_DIRECTOR_IMAGE_LIST: IYSCDirectorImage[] = [
  {
    name: "ดร.วัลภา\nสันติธรรมารักษ์",
    position: "Chief Strategy &\nTransformation Officer",
    directorImage: "/images/youngscout/director/committee-1.png",
    companyImage: "/images/youngscout/director//patois-logo.png",
  },
  {
    name: "กัณฑ์ณฐกรณ์\nรัตนวีณาวาที",
    position: "Director, Digital Marketing",
    directorImage: "/images/youngscout/director/committee-2.png",
    companyImage: "/images/youngscout/director/patois-logo.png",
  },
  {
    name: "ปิยะเชษฐ์\nเลิศสุวรรณาวิน",
    position: "Director, Digital Transformation",
    directorImage: "/images/youngscout/director/committee-3.png",
    companyImage: "/images/youngscout/director/patois-logo.png",
  },
  {
    name: "Punthai",
    directorImage: "/images/youngscout/director/committee-4.png",
  },
  {
    name: "Airportel",
    directorImage: "/images/youngscout/director/committee-5.png",
  },
  {
    name: "CMU",
    directorImage: "/images/youngscout/director/committee-6.png",
  },
];

//* YSC Sponsor Data List
export const FIRST_GEN_SPONSOR_IMAGE_LIST = [
  "/images/youngscout/sponsor/first-gen/tat-logo.png",
  "/images/youngscout/sponsor/first-gen/ttpa-logo.png",
  "/images/youngscout/sponsor/first-gen/gstm-logo.png",
  "/images/youngscout/sponsor/first-gen/tceb-logo.png",
  "/images/youngscout/sponsor/first-gen/lulla-logo.png",
  "/images/youngscout/sponsor/first-gen/westory-logo.png",
  "/images/youngscout/sponsor/first-gen/patois-logo.png",
  "/images/youngscout/sponsor/first-gen/tripniceday-logo.png",
];

export enum YSC_GOOGLE_FORM_URL {
  CU_CONTENT = "https://forms.gle/oNRL1xVywBCXtdeH9",
  SUT_CONTENT = "https://forms.gle/BAXn2TcWG2XdkPPB6",
  SUT_DEVELOP = "https://forms.gle/CMd8RZNiCDWhwg296",
  CMU_CONTENT = "https://forms.gle/k2a2T94xetfmtbwt5",
}

export const YSC_FIRST_GEN_YOUTUBE = "Nk8yHD0I0ks";
export const YSC_SUT_YOUTUBE = "Nk8yHD0I0ks";
export const YSC_FACEBOOK_PAGE = "https://www.facebook.com/youngscoutcamp.th";
export const YSC_COMPETITION_FILE_URL =
  "https://drive.google.com/drive/folders/1m5TGB5ChdytVwmlFpxlwLfcBGgSi9LYv?usp=sharing";

export enum YSC_PHASE_STATUS {
  OPEN = "open",
  CLOSED = "closed",
  SHOW_PACKAGE = "showPackage",
  PROJECT_ENDED = "projectEnded",
}

export const YOUNG_SCOUT_BOOKING_REMARK = [
  "ผู้เข้าแข่งขันทุกทีมจะไม่สามารถร่วมลงคะแนนสนับสนุนผลงานได้ หากพบว่ามีการลงคะแนนสนับสนุน ผลคะแนนนั้นจะถือเป็นโมฆะทันที",
  "อัตราค่าบริการในการลงคะแนนสนับสนุนมีการรวมภาษีมูลค่าเพิ่มเรียบร้อยแล้ว",
  "ผู้ใช้บริการไม่สามารถทำรายการขอคืนเงินได้ทุกกรณี เนื่องจากคะแนนจะถูกบันทึกเข้าระบบ เพื่อนับคะแนนทันที",
  "ไม่จำกัดสิทธิ์ แต่จำกัดจำนวนครั้งในการสนับสนุน สูงสุด 99,999 ครั้ง/1 การลงคะแนน",
  "เงื่อนไขกิจกรรมสามารถเปลี่ยนแปลงได้โดยไม่ต้องแจ้งให้ทราบล่วงหน้า",
  "คะแนนที่ได้จากการสนับสนุนถือเป็นส่วนหนึ่งของคะแนนที่ใช้ตัดสินผู้ผ่านเข้ารอบ ผลการแข่งขัน หรือคำตัดสินใดๆ ของคณะกรรมการฯ ให้ถือเป็นที่สิ้นสุด",
  "กรณีให้คะแนนสนับสนุนนอกช่วงเวลาที่รายการกำหนด หรือหลังจากจบการแข่งขันแล้ว คะแนนจะไม่ถูกบันทึกเพื่อนับคะแนนในการแข่งขัน และระบบจะคิดค่าบริการตามปกติ",
];

export const YSC_MINIMUM_VOTE = 1;
export const YSC_MAXIMUM_VOTE = 99999;

export enum PAGEKAGE_PAYMENT_TYPE {
  PROMPT_PAY = "SCAN_QR_CODE",
  TRANSFER = "TRANSFER",
  MAXME = "MAXME_APP_QRCODE",
  CASH = "CASH",
  QR_OFFLINE = "QR_OFFLINE",
  CREDIT_CARD = "CREDIT_CARD",
}

export enum PAYMENT_TYPE {
  PROMPT_PAY = "SCAN_QR_CODE",
  TRANSFER = "TRANSFER",
  MAXME = "MAXME_APP_QRCODE",
}

export enum OFFLINE_PAYMENT_TYPE {
  PROMPT_PAY = "SCAN_QR_CODE",
  TRANSFER = "TRANSFER",
  MAXME = "MAXME_APP_QRCODE",
  CASH = "CASH",
  QR_OFFLINE = "QR_OFFLINE",
  CREDIT_CARD = "CREDIT_CARD",
}

export const MAP_TRIGGER_OFFLINE_PAYMENT = new Map([
  ["CREDIT_CARD", "QR_OFFLINE"],
  ["QR_OFFLINE", "CREDIT_CARD"],
]);

export const MAX_VENTURES_ACC_NUMBER = 468103147;

export const YSC_DESKTOP_ABOUT_TEXT =
  "Young Scout เป็นโครงการบ่มเพาะนิสิตนักศึกษาที่สนใจธุรกิจท่องเที่ยว-lgbr-โดยเปิดโอกาสให้พัฒนากลยุทธ์และแผนธุรกิจเพื่อยกระดับการท่องเที่ยวของไทย ทั้งด้านสถานที่ กิจกรรม บริการ และการพัฒนาด้าน technology-lgbr-โดยเน้นจุดเด่นของแต่ละพื้นที่ เพื่อดึงดูดนักท่องเที่ยวทั้งในและต่างประเทศ และกระตุ้นเศรษฐกิจในชุมชนและจังหวัดนั้น ๆ";

export const YSC_MOBILE_ABOUT_TEXT =
  "Young Scout คือโครงการบ่มเพาะ นิสิต-xsbr-นักศึกษาที่สนใจในธุรกิจท่องเที่ยว-xsbr-เพื่อสนับสนุนธุรกิจท่องเที่ยวของ ประเทศไทย-xsbr-โดยเปิดโอกาสให้ทีม นิสิตนักศึกษา ได้-xsbr-พัฒนาและนำเสนอกลยุทธ์ แผนธุรกิจ-xsbr-ที่สามารถยกระดับ การท่องเที่ยว ทั้งสถานที่-xsbr-กิจกรรม บริการ สินค้าชุมชน-xsbr-โดยชูจุดเด่นของแต่ละพื้นที่ชุมชน-xsbr-ให้เป็นที่รู้จักในกลุ่ม-xsbr-นักท่องเที่ยวทั้งในและต่างประเทศ-xsbr-เพื่อต่อยอดไปถึงการกระตุ้นเศรษฐกิจในชุมชน-xsbr-และจังหวัดนั้น ๆ";

export const YSC_OVERALL_TEXT =
  "โจทย์ Travel Business Entrepreneur -xsbr-ที่จังหวัดนครปฐม";

export enum YSC_CONTENT_TYPE {
  ALL = "All",
  BUSINESS = "Business",
  DIGITAL = "Digital Technology",
}

export const YSC_UNIVERSITY_TYPE: IOption[] = [
  { label: "All", value: YSC_CONTENT_TYPE.ALL },
  { label: "Business", value: YSC_CONTENT_TYPE.BUSINESS },
  { label: "Digital Technology", value: YSC_CONTENT_TYPE.DIGITAL },
];

export enum YSC_DETAIL_CONTENT_TYPE {
  CU_CONTENT = "CU Content",
  SUT_CONTENT_TAB = "SUT Content",
  SUT_DEVELOP_TAB = "SUT Dev",
}

export enum YSC_REGISTER_CONTENT_TYPE {
  CONTENT_TAB = "Content Creator",
  DEVELOP_TAB = "Developer",
}

export enum REGISTER_PIN_SCROLL_ID {
  REWARD = "reward",
  PROPERTY = "property",
  HOW_TO_APPLY = "how-to-apply",
  TIMELINE = "timeline",
  JUDGING_CRITERIA = "judging-criteria",
  PROPOSITION = "proposition",
  DIRECTOR = "director",
}

export enum CU_PIN_SCROLL_ID {
  ABOUT = "about",
  OVERALL = "overall",
  COMPETITION = "completition",
}

export enum SUT_PIN_SCROLL_ID {
  ABOUT = "about",
  OVERALL = "overall",
  CONTENT_COMPETITION = "content_completition",
  DEV_COMPETITION = "dev_completition",
}

export const REGISTER_SCROLL_TAB_ITEM: ITabItem[] = [
  {
    label: "รางวัล",
    key: REGISTER_PIN_SCROLL_ID.REWARD,
  },
  {
    label: "คุณสมบัติ",
    key: REGISTER_PIN_SCROLL_ID.PROPERTY,
  },
  {
    label: "วิธีการสมัคร",
    key: REGISTER_PIN_SCROLL_ID.HOW_TO_APPLY,
  },
  {
    label: "ไทม์ไลน์",
    key: REGISTER_PIN_SCROLL_ID.TIMELINE,
  },
  {
    label: "เกณฑ์การตัดสิน",
    key: REGISTER_PIN_SCROLL_ID.JUDGING_CRITERIA,
  },
  {
    label: "โจทย์",
    key: REGISTER_PIN_SCROLL_ID.PROPOSITION,
  },
  {
    label: "กรรมการ",
    key: REGISTER_PIN_SCROLL_ID.DIRECTOR,
  },
];

export const CU_SCROLL_TAB_ITEM: ITabItem[] = [
  {
    label: "เกี่ยวกับ",
    key: CU_PIN_SCROLL_ID.ABOUT,
  },
  {
    label: "ภาพบรรยากาศ",
    key: CU_PIN_SCROLL_ID.OVERALL,
  },
  {
    label: "ผู้ชนะ",
    key: CU_PIN_SCROLL_ID.COMPETITION,
  },
];

export const SUT_SCROLL_TAB_ITEM: ITabItem[] = [
  {
    label: "เกี่ยวกับ",
    key: SUT_PIN_SCROLL_ID.ABOUT,
  },
  {
    label: "ภาพบรรยากาศ",
    key: SUT_PIN_SCROLL_ID.OVERALL,
  },
  {
    label: "ผู้ชนะ Content Creator",
    key: SUT_PIN_SCROLL_ID.CONTENT_COMPETITION,
  },
  {
    label: "ผู้ชนะ Developer",
    key: SUT_PIN_SCROLL_ID.DEV_COMPETITION,
  },
];

export const CMU_COMPETITION_CRITERIA_LIST = [
  "อายุระหว่าง 18-25 ปี ไม่จำกัดเพศและคณะที่เรียน",
  "รวมกลุ่ม 4 คนที่มีความสนใจในด้านการท่องเที่ยว เทคโนโลยี การพัฒนาแพลตฟอร์ม และมีความคิดสร้างสรรค์",
  "มีความเข้าใจและติดตามแนวโน้มการท่องเที่ยว รวมถึงความนิยมของจุดหมายปลายทางใหม่ ๆ พฤติกรรมนักท่องเที่ยว และนวัตกรรมการท่องเที่ยวอยู่เสมอ",
  "มีความสามารถในการใช้เทคโนโลยีและโซเชียลมีเดียอย่างคล่องแคล่ว",
  "สามารถนำเสนอภาษาไทยได้อย่างถูกต้อง และมีประสิทธิภาพในการสื่อสารกับกลุ่มเป้าหมาย",
  "มีความมุ่งมั่นในการพัฒนาแพลตฟอร์ม เว็บไซต์ หรือเนื้อหาที่สามารถสร้างรายได้และมอบประสบการณ์ที่ดีให้กับผู้ใช้",
  "มีความเข้าใจในการพัฒนาชุมชนอย่างยั่งยืนและส่งเสริมการเติบโตของธุรกิจท่องเที่ยวไทย",
];

export enum YSC_API_CONFIG_NAME {
  ABOUT_YSC = "about_ysc",
  CHULA_2024 = "ysc_chula_2024",
  COMPETITION_FIRST = "gen1_winner",
  COMPETITION_SUT = "gen2_winner",
  COMPETITION_CU = "gen3_winner",
  FIRST_GALLERY = "ysc_gallery_gen1",
  SUT_GALLERY = "ysc_gallery_gen2",
  CU_GALLERY = "ysc_gallery_gen3",
}

export const YSC_INIT_PAGINATION: IPagination = {
  page: 1,
  pageSize: 12,
};

export const MAP_COMPETITION_TYPE = new Map([
  ["winner", COMPETITION_TYPE.WINNER],
  ["first_runner", COMPETITION_TYPE.FIRST_RUNNER],
  ["second_runner", COMPETITION_TYPE.SECOND_RUNNER],
]);

export const MAP_SUT_CONTENT_TYPE = new Map([
  ["business_winner", COMPETITION_TYPE.WINNER],
  ["business_first_runner", COMPETITION_TYPE.FIRST_RUNNER],
  ["business_second_runner", COMPETITION_TYPE.SECOND_RUNNER],
]);

export const MAP_SUT_DEVELOP_TYPE = new Map([
  ["dev_winner", COMPETITION_TYPE.WINNER],
  ["dev_first_runner", COMPETITION_TYPE.FIRST_RUNNER],
  ["dev_second_runner", COMPETITION_TYPE.SECOND_RUNNER],
]);

export const CMU_DESKTOP_BANNER =
  "/images/youngscout/banner/cmu-register-banner-lg.png";
export const CMU_MOBILE_BANNER =
  "/images/youngscout/banner/cmu-register-banner-sm.png";

export const CMU_SCHEDULE_COLUMN: ColumnsType<YSCRegisterTimeline> = [
  {
    title: "วันที่",
    dataIndex: "date",
    key: "date",
    width: 153,
    align: "center",
  },
  {
    title: "กำหนดการ",
    dataIndex: "schedule",
    key: "schedule",
  },
];

export const YSC_CMU_TIMELINE = [
  {
    key: "1",
    date: "17 ก.ย.",
    schedule: "เปิดรับสมัคร",
  },
  {
    key: "2",
    date: "4 ต.ค.",
    schedule: "Q&A Session\nและการแนะนำก่อนการแข่งขัน",
  },
  {
    key: "3",
    date: "22 พ.ย.",
    schedule: "ปฐมนิเทศ / Session Key Speaker",
  },
  {
    key: "4",
    date: "23 พ.ย.",
    schedule: "การเตรียมการนำเสนอผลงาน",
  },
  {
    key: "5",
    date: "24 พ.ย.",
    schedule: "การนำเสนอรอบสุดท้าย & ประกาศผู้ชนะ",
  },
];

export const CMU_SPONSOR_IMAGE_LIST = [
  "/images/youngscout/sponsor/pt-logo.png",
  "/images/youngscout/sponsor/register/max-ventures-logo.png",
  "/images/youngscout/sponsor/patois-logo.png",
  "/images/youngscout/sponsor/register/tat-logo.png",
  "/images/youngscout/sponsor/register/thai-logo.png",
  "/images/youngscout/sponsor/register/cmu-logo.png",
  "/images/youngscout/sponsor/register/airportel-logo.png",
  "/images/youngscout/sponsor/register/builds-logo.png",
];

export const COMPETITION_REWARD: ICompetitionReward[] = [
  {
    value: 15000,
    type: COMPETITION_TYPE.WINNER,
  },
  {
    value: 8000,
    type: COMPETITION_TYPE.FIRST_RUNNER,
  },
  {
    value: 6000,
    type: COMPETITION_TYPE.SECOND_RUNNER,
  },
  {
    value: 3000,
    type: COMPETITION_TYPE.HONORABLE_MENTION,
  },
];

export const HOW_TO_APPLY_LIST = [
  `สมัครผ่านปุ่ม "ลงทะเบียน" และกรอกข้อมูลให้ครบถ้วน ตั้งแต่วันที่ 17 ก.ย. - 31 ต.ค. 2024`,
];

//* Youngscout OG-share
export const CU_YOUNG_SCOUT_OG_SHARE: IOGShare = {
  title:
    "Young Scout Camp x Chula รุ่นที่ 3 - ภาพบรรยากาศการแข่งขัน ทำกิจกรรม และลงพื้นที่จริง",
  url: "https://patois.com/youngscout/cu",
  description:
    "โครงการที่เปิดโอกาสให้น้องๆ นักศึกษา ที่สนใจสาย Travel Business Entrepreneur มาร่วมเปิดประสบการณ์การแข่งขัน พร้อมลงมือทำ และนำไปต่อยอดได้จริง เพื่อพัฒนาการท่องเที่ยวไทยไปให้ไกลกว่าเดิม",
  imageURL:
    "https://wonknokstoragestdaccount.blob.core.windows.net/patois-picture/og_image/OG_Chula.png",
};

export const SUT_YOUNG_SCOUT_OG_SHARE: IOGShare = {
  title:
    "Young Scout Camp x SUT รุ่นที่ 2 - ภาพบรรยากาศการแข่งขันและทำ Workshop",
  url: "https://patois.com/youngscout/sut",
  description:
    "โครงการที่เปิดโอกาสให้น้องๆ นักศึกษา ที่สนใจในสาย Developer และสาย Content Creator มาร่วมแข่งขัน ทำ Workshop และนำกลยุทธ์ไปต่อยอด เพื่อพัฒนาการท่องเที่ยวไทยไปให้ไกลกว่าเดิม",
  imageURL:
    "https://wonknokstoragestdaccount.blob.core.windows.net/patois-picture/og_image/OG_sut.png",
};

export const FIRST_YOUNG_SCOUT_OG_SHARE: IOGShare = {
  title:
    "Young Scout Camp x SUT รุ่นที่ 1 - ภาพบรรยากาศการแข่งขันและทำ Workshop",
  url: "https://patois.com/youngscout/first-gen",
  description:
    "การแข่งขัน Hackathon สายท่องเที่ยวที่สนุก กดดัน และท้าทายความสามารถของผู้เข้าประกวดรอบสุดท้ายทั้ง 10 ทีม ณ จังหวัดกาญจนบุรี",
  imageURL:
    "https://wonknokstoragestdaccount.blob.core.windows.net/patois-picture/og_image/OG_12t.png",
};
