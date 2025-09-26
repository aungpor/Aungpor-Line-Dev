import {
  YSC_DETAIL_CONTENT_TYPE,
  YSC_PHASE_STATUS,
} from "constants/youngScout";

interface IProps {}

export const useYSCPhaseStatus = (
  phase: YSC_PHASE_STATUS,
  contentType: YSC_DETAIL_CONTENT_TYPE,
) => {
  const getOpenPhaseStatus = () => {
    return phase === YSC_PHASE_STATUS.OPEN;
  };

  const getClosedPhaseStatus = () => {
    return phase === YSC_PHASE_STATUS.CLOSED;
  };

  const getShowPackagePhaseStatus = () => {
    return (
      phase === YSC_PHASE_STATUS.SHOW_PACKAGE &&
      contentType === YSC_DETAIL_CONTENT_TYPE.CU_CONTENT
    );
  };

  return {
    isOpenPhase: getOpenPhaseStatus(),
    isClosedPhase: getClosedPhaseStatus(),
    isShowPackagePhase: getShowPackagePhaseStatus(),
  };
};
