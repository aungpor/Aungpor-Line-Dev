import { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";

export const useBreakpointsScreen = () => {
  const { height, width } = useWindowSize();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const getMobileScreen = () => {
    if (!hydrated) return false;
    return width <= 640;
  };

  const getTabletScreen = () => {
    if (!hydrated) return false;
    return width > 640 && width <= 768;
  };

  const getLabtopScreen = () => {
    if (!hydrated) return false;
    return width > 768 && width <= 1024;
  };

  const getDesktopScreen = () => {
    if (!hydrated) return false;
    return width > 1024;
  };

  const getSmallMobileScreen = () => {
    if (!hydrated) return false;
    return width <= 360;
  };

  const getMdTailwindScreen = () => {
    if (!hydrated) return false;
    return width > 768;
  };

  const getLgTailwindScreen = () => {
    if (!hydrated) return false;
    return width > 1440;
  };

  const getLgAppContentScreen = () => {
    if (!hydrated) return false;
    return width >= 968;
  };

  return {
    height,
    width,
    isMobileScreen: getMobileScreen(),
    isTabletScreen: getTabletScreen(),
    isLabtopScreen: getLabtopScreen(),
    isDesktopScreen: getDesktopScreen(),
    isSmallMobileScreen: getSmallMobileScreen(),
    isMdTailwindScreen: getMdTailwindScreen(),
    isLgTailwindScreen: getLgTailwindScreen(),
    isLgAppContentScreen: getLgAppContentScreen(),
  };
};
