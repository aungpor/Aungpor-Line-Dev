
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

  // useEffect(() => {
  //   updateCallBackUrl();
  // }, [router?.query]);

  // const updateCallBackUrl = () => {
  //   const { query: routerQuery } = router;
  //   if (routerQuery?.callbackUrl) {
  //     const query = `${routerQuery?.callbackUrl}`;
  //     const path = isValidUrl(query) ? urlFunc.parse(query).path : query;
  //     setCallbackUrl(path);
  //   }
  // };

  return (
    <div className={`authen-modal-content  ${className} `}>
      {/* <img alt="patois-logo" src={PATOIS_LOGO} className="w-[130px] h-[40px]" /> */}
      {/* <AuthRequestOTPSection /> */}
      <GenLinkRequestOTPSection className=""/>
    </div>
  );
};

export default GenLinkModalContent;
