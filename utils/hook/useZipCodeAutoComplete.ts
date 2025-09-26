import { FormInstance } from "antd";
import { DefaultOptionType } from "antd/lib/select";
import { IOption } from "interface/common.interface";
import { IAddress } from "interface/masterData.interface";
import { useState } from "react";
import { inquiryAddressByZipcode } from "services/masterData.service";

export const useZipCodeAutoComplete = (form: FormInstance) => {
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<IOption[]>([]);

  const getAutoCompleteOptions = (addressList: IAddress[]): IOption[] => {
    return addressList.map((address, index) => {
      const { subdistricts_name, districts_name, provinces_name, zipcode } =
        address;
      return {
        key: index,
        value: `${zipcode}-${index}`,
        label: `${subdistricts_name} ${districts_name} ${provinces_name} ${zipcode}`,
        zipCode: zipcode,
        provincesName: provinces_name,
        districtId: address.districts_id,
        districtsName: districts_name,
        subDistrictId: address.subdistricts_id,
        subDistrictsName: subdistricts_name,
      };
    });
  };

  const onSearchZipCodeHandler = async (zipCode: string) => {
    try {
      if (zipCode.length !== 5) return;
      const { data } = await inquiryAddressByZipcode(zipCode);
      const addressOptions = getAutoCompleteOptions(data ?? []);
      setAutoCompleteOptions(addressOptions);
    } catch (error) {
      console.log("error", error);
    }
  };

  const onSelectZipCodeHandler = (_: any, option: DefaultOptionType) => {
    form.setFieldsValue({
      taxZipCode: option.zipCode,
      taxProvince: option.provincesName,
      taxDistrict: option.districtsName,
      taxDistrictId: option.districtId,
      taxSubDistrict: option.subDistrictsName,
      taxSubDistrictId: option.subDistrictId,
    });
  };

  return {
    zipCodeOptions: autoCompleteOptions,
    onSearchZipCodeHandler,
    onSelectZipCodeHandler,
  };
};
