import { OFFLINE_PAYMENT_TYPE } from "constants/youngScout";

export const useGetPaymentType = (paymentType: OFFLINE_PAYMENT_TYPE) => {
  const IS_OFFLINE_UPLOAD_SLIP = [
    OFFLINE_PAYMENT_TYPE.QR_OFFLINE,
    OFFLINE_PAYMENT_TYPE.CREDIT_CARD,
  ];

  const IS_ONLINE_UPLOAD_SLIP = [
    OFFLINE_PAYMENT_TYPE.PROMPT_PAY,
    OFFLINE_PAYMENT_TYPE.TRANSFER,
  ];

  return {
    isMaxMePayment: paymentType === OFFLINE_PAYMENT_TYPE.MAXME,
    isCashPayment: paymentType === OFFLINE_PAYMENT_TYPE.CASH,
    isOfflinePayment: IS_OFFLINE_UPLOAD_SLIP.includes(paymentType),
    isOnlinePayment: IS_ONLINE_UPLOAD_SLIP.includes(paymentType),
  };
};
