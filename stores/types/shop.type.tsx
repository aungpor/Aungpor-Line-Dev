import { IShopReview, IShopReviewedProps } from "interface/shop.interface";

export type TShop = {
  isVisibleLightBox: boolean;
  shopNearby: IShopReview[];
  shopProp: IShopReviewedProps;
  setShopNearby: (data: IShopReview[]) => void;
  setIsVisibleLightBox: (data: boolean) => void;
  setShopProp: (data: IShopReviewedProps) => void;
};
