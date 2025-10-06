interface IProps {
  className?: string;
  onDownloadImage: () => void;
}

const AppDownloadButton = ({ onDownloadImage, className }: IProps) => {
  return (
    <div
      onClick={onDownloadImage}
      className={`flex justify-center items-center gap-[8px] w-full rounded-[8px] py-[8px] px-[24px] h-[36px] bg-[#F2F2F2] hover:bg-[#D9D9D9] cursor-pointer ${className}`}
    >
      <img src="/icons/download.svg" className="w-[16px] h-[16px]" />
      <div className="text-14 text-semi-bold">{"บันทึก QR Code"}</div>
    </div>
  );
};

export default AppDownloadButton;
