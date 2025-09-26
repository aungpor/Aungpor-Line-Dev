import { Form, notification } from "antd";
import FormOTPInput from "@/components/Common/FormOTPInput";
import {
  AUTHENTICATION_ERROR,
  ERROR_MESSAGE,
  SIGN_IN_ERROR_RESPONSE,
} from "@/constants/enum/component";
import { useEffect } from "react";
import { getOTP } from "@/services/sms.service";
import { checkOtp } from "@/services/user.service";
import useBookingStore from "@/stores/useBookingStore";
import useCountdown from "@/utils/hook/useCountdown";
import { getSentLoginOTPBody } from "@/utils/transformData.utils";
import { shallow } from "zustand/shallow";
import { InputProps } from "react-otp-input";
import { PATOIS_LOGO } from "@/constants/component";

interface IProps {
  className?: string;
}

const GenLinkRequestOTPSection = (props: IProps) => {
  const { className = "" } = props;
  const [form] = Form.useForm();

  const { countdown, countdownString, handleCountdown } = useCountdown({
    seconds: 60,
  });

  const { otpInfomation, setOtpInfomation, setOtpModal } = useBookingStore(
    (state) => ({
      otpInfomation: state.otpInfomation,
      setOtpInfomation: state.setOtpInfomation,
      setOtpModal: state.setOtpModal,
    }),
    shallow,
  );

  useEffect(() => {
    handleCountdown();
  }, []);

  const onInputOTPChange = async (value: string) => {
    form.setFields([{ name: "otpNumber", errors: [] }]);

    if (value.length >= 6) {
      await loginWithPhoneNumberHandler();
    }
  };

  const onResetOTPHandler = async () => {
    const body = getSentLoginOTPBody(otpInfomation.phoneNumber);
    const { data } = await getOTP(body);
    setOtpInfomation({
      phoneNumber: otpInfomation.phoneNumber,
      refCode: data?.data?.refCode ?? "",
      times: otpInfomation.times + 1,
    });
    handleCountdown();
  };

  const loginWithPhoneNumberHandler = async () => {
    try {
      const { otpNumber } = form.getFieldsValue();
      const body = {
        tel: otpInfomation.phoneNumber,
        otp: otpNumber,
        provider: "tel",
      };
      const response = await checkOtp(body);
      if (!response?.message) {
        setOtpModal(false);
      } else {
        if (response.message === SIGN_IN_ERROR_RESPONSE.EXPIRED) {
          form.setFields([
            { name: "otpNumber", errors: [AUTHENTICATION_ERROR.OTP_EXPIRED] },
          ]);
        } else if (response.message === SIGN_IN_ERROR_RESPONSE.EXCEEDED) {
          form.setFields([
            { name: "otpNumber", errors: [AUTHENTICATION_ERROR.OTP_EXCEEDED] },
          ]);
        } else {
          form.setFields([
            { name: "otpNumber", errors: [AUTHENTICATION_ERROR.OTP_INVALID] },
          ]);
        }
      }
    } catch (error) {
      notification.error({
        message: ERROR_MESSAGE.TRY_AGAIN,
        description: `${error}`,
      });
    }
  };

  return (
    <Form form={form} className={`flex flex-col items-center min-h-screen bg-white px-6 py-10 ${className}`}>
      {/* Logo */}
      <div className="mb-6">
        <img src={PATOIS_LOGO} alt="logo" className="h-10" />
      </div>

      {/* Title */}
      <div className="text-xl font-semibold mb-2">ใส่รหัสยืนยัน</div>
      <div className="text-gray-600 text-center mb-6">
        กรุณาใส่รหัสยืนยันตัวตนที่ถูกส่งไปยัง <br />
        หมายเลข <span className="font-bold">{otpInfomation.phoneNumber}</span>
      </div>

      {/* OTP Input */}
      <div className="mb-4">
        <FormOTPInput
          name="otpNumber"
          fixErrorContainer={false}
          onChange={onInputOTPChange}
          numInputs={6}
          className="!w-[42px] !h-[48px] text-xl text-center border border-gray-300 rounded-md focus:border-green-500 focus:ring-2 focus:ring-green-500" renderInput={function (inputProps: InputProps, index: number): React.ReactNode {
            throw new Error("Function not implemented.");
          } }        />
      </div>

      {/* Countdown / Resend */}
      {countdown > 0 ? (
        <div className="text-sm text-gray-500">
          (Ref Code: {otpInfomation.refCode}) Resend OTP in{" "}
          <span className="text-red-500">{countdownString}</span>
        </div>
      ) : (
        <div
          onClick={onResetOTPHandler}
          className="text-sm text-green-600 cursor-pointer hover:underline"
        >
          ส่งอีกครั้ง
        </div>
      )}
    </Form>
  );
};

export default GenLinkRequestOTPSection;
