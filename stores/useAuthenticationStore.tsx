import { AUTHENTICATION_STATUS } from "constants/enum/component";
import { createWithEqualityFn } from "zustand/traditional";

interface IOtpInfomation {
  phoneNumber: string;
  refCode: string;
  times: number;
}

interface IAuthentication {
  authenStatus: AUTHENTICATION_STATUS;
  otpInfomation: IOtpInfomation;
  resetAuthenticationStore: () => void;
  setAuthenStatus: (status: AUTHENTICATION_STATUS) => void;
  setOtpInfomation: (otp: IOtpInfomation) => void;
}

const INIT_OTP_INFOMATION: IOtpInfomation = {
  phoneNumber: "",
  refCode: "",
  times: 1,
};

const INIT_AUTHEN_STATE = {
  authenStatus: AUTHENTICATION_STATUS.LOGIN,
  otpInfomation: INIT_OTP_INFOMATION,
};

const useAuthenticationStore = createWithEqualityFn<IAuthentication>()(
  (set, get) => ({
    ...INIT_AUTHEN_STATE,

    resetAuthenticationStore: () => {
      set(INIT_AUTHEN_STATE);
    },

    setAuthenStatus: (status: AUTHENTICATION_STATUS) => {
      set({ authenStatus: status });
    },

    setOtpInfomation: (otp: IOtpInfomation) => {
      set({ otpInfomation: otp });
    },
  }),
);

export default useAuthenticationStore;
