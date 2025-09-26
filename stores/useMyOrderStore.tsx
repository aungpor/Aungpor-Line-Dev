import {
  MY_ORDERS_OTHER_STATUS,
  MY_ORDERS_STATUS,
} from "constants/enum/component";
import { IHistoryPurchase } from "interface/myOrders.interface";
import { createWithEqualityFn } from "zustand/traditional";

interface IMyOrder {
  //* common tab status variable
  commonTabStatus: MY_ORDERS_STATUS;
  commonPackageHistory: IHistoryPurchase | undefined;
  setCommonTabStatus: (type: MY_ORDERS_STATUS) => void;
  setCommonPackageHistory: (type: IHistoryPurchase) => void;
  //* voucher tab status variable
  voucherPackageHistory: IHistoryPurchase | undefined;
  setVoucherPackageHistory: (type: IHistoryPurchase) => void;
  //* other tab status variable
  otherTabStatus: MY_ORDERS_OTHER_STATUS;
  otherPackageHistory: IHistoryPurchase | undefined;
  setOtherTabStatus: (type: MY_ORDERS_OTHER_STATUS) => void;
  setOtherPackageHistory: (type: IHistoryPurchase) => void;
  resetMyOrderStore: () => void;
}

const INIT_PLATFORM_STATE = {
  commonPackageHistory: undefined,
  voucherPackageHistory: undefined,
  otherPackageHistory: undefined,
  commonTabStatus: MY_ORDERS_STATUS.READY_TO_USE,
  otherTabStatus: MY_ORDERS_OTHER_STATUS.IN_PROGRESS,
};

const useMyOrderStore = createWithEqualityFn<IMyOrder>()((set, get) => ({
  ...INIT_PLATFORM_STATE,

  resetMyOrderStore: () => {
    set(INIT_PLATFORM_STATE);
  },

  setCommonTabStatus: (type: MY_ORDERS_STATUS) => {
    set({ commonTabStatus: type });
  },

  setOtherTabStatus: (type: MY_ORDERS_OTHER_STATUS) => {
    set({ otherTabStatus: type });
  },

  setCommonPackageHistory: (value: IHistoryPurchase) => {
    set({ commonPackageHistory: value });
  },

  setVoucherPackageHistory: (value: IHistoryPurchase) => {
    set({ voucherPackageHistory: value });
  },

  setOtherPackageHistory: (value: IHistoryPurchase) => {
    set({ otherPackageHistory: value });
  },
}));

export default useMyOrderStore;
