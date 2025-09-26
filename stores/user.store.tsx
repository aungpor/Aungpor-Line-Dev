import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TUser } from "stores/types";
import { IAuthen } from "interface/auth.interface";
import { IMaxcard, IPatoisMaxcard } from "interface/maxcard.interface";

export const UserStore = create<TUser>()(
  persist(
    (set, get) => ({
      accessToken: "",
      userAuthen: {} as IAuthen,
      userPhone: "",
      formType: "phone",
      userID: null,
      follower: 0,
      following: 0,
      patoisMaxcard: {} as IPatoisMaxcard,
      maxCardData: {} as IMaxcard,
      isLoadingMaxcard: false,
      name: "",
      countNumberOfNotification: 0,
      isAutoBindMaxcard: "N",
      isNewUser: "N",
      coutNumberOfmerchantShop: 0,
      isLoadingHeader: false,
      coutNumberOfCart: 0,

      setUserAuthen: ($data: IAuthen) => {
        set({ userAuthen: $data });
      },
      setAccessToken: (data: string) => {
        set({ accessToken: data });
      },
      setUserPhone(data: string) {
        set({ userPhone: data });
      },
      setFormType(data: string) {
        set({ formType: data });
      },
      setUserID(data: number) {
        set({ userID: data });
      },
      setFollower(data: number) {
        set({ follower: data });
      },
      setFollowing(data: number) {
        set({ following: data });
      },
      setPatoisMaxcard: (data: IPatoisMaxcard) => {
        set({ patoisMaxcard: data });
      },
      setMaxcardData: (data: IMaxcard) => {
        set({ maxCardData: data });
      },
      setIsLoadingMaxcard: (data: boolean) => {
        set({ isLoadingMaxcard: data });
      },
      setName: (data: string) => {
        set({ name: data });
      },
      setCountNumberOfNotification: (data: number) => {
        set({ countNumberOfNotification: data });
      },
      setIsAutoBindMaxcard: (data: string) => {
        set({ isAutoBindMaxcard: data });
      },
      setIsNewUser: (data: string) => {
        set({ isNewUser: data });
      },
      setCountNumberOfMerchantShop: (data: number) => {
        set({ coutNumberOfmerchantShop: data });
      },
      setCountNumberOfCart: (data: number) => {
        set({ coutNumberOfCart: data });
      },
      setIsLoadingHeader: (data: boolean) => {
        set({ isLoadingHeader: data });
      },
    }),
    {
      name: "user-patois-storage",
      getStorage: () => sessionStorage,
      partialize: (state) => ({
        userID: state.userID,
        follower: state.follower,
        following: state.following,
      }),
    },
  ),
);
