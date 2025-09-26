import TagManager from "react-gtm-module";

export const useGoogleTagManagement = () => {
  const registerGTMEvent = (eventName: string, dataLayer?: object) => {
    TagManager.dataLayer({
      dataLayer: {
        event: eventName,
        ...dataLayer,
      },
    });
  };

  return { registerGTMEvent };
};
