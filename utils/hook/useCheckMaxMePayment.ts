import { useRouter } from "next/router";
import { useRef } from "react";
import { getBookingCheckSlip } from "services/ecommerce.service";
import { getMaxMeQRcodePaymentStatus } from "services/youngscout.service";

enum PAYMENT_FEATURE {
  YOUNG_SCOUT = "YOUNG_SCOUT",
  OFFLINE_PAYMENT = "OFFLINE_PAYMENT",
}

export const useCheckMaxMePayment = (
  bookingId: string,
  bookingRefId: string,
  feature: PAYMENT_FEATURE,
) => {
  const router = useRouter();
  const refInterval = useRef<any>();

  const getNavigationPath = () => {
    if (feature === PAYMENT_FEATURE.YOUNG_SCOUT) {
      return `/youngscout/payment/status/success?booking_id=${bookingRefId}`;
    } else if (feature === PAYMENT_FEATURE.OFFLINE_PAYMENT) {
      return `/payment/status/success?booking_id=${bookingRefId}`;
    }
    return `/payment/status/success?booking_id=${bookingRefId}`;
  };

  const fetchMaxMeBookingSlip = async () => {
    const response = await getMaxMeQRcodePaymentStatus(bookingId);
    const navigatePath = getNavigationPath();

    if (!response.data) return;
    const { inquiryCSBResult } = response.data;

    if (inquiryCSBResult.message === "Waiting user payment") {
      return;
    }

    if (inquiryCSBResult.message === "Payment completed") {
      await getBookingCheckSlip(Number(bookingId), null, null, 4);
      clearInterval(refInterval?.current);
      router.push(navigatePath);
    } else {
      clearInterval(refInterval?.current);
      router.push(navigatePath);
    }
  };

  return { refInterval, fetchMaxMeBookingSlip };
};
