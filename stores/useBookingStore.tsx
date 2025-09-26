import {
  IBookingOrderStorage,
  IBookingPackageStorage,
  ICouponAvailableSchema,
} from "interface/booking.interface";
import { IOption } from "interface/common.interface";
import { IMaxCardBookingDiscount } from "interface/maxcard.interface";
import {
  inquiryDay,
  inquiryEnhanceSuccess,
  inquiryGender,
} from "services/masterData.service";
import { transformCartToBookingOrder } from "utils/transformData.utils";
import { persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

interface IOtpInfomation {
  phoneNumber: string;
  refCode: string;
  times: number;
}

interface IBookingStore {
  maxMuDateOptions: IOption[];
  maxMuGenderOptions: IOption[];
  maxMuEnhanceSuccess: IOption[];

  couponData: ICouponAvailableSchema | undefined;
  setCouponData: (data: ICouponAvailableSchema | undefined) => void;

  bookingOrder: IBookingOrderStorage;
  bookingPackageList: IBookingPackageStorage[];
  setBookingPackageList: (data: IBookingPackageStorage[]) => void;

  paymentOrder: IBookingOrderStorage;
  paymentDiscount: IMaxCardBookingDiscount | undefined;
  paymentPackageList: IBookingPackageStorage[];
  setPaymentPackageList: (data: IBookingPackageStorage[]) => void;
  setPaymentDiscount: (data: IMaxCardBookingDiscount | undefined) => void;

  initialBookingOrders: () => Promise<void>;
  resetBookingPackageStore: () => void;

  otpInfomation: IOtpInfomation;
  setOtpInfomation: (otp: IOtpInfomation) => void;
  otpModal: boolean;
  setOtpModal: (otp: boolean) => void;
}

const INIT_BOOKING_ORDER = {
  orderTotalPrice: 0,
  orderNetPrice: 0,
  bookingOrderList: [],
};

const INIT_OTP_INFOMATION: IOtpInfomation = {
  phoneNumber: "",
  refCode: "",
  times: 1,
};

const INIT_BOOKING_STATE = {
  couponData: undefined,
  paymentDiscount: undefined,
  maxMuDateOptions: [],
  maxMuGenderOptions: [],
  maxMuEnhanceSuccess: [],
  bookingOrder: INIT_BOOKING_ORDER,
  paymentOrder: INIT_BOOKING_ORDER,
  bookingPackageList: [],
  paymentPackageList: [],
  otpInfomation: INIT_OTP_INFOMATION,
  otpModal: false,
};

const useBookingStore = createWithEqualityFn<IBookingStore>()(
  persist(
    (set, get) => ({
      ...INIT_BOOKING_STATE,

      resetBookingPackageStore: () => {
        set({
          couponData: undefined,
          paymentDiscount: undefined,
          maxMuDateOptions: [],
          maxMuGenderOptions: [],
          maxMuEnhanceSuccess: [],
        });
      },

      setCouponData: (coupon: ICouponAvailableSchema | undefined) => {
        set({ couponData: coupon });
      },

      setPaymentDiscount: (discount: IMaxCardBookingDiscount | undefined) => {
        set({ paymentDiscount: discount });
      },

      setBookingPackageList: (bookingPackageList: IBookingPackageStorage[]) => {
        const bookingOrder = transformCartToBookingOrder(bookingPackageList);
        set({ bookingPackageList, bookingOrder });
      },

      setPaymentPackageList: (paymentPackageList: IBookingPackageStorage[]) => {
        const paymentOrder = transformCartToBookingOrder(paymentPackageList);
        set({ paymentPackageList, paymentOrder });
      },

      initialBookingOrders: async () => {
        const dayResponse = await inquiryDay();
        const genderResponse = await inquiryGender();
        const enhanceResponse = await inquiryEnhanceSuccess();

        const maxMuDateOptions =
          dayResponse?.data?.map((item) => ({
            label: item.shopweekday_criteria,
            value: item.shopweekday_id,
          })) ?? [];
        const maxMuGenderOptions =
          genderResponse?.data?.map((item) => ({
            label: item.gender_name,
            value: item.gender_id,
          })) ?? [];
        const maxMuEnhanceSuccess =
          enhanceResponse?.data?.map((item) => ({
            label: item.title_need_success_name,
            value: item.title_need_success_id,
          })) ?? [];

        set({
          maxMuDateOptions,
          maxMuGenderOptions,
          maxMuEnhanceSuccess,
        });
      },
      setOtpInfomation: (otp: IOtpInfomation) => {
        set({ otpInfomation: otp });
      },

      setOtpModal: (otp: boolean) => {
        set({ otpModal: otp });
      },
    }),
    {
      name: "package-booking-storage", // name of the item in the storage (must be unique)
    },
  ),
);

export default useBookingStore;
