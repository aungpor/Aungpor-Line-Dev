import {
  ICartCheckout,
  ICartDetail,
  ISubPackageForCart,
} from "interface/cart.interface";
import { ISubPackage } from "interface/travel.interface";

export type TCart = {
  cartDetail: ICartDetail;
  cartDetailExpire: ICartDetail;
  cartCheckout: ICartDetail | null;
  setCartDetail: (data: ICartDetail) => void;
  setCartDetailExpire: (data: ICartDetail) => void;
  setCartCheckout: (data: ICartDetail) => void;
  setCartCheckoutFromPackage: (data: ISubPackageForCart[]) => void;
  updateCatePackageItem: (productid: string, value: number) => void;
  deleteCartPackageItem: (productid: string) => void;
  deleteCartExpirePackageItem: (productid: string) => void;
};
