import React, { ReactNode, useEffect, useRef, useState } from "react";
import ModalPopup from "../ModalPopup";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

const ModalNotification = ({ isVisible, onClose }: IProps) => {

  return (
    <ModalPopup
      isVisible={isVisible}
      onClose={onClose}
      closeButton=""
      className="qr-modal !w-auto !p-0"
      closeRight="right-[-30px]"
    >
      <div className="Body w-[512px] h-[559px] px-16 py-6 bg-white rounded-3xl flex-col justify-start items-start gap-2.5 ">
        <div className="Container self-stretch flex-col justify-start items-center gap-6 flex">
          <div className="QrLink flex-col justify-start items-center flex">
            <div
              className="QrLink flex-col justify-start items-center flex"
              style={{
                opacity: 0,
                position: "absolute",
                pointerEvents: "none",
                zIndex: -1,
              }}
            ></div>
          </div>
          <div className="absolute right-[-30px] top-[25px]">
            <div
              onClick={onClose}
              className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer hover:bg-[#e8e8e8]"
            >
              <img src="/Close1.svg" width={24} />
            </div>
          </div>
        </div>
      </div>
    </ModalPopup>
  );

};

export default ModalNotification;
