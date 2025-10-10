import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { JSX, useEffect, useState } from "react";

interface IProps {
  isVisible: boolean;
  onClose?: Function;
  children: JSX.Element;
  background?: boolean;
  className?: string;
  closeButton?: string;
  closeRight?: string;
}

const ModalPopup = ({
  isVisible,
  onClose,
  children,
  background = false,
  className = "",
  closeButton = "top-right",
  closeRight,
}: IProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(isVisible);
  }, [isVisible]);

  const onClickClose = () => {
    setIsModalVisible(false);
    if (onClose) onClose(false);
  };

  return (
    <Modal
      open={isModalVisible}
      footer={null}
      closable={false}
      centered
      className={` grid modal-popup-warpper ${className}`}
      bodyStyle={{
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        margin: 0,
      }}
    >
      {closeButton == "top-right" && (
        <div className="right-[1px] lg:right-[60px] absolute">
          <div
            onClick={onClickClose}
            className="bg-white w-[35px] h-[35px] bottom-[10px] flex justify-center items-center rounded-full cursor-pointer"
          >
            <CloseOutlined style={{ color: "#767676", fontSize: 18 }} />
          </div>
        </div>
      )}
      {closeButton == "right" && (
        <div className={`${closeRight || "right-[-52px]"} absolute`}>
          <div
            onClick={onClickClose}
            className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer hover:bg-[#e8e8e8]"
          >
            {/* <CloseOutlined style={{ color: '#767676', fontSize: 18 }} /> */}
            <img src="/icons/Close1.svg" width={24} />
          </div>
        </div>
      )}
      {closeButton == "share-right" && (
        <div className=" right-[20px] top-[-32px] absolute ">
          <div
            onClick={onClickClose}
            className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer hover:bg-[#e8e8e8]"
          >
            {/* <CloseOutlined style={{ color: '#767676', fontSize: 18 }} /> */}
            <img src="/icons/Close1.svg" width={24} />
          </div>
        </div>
      )}
      {background ? (
        <div className="bg-[#F9F9F9] w-auto rounded-xl overflow-hidden">
          <div className="w-full h-svh">{children}</div>
        </div>
      ) : (
        <div className=" ">{children}</div>
      )}
    </Modal>
  );
};

export default ModalPopup;
