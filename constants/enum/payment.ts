export enum PAYMENT_STATUS {
  Success = "000",
  CannotCheckData = "900",
  NotFoundOrderTransaction = "920",
  NotFoundPaymentTransaction = "921",
  QRExpired = "930",
  PaymentError = "E01",
}

export enum MAXCARD_POINT_DISCOUNT {
  "Premier Card" = 10, //100 แต้ม = ส่วนลด 10 บาท
  "Prestige Card" = 10, //100 แต้ม = ส่วนลด 10 บาท
  "Employee Card" = 30, //100 แต้ม = ส่วนลด 30 บาท
  "Max Plus" = 30, //100 แต้ม = ส่วนลด 30 บาท
  "Max Card Plus EV" = 30, //100 แต้ม = ส่วนลด 30 บาท
}

export enum MAXCARD_TYPE {
  Premier_Card = "Premier Card",
  Prestige_Card = "Prestige Card",
  Employee_Card = "Employee Card",
  Max_Plus = "Max Plus",
  Max_Card_Plus_EV = "Max Card Plus EV",
  AUTO_BACS = "บัตรพนักงานสยามออโต้แบคส์",
  VIP_Card = "VIP Card",
}

export enum PAYMENT_TYPE {
  NO_COST = "ZERO",
  CARD = "CARD",
  MAX_ME = "MAXW",
  PROMPT_PAY = "QRTS",
}

export enum PAYMENT_STATUS {
  COMPLETE = "COMPLETE",
}

export enum PAYMENT_GATEWAY_STATUS {
  SUCCESS = "000",
  CANT_CHECK_DATA = "900",
  NOT_FOUND_ORDER_TRANSACTION = "920",
  NOT_FOUND_PAYMENT_TRANSACTION = "921",
  QR_EXPIRED = "930",
  PAYMENT_ERROR = "E01",
}
