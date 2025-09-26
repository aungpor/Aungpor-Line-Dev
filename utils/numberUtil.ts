export const NumberFormat = (value: number | undefined) => {
  if (!value) return 0;

  let isFractionDigits = `${value}`.indexOf(".") > 0;

  return Intl.NumberFormat("th-TH", {
    // style: '',
    currency: "THB",
    minimumFractionDigits: 0,
    maximumFractionDigits: isFractionDigits ? 2 : 0,
  }).format(+value);
};

export const NumberFormatTwoDigits = (value: number | undefined) => {
  if (!value) return 0;

  return Intl.NumberFormat("th-TH", {
    // style: '',
    currency: "THB",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(+value);
};

export const formatThaiPhoneNumber = (value: number | string) => {
  if (!value) return;
  let phone = value.toString();
  const cleanedNumber = phone.replace(/\D/g, "");

  // Format the number as 0x-xxx-xxxx
  const formattedNumber = `0${cleanedNumber.slice(1, 3)}-${cleanedNumber.slice(
    3,
    6,
  )}-${cleanedNumber.slice(6)}`;

  return formattedNumber;
  // return result
};
