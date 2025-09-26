import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TCart } from "./types/cart.type";
import {
  deleteCart,
  getCartDetail,
  updateCart,
} from "services/ecommerce.service";
import { ICartDetailProductList } from "interface/cart.interface";

export const CartStore = create<TCart>()(
  persist(
    (set, get) => ({
      cartDetail: {
        count: 0,
        list: [],
      },
      cartCheckout: null,
      cartDetailExpire: {
        count: 0,
        list: [],
      },
      setCartDetail: (data) => {
        set({ cartDetail: data });
      },
      setCartDetailExpire: (data) => {
        set({ cartDetailExpire: data });
      },
      updateCatePackageItem: async (productid, value) => {
        let cartDetail = get().cartDetail;
        let sortCart = cartDetail.list.map((val) => {
          let findProduct = val.productList.find(
            (productsItem) => productsItem.sub_product_id == productid,
          );
          if (!findProduct) return val;

          let findSubProduct = val.productList.map((productsItem) => {
            if (productsItem.sub_product_id == productid) {
              updateCart(productsItem.cart_id, value);

              return { ...productsItem, quantity: value };
            }
            return productsItem;
          });

          return { ...val, productList: findSubProduct };
        });
        set({ cartDetail: { ...cartDetail, list: sortCart } });
      },
      deleteCartPackageItem: async (productid) => {
        let cartDetail = get().cartDetail;
        let cartCount = 0;
        let sortCart = cartDetail.list.map((val) => {
          let findSubProduct = val.productList.filter((productsItem) => {
            if (productsItem.sub_product_id == productid) {
              deleteCart(productsItem.cart_id);

              return false;
            }
            return true;
          });

          cartCount += findSubProduct.length;
          return { ...val, productList: findSubProduct };
        });

        set({ cartDetail: { count: cartCount, list: sortCart } });
      },
      deleteCartExpirePackageItem: async (productid) => {
        let cartDetail = get().cartDetailExpire;

        let cartCount = 0;

        let sortCart = cartDetail.list.map((val) => {
          let findSubProduct = val.productList.filter((productsItem) => {
            if (productsItem.sub_product_id == productid) {
              deleteCart(productsItem.cart_id);
              return false;
            }
            return true;
          });

          cartCount += findSubProduct.length;

          return { ...val, productList: findSubProduct };
        });

        set({ cartDetailExpire: { count: cartCount, list: sortCart } });
      },
      setCartCheckout: (data) => {
        set({ cartCheckout: data });
      },
      setCartCheckoutFromPackage: (data) => {
        let sortData: any = data.map((val) => {
          return {
            cart_id: null,
            product_id: val.package_id,
            sub_product_id: val.sub_package_id,
            quantity: val.select_value,
            create_date: val.create_date,
            create_by: val.create_by,
            update_date: val.update_date,
            update_by: val.update_by,
            shop_id: val.shop_id,
            shop_name: val.shop_name,
            package_name: val.package_name,
            image_url_profile: val.image_url_profile,
            sub_package_stock: val.sub_package_stock,
            sub_package_name: val.sub_package_name,
            price:
              val.sub_package_price_after_discount ?? val.sub_package_price,
            is_expire: val.isExpired,
            type: null,
            sub_package_time: val.sub_package_time,
            sub_package_expire_text: val.sub_package_expire_text,
          };
        });

        set({
          cartCheckout: {
            count: data.length,
            list: [
              {
                shop_name: data[0]?.shop_name,
                shop_id: data[0]?.shop_id,
                productList: sortData,
              },
            ],
          },
        });
      },
    }),
    {
      name: "cart-patois-storage",
      getStorage: () => sessionStorage,
      partialize: (state) => ({
        cartDetail: state.cartDetail,
        cartDetailExpire: state.cartDetail,
      }),
    },
  ),
);
