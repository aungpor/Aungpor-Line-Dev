import { AFFILIATE_PACKAGE_ORDER_BY_OPTIONS } from "constants/component";
import { AFFILIATE_PACKAGE_CATEGORY_TABS } from "constants/enum/component";
import { USER_AFFILIATE_MENU_TYPE } from "constants/Menu";
import { IOption } from "interface/common.interface";
import {
  IUserAffiliatePackage,
  IUserAffiliatePackageSchema,
} from "interface/userAffiliate.interface";
import { getAffiliatePackageCategory } from "services/ecommerce.service";
import { inquiryProvince } from "services/masterData.service";
import { persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

interface IUserAffiliateStore {
  sessionMenu: USER_AFFILIATE_MENU_TYPE;
  hotelCategoryOptions: IOption[];
  activityCategoryOptions: IOption[];
  provinceOptions: IOption[];
  orderByOptions: IOption[];
  filterPackageType: AFFILIATE_PACKAGE_CATEGORY_TABS;
  affiliatePackageList: IUserAffiliatePackage | undefined;
  currPackageGenerateLink: IUserAffiliatePackageSchema | undefined;
  setSessionMenu: (menu: USER_AFFILIATE_MENU_TYPE) => void;
  setFilterPackageType: (type: AFFILIATE_PACKAGE_CATEGORY_TABS) => void;
  setAffiliatePackageList: (packageList: IUserAffiliatePackage) => void;
  setCurrPackageGenerateLink: (value: IUserAffiliatePackageSchema) => void;
  initialUserAffiliateManagement: () => Promise<void>;
  resetUserAffiliateStore: () => void;
}

const INIT_USER_AFFILIATE_STATE = {
  provinceOptions: [],
  hotelCategoryOptions: [],
  activityCategoryOptions: [],
  affiliatePackageList: undefined,
  currPackageGenerateLink: undefined,
  filterPackageType: AFFILIATE_PACKAGE_CATEGORY_TABS.ACTIVITY,
  orderByOptions: AFFILIATE_PACKAGE_ORDER_BY_OPTIONS,
};

const provinceDefaultOption: IOption[] = [
  {
    key: "0",
    value: "ทุกจังหวัด",
    label: "ทุกจังหวัด",
  },
];

const useUserAffiliateStore = createWithEqualityFn<IUserAffiliateStore>()(
  persist(
    (set) => ({
      ...INIT_USER_AFFILIATE_STATE,
      sessionMenu: USER_AFFILIATE_MENU_TYPE.DASHBOARD,

      initialUserAffiliateManagement: async () => {
        const { data: provinceList } = await inquiryProvince();

        const { data: activityCategoryList } =
          await getAffiliatePackageCategory(
            AFFILIATE_PACKAGE_CATEGORY_TABS.ACTIVITY,
          );

        const { data: hotelCategoryList } = await getAffiliatePackageCategory(
          AFFILIATE_PACKAGE_CATEGORY_TABS.HOTEL,
        );

        const activityCategoryOptions =
          activityCategoryList?.map((category) => ({
            value: category.package_category_id,
            label: category.package_category_name,
          })) ?? [];

        const hotelCategoryOptions =
          hotelCategoryList?.map((category) => ({
            value: category.package_category_id,
            label: category.package_category_name,
          })) ?? [];

        const provinceOptions =
          provinceList?.map<IOption>((province) => ({
            key: province.id,
            value: province.name_th,
            label: province.name_th,
          })) ?? [];

        set({
          provinceOptions: [...provinceDefaultOption, ...provinceOptions],
          hotelCategoryOptions,
          activityCategoryOptions,
        });
      },

      setSessionMenu: (menu: USER_AFFILIATE_MENU_TYPE) => {
        set({ sessionMenu: menu });
      },

      setAffiliatePackageList: (packageList: IUserAffiliatePackage) => {
        set({ affiliatePackageList: packageList });
      },

      setFilterPackageType: (type: AFFILIATE_PACKAGE_CATEGORY_TABS) => {
        set({ filterPackageType: type });
      },

      setCurrPackageGenerateLink: (value: IUserAffiliatePackageSchema) => {
        set({ currPackageGenerateLink: value });
      },

      resetUserAffiliateStore: () => {
        set(INIT_USER_AFFILIATE_STATE);
      },
    }),
    {
      name: "user-affiliate-storage",
      getStorage: () => sessionStorage,
      skipHydration: true,
    },
  ),
);

export default useUserAffiliateStore;
