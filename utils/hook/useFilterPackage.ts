import { IOption } from "interface/common.interface";
import { useEffect, useState } from "react";
import { inquiryProvince, inquiryRegion } from "services/masterData.service";

enum CATEGORY_TYPE {
  package = "1",
  activity = "3",
  hotel = "2",
  package_shop = "4",
}

export const useFilterPackage = (type: string) => {
  const [isLoadedFilter, setIsLoadedFilter] = useState(false);
  const [provinceOptions, setProvinceOptions] = useState<IOption[]>([]);
  const [regionOptions, setRegionOptions] = useState<IOption[]>();
  const [categoryOptions, setCategoryOptions] = useState<IOption[]>([]);
  const [priceOptions, setPriceOptions] = useState<IOption[]>([]);
  const [openDayOptions, setOpenDayOptions] = useState<IOption[]>([]);

  useEffect(() => {
    initialFilter();
  }, []);

  const initialFilter = async () => {
    try {
      const categoryType = CATEGORY_TYPE[type];

      //* Fetch Region Data
      const regionResponse = await inquiryRegion();
      const regionList = regionResponse?.data?.map((val) => ({
        value: val.geography_id,
        label: val.geography_name,
      }));
      setRegionOptions(regionList ?? []);

      //* Fetch Province Data
      const provinceResponse = await inquiryProvince();
      const provinceList = provinceResponse?.data?.map((val) => ({
        value: val.id,
        label: val.name_th,
        region_id: val.geography_id.toString(),
      }));
      setProvinceOptions(provinceList ?? []);

      // //* Fetch Package Price Data
      // const priceResponse = await inquiryPackageRatingPrice();
      // const priceData = priceResponse.data?.map<IOption>((value) => {
      //   return {
      //     label: value.pricerange_text,
      //     value: value.package_price_range_id,
      //   };
      // });
      // setPriceOptions(priceData ?? []);

      // //* Fetch Package Category Data
      // const categoryResponse = await inquiryPackageCategory(categoryType);
      // const categoryData = categoryResponse.data?.map<IOption>((value) => {
      //   return {
      //     label: value.package_category_name,
      //     value: value.package_category_id,
      //   };
      // });
      // setCategoryOptions(categoryData ?? []);

      // //* Fetch Open Day Data
      // const dayResponse = await inquiryOpenDay();
      // const dayData = dayResponse.data?.map<IOption>((value) => {
      //   return {
      //     label: value.shopweekday_criteria,
      //     value: value.shopweekday_id,
      //   };
      // });
      // setOpenDayOptions(dayData ?? []);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoadedFilter(true);
    }
  };

  return {
    isLoadedFilter,
    regionOptions,
    provinceOptions,
    categoryOptions,
    priceOptions,
    openDayOptions,
    provinceList: provinceOptions?.map((item) => item.value) ?? [],
    regionList: regionOptions?.map((item) => item.value) ?? [],
  };
};
