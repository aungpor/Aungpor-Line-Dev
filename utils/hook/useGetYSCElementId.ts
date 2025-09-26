import { YSC_DETAIL_CONTENT_TYPE } from "constants/youngScout";

export const useGetYSCElementId = (
  contentType: YSC_DETAIL_CONTENT_TYPE,
  componentID: string,
) => {
  const getElementId = () => {
    const type = contentType.toLowerCase().replace(" ", "-");
    return type.concat("-", componentID);
  };

  return { elementId: getElementId() };
};
