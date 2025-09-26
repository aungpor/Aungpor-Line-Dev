export type TActivity = {
  from: string | null;
  callbackUrl: string | null;
  showAuthPopup: boolean;
  showResetPasswordPopup: boolean;
  isUserIdEncrypt: string | null;
  setFrom: (data: string | null) => void;
  setCallbackUrl: (data: string | null) => void;
  setShowAuthPopup: (data: boolean) => void;
  setShowResetPasswordPopup: (data: boolean) => void;
  setUserIdEncrypt: (data: string | null) => void;
};
