import { IOption } from "interface/common.interface";

export const shortMonths = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];

export const THAI_MONTHS_OPTIONS: IOption[] = [
  { value: "1", label: "มกราคม" },
  { value: "2", label: "กุมภาพันธ์" },
  { value: "3", label: "มีนาคม" },
  { value: "4", label: "เมษายน" },
  { value: "5", label: "พฤษภาคม" },
  { value: "6", label: "มิถุนายน" },
  { value: "7", label: "กรกฎาคม" },
  { value: "8", label: "สิงหาคม" },
  { value: "9", label: "กันยายน" },
  { value: "10", label: "ตุลาคม" },
  { value: "11", label: "พฤศจิกายน" },
  { value: "12", label: "ธันวาคม" },
];

export const DAY_OPTIONS: IOption[] = [
  { label: "วันอาทิตย์", value: "วันอาทิตย์" },
  { label: "วันจันทร์", value: "วันจันทร์" },
  { label: "วันอังคาร", value: "วันอังคาร" },
  { label: "วันพุธ", value: "วันพุธ" },
  { label: "วันพฤหัสบดี", value: "วันพฤหัสบดี" },
  { label: "วันศุกร์", value: "วันศุกร์" },
  { label: "วันเสาร์", value: "วันเสาร์" },
];

export const CHINESE_ZODIAC_OPTIONS: IOption[] = [
  { label: "ปีชวด", value: "1" },
  { label: "ปีฉลู", value: "2" },
  { label: "ปีขาล", value: "3" },
  { label: "ปีเถาะ", value: "4" },
  { label: "ปีมะโรง", value: "5" },
  { label: "ปีมะเส็ง", value: "6" },
  { label: "ปีมะเมีย", value: "7" },
  { label: "ปีมะแม", value: "8" },
  { label: "ปีวอก", value: "9" },
  { label: "ปีระกา", value: "10" },
  { label: "ปีจอ", value: "11" },
  { label: "ปีกุน", value: "12" },
];

export const TIME_OF_BIRTH_OPTIONS: IOption[] = [
  {
    label: "กลางวัน",
    value: "1",
  },
  {
    label: "กลางคืน",
    value: "2",
  },
];
