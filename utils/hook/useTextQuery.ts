import { useEffect, useState } from "react";
import { useBreakpointsScreen } from "./useBreakpointsScreen";

const useTextQuery = (flag = false) => {
  const {
    isDesktopScreen,
    isTabletScreen,
    isLabtopScreen,
    isSmallMobileScreen,
  } = useBreakpointsScreen();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // this function below is trying to custom media query (like markdown) on init message to match with styles
  // (xs => extra small br and sm => small br according to tailwind media query)
  // for br that use for every screen please use \n
  const query = (message?: string) => {
    if (!hydrated) return "";

    if (isDesktopScreen) {
      return message?.replaceAll("-lgbr-", "\n").replaceAll("-xsbr-", "");
    } else if (isSmallMobileScreen) {
      return message?.replaceAll("-xsbr-", "\n").replaceAll("-lgbr-", "");
    }
    return message?.replaceAll("-lgbr-", "").replaceAll("-xsbr-", "");
  };

  const flagQuery = (message?: string) => {
    if (!hydrated) return "";

    if (isDesktopScreen || isLabtopScreen) {
      return message
        ?.replaceAll("-lgbr-", "\n")
        .replaceAll("-mdbr-", "")
        .replaceAll("-xsbr-", "");
    } else if (isTabletScreen) {
      return message
        ?.replaceAll("-mdbr-", "\n")
        .replaceAll("-lgbr-", "")
        .replaceAll("-xsbr-", "");
    } else {
      return message
        ?.replaceAll("-xsbr-", "\n")
        .replaceAll("-lgbr-", "")
        .replaceAll("-mdbr-", "");
    }
  };

  return flag ? flagQuery : query;
};

export default useTextQuery;
