import { TActivity } from "./types";
import { create } from "zustand";

export const ActivityStore = create<TActivity>((set, get) => ({
  from: null,
  callbackUrl: null,
  showAuthPopup: false,
  showResetPasswordPopup: false,
  isUserIdEncrypt: null,
  setFrom: (data: string | null) => {
    set({ from: data });
  },
  setCallbackUrl: (data: string | null) => {
    set({ callbackUrl: data });
  },
  setShowAuthPopup: (data: boolean) => {
    set({ showAuthPopup: data });
  },
  setShowResetPasswordPopup: (data: boolean) => {
    set({ showResetPasswordPopup: data });
  },
  setUserIdEncrypt: (data: string | null) => {
    set({ isUserIdEncrypt: data });
  },
}));
