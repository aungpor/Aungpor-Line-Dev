import React from "react";
import ModalPopup from "../ModalPopup";
import { SIGN_IN_ERROR_RESPONSE } from "@/constants/enum/component";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  page?: string;
  otpError?: string;
}

const ModalNotification = ({ isVisible, page = "", otpError = "", onClose }: IProps) => {

  const getOtpErrorMessage = (otpError: string) => {
    switch (otpError) {
      case SIGN_IN_ERROR_RESPONSE.EXPIRED:
        return {
          title: "OTP หมดอายุ",
          subtitle: "กรุณาขอ OTP ใหม่"
        };
      case SIGN_IN_ERROR_RESPONSE.EXCEEDED:
        return {
          title: "เกินจำนวนครั้งที่กำหนด",
          subtitle: "กรุณาลองใหม่ในภายหลัง"
        };
      default:
        return {
          title: "OTP ไม่ถูกต้อง",
          subtitle: "กรุณาตรวจสอบอีกครั้ง"
        };
    }
  };

  return (
    <ModalPopup
      isVisible={isVisible}
      onClose={onClose}
      closeButton=""
      className="qr-modal !w-auto !p-0"
      closeRight="right-[-30px]"
    >
      <div
        className="Body relative h-[220px] px-4 py-6 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5"
        style={{
          width: "354px",
          maxWidth: "calc(100vw - 45px)", // กันขอบจอในจอเล็ก
        }}
      >
        {/* ปุ่มปิดบนขวา */}
        <div className="absolute top-2 right-1">
          <div
            onClick={onClose}
            className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer hover:bg-[#e8e8e8]"
          >
            <img src="/Close1.svg" width={24} alt="close" />
          </div>
        </div>

        <div className="Container self-stretch flex-col justify-start items-center gap-6 flex h-full">
          <div className="flex-col justify-center items-center flex h-full gap-4">
            <img
              src="/error-icon.svg"
              alt="error-icon"
              className="w-[80px] h-[80px]"
            />
            {page == "register" ? (<div className="flex flex-col justify-center items-center">
              <div className="text-[18px] font-medium">ไม่พบรหัสผู้เช่าในระบบ</div>
            </div>) : (
              otpError && (
                <div className="flex flex-col justify-center items-center">
                  <div className="text-[18px] font-medium">
                    {getOtpErrorMessage(otpError).title}
                  </div>
                  <div className="text-[18px] font-medium">
                    {getOtpErrorMessage(otpError).subtitle}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </ModalPopup>
  );
};

export default ModalNotification;
