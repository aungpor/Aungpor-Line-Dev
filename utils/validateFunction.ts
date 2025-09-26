import * as he from "he";
import { IUsedSubPackage } from "interface/ordersPackage.interface";

export const validateNumber = (value) => {
  const reg = /^[0-9]*$/gim;
  if (value && value !== "" && !reg.test(value)) {
    value = value.trim();
    value = value.replace(/[^0-9]/gi, "");
  }
  return value;
};

export const validateImage = (url: string) => {
  const reg = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;
  const mediaURL = url.trim();

  return reg.test(mediaURL);
};

export const validateEmail = (value) => {
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  value = value.trim();

  return reg.test(value);
};

export const validatePhoneNumber = (value: string) => {
  const reg = /^(?:\+66|0)[689]\d{8}$/g;
  value = value.trim();

  return reg.test(value);
};

export const formatPhoneNumber = (value: string) => {
  if (value && value !== "" && value.length === 10) {
    value = value.trim();
    value = value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }
  return value;
};

export const formatOnlyKeyboard = (value: string) => {
  const regOnlyKeyboard =
    /^[\u0E00-\u0E7Fa-zA-Z0-9~`!@#\$%\^&\*\(\)_\-\+={\[\}\]\|\\:;"'<,>\.\?\/  ]*$/;

  value = value.trim();

  if (!value) return false;

  return regOnlyKeyboard.test(value);
};

export const isValidUrl = (urlString: string) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

export const removeTags = (str: string) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.

  let removeHtmlTag = str.replace(/<\/?[^>]+(>|$)/g, "");

  let decodedHtmlSpecialCharacter = he.decode(removeHtmlTag);

  return decodedHtmlSpecialCharacter;
};

function decodeHtmlEntities(str) {
  let txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

export const USED_SUB_PACKAGE_RULES: any[] = [
  {
    validator(_: any, value: any) {
      const usedSubPackage = (value ?? []) as IUsedSubPackage[];
      const isReject = usedSubPackage.every(({ amount }) => amount <= 0);
      if (isReject) {
        return Promise.reject("โปรดเลือกใช้อย่างน้อย 1 แพ็กเกจ");
      }
      return Promise.resolve();
    },
  },
];

export const isEmptyObject = (obj: Record<string, any>): boolean => {
  return Object.keys(obj).length === 0;
};
