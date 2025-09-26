import dayjs from "dayjs";
import { ICommerceProfile } from "interface/commerce.interface";
import { IOption } from "interface/common.interface";
import { IPackageReportHistory } from "interface/ecommerce";
import { getListPackageReportHistory } from "services/ecommerce.service";
import { getSalesReportDateOptions } from "utils/transformData.utils";
import { persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

interface ICommercePlatform {
  activeShop?: ICommerceProfile;
  packageReportList: IPackageReportHistory[];
  shopProflieList: ICommerceProfile[];
  startDateOptions: IOption[];
  endDateOptions: IOption[];
  setActiveShop: (menu: ICommerceProfile) => void;
  setEndDateOptions: (options: IOption[]) => void;
  setShopProflieList: (shopList: ICommerceProfile[]) => void;
  fetchPackageReportByShopId: (shopId: string) => Promise<void>;
  initialCommerceProfile: (commerceList: ICommerceProfile[]) => Promise<void>;
}

const INITIAL_PLATFORM_DATE_OPTIONS = [
  {
    label: dayjs().set("date", 1).format("MMMM YYYY"),
    value: dayjs().set("date", 1).format("MM/DD/YYYY"),
  },
];

const INIT_PLATFORM_STATE = {
  activeShop: undefined,
  startDateOptions: INITIAL_PLATFORM_DATE_OPTIONS,
  endDateOptions: INITIAL_PLATFORM_DATE_OPTIONS,
  shopProflieList: [],
  packageReportList: [],
  firstDatePartner: new Date().toISOString(),
};

const useCommercePlatformStore = createWithEqualityFn<ICommercePlatform>()(
  persist(
    (set, get) => ({
      ...INIT_PLATFORM_STATE,

      initialCommerceProfile: async (commerceList: ICommerceProfile[]) => {
        const currDate = new Date().toISOString();
        const localData = get().activeShop;

        const shopId = !!localData
          ? localData.shopId
          : commerceList?.[0].shopId;

        const { data } = await getListPackageReportHistory({}, shopId);
        const reportDate = getSalesReportDateOptions(
          data?.first_day_partner ?? currDate,
        );

        set({
          activeShop: !!localData ? localData : commerceList?.[0],
          shopProflieList: commerceList,
          packageReportList: data?.list ?? [],
          startDateOptions: reportDate.startOptions,
          endDateOptions: reportDate.endOptions,
        });
      },

      fetchPackageReportByShopId: async (shopId: string) => {
        const currDate = new Date().toISOString();
        const { data } = await getListPackageReportHistory({}, shopId);
        const reportDate = getSalesReportDateOptions(
          data?.first_day_partner ?? currDate,
        );

        set({
          packageReportList: data?.list ?? [],
          startDateOptions: reportDate.startOptions,
          endDateOptions: reportDate.endOptions,
        });
      },

      setEndDateOptions: (options: IOption[]) => {
        set({ endDateOptions: options });
      },

      setPackageReportList: (packageReportList: IPackageReportHistory[]) => {
        set({ packageReportList });
      },

      setShopProflieList: (shopProflieList: ICommerceProfile[]) => {
        set({ shopProflieList });
      },

      setActiveShop: (activeShop: ICommerceProfile) => {
        set({ activeShop });
      },
    }),
    {
      name: "commerce-platform-storage", // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useCommercePlatformStore;
