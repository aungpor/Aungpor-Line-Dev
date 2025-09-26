import { TShop } from "./types";
import { create } from "zustand";
import { IShopReview, IShopReviewedProps } from "interface/shop.interface";

export const ShopStore = create<TShop>((set, get) => ({
  isVisibleLightBox: false,
  shopNearby: [] as IShopReview[],
  shopProp: {
    coupon: undefined,
    isVisibleModalCoupon: false,
    image: undefined,
    isVisibleSuccessModal: false,
    isMyUserProfile: false,
    toashMsg: undefined,
    toashHeaderMsg: undefined,
  } as IShopReviewedProps,
  setIsVisibleLightBox: (data: boolean) => {
    set({ isVisibleLightBox: data });
  },
  setShopNearby: (data: IShopReview[]) => {
    set({ shopNearby: data });
  },
  setShopProp: (data: IShopReviewedProps) => {
    set({ shopProp: data });
  },
}));
