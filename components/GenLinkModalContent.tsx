
import { useRouter } from "next/router";
import GenLinkRequestOTPSection from "./GenLinkRequestOTPSection";
import { PATOIS_LOGO } from "@/constants/component";


interface IProps {
  className?: string;
  onSuccess?: () => void;
}

const GenLinkModalContent = (props: IProps) => {
  const { className = "", onSuccess } = props;
  const router = useRouter();

  return (
    <div className={`authen-modal-content  ${className} `}>
      <GenLinkRequestOTPSection className=""/>
    </div>
  );
};

export default GenLinkModalContent;
