import { IApiResponse } from "@/interface/apiResponse.interface";
import {
  IDay,
  IPackageActivitiesServices,
  IPackageCategory,
  IPackagePetsServices,
  IPackagePriceRange,
  IPackageSpecialServices,
  IProvince,
} from "@/interface/ecommerce";
import {
  IAddress,
  IChineseZodiac,
  IEnhanceSuccess,
  IGender,
  IMasterConfig,
  IRegion,
} from "@/interface/masterData.interface";
import { fetch } from "@/utils/fetch";

export const inquiryRegion = async (ctx = {}) => {
  const method = "GET";
  const path = `ecommerce/getRegion`;
  const params = {};
  const response = await fetch(method, path, params, ctx);
  return response?.data as IApiResponse<IRegion[]>;
};

export const inquiryProvince = async (ctx = {}) => {
  const method = "GET";
  const path = `ecommerce/getProvince`;
  const params = {};
  const response = await fetch(method, path, params, ctx);
  return response?.data as IApiResponse<IProvince[]>;
};

export const inquiryAddressByZipcode = async (zipcode: string, ctx = {}) => {
  const method = "POST";
  const path = `location/getAddressBooking`;
  const body = { zipcode };
  const response = await fetch(method, path, body, ctx);
  return response.data as IApiResponse<IAddress[]>;
};

export const getSystemConfig = async (configName: string, ctx = {}) => {
  const method = "GET";
  const path = `system/config/getUrlRedirect`;
  const params = { config_name: configName };
  const response = await fetch(method, path, params, ctx);
  return response.data as IApiResponse<IMasterConfig>;
};

export const inquiryGender = async (ctx = {}) => {
  const method = "GET";
  const path = `ecommerce/getGender`;
  const response = await fetch(method, path, {}, ctx);
  return response.data as IApiResponse<IGender[]>;
};

export const inquiryDay = async (ctx = {}) => {
  const method = "GET";
  const path = `ecommerce/getDay`;
  const response = await fetch(method, path, {}, ctx);
  return response?.data as IApiResponse<IDay[]>;
};

export const inquiryChineseZodiac = async (ctx = {}) => {
  const method = "GET";
  const path = `ecommerce/getChineseZodiac`;
  const response = await fetch(method, path, {}, ctx);
  return response?.data as IApiResponse<IChineseZodiac[]>;
};

export const inquiryEnhanceSuccess = async (ctx = {}) => {
  const method = "GET";
  const path = `ecommerce/getTitleNeedSuccess`;
  const response = await fetch(method, path, {}, ctx);
  return response?.data as IApiResponse<IEnhanceSuccess[]>;
};

//* Package Master Data
export const inquiryPackageCategory = async (show_in_tab = 1) => {
  const method = "GET";
  const path = `ecommerce/getPackageCategory`;
  const params = { show_in_tab };
  const response = await fetch(method, path, params);
  return response?.data as IApiResponse<IPackageCategory[]>;
};

export const inquiryPackageRatingPrice = async () => {
  const method = "GET";
  const path = `ecommerce/getPackageRatingPrice`;
  const response = await fetch(method, path, {});
  return response?.data as IApiResponse<IPackagePriceRange[]>;
};

export const inquiryPackageSpecialServices = async () => {
  const method = "GET";
  const path = `ecommerce/getPackageSpecialServices`;
  const response = await fetch(method, path, {});
  return response?.data as IApiResponse<IPackageSpecialServices[]>;
};

export const inquiryPackagePetsServices = async () => {
  const method = "GET";
  const path = `ecommerce/getPackagePetsOption`;
  const response = await fetch(method, path, {});
  return response?.data as IApiResponse<IPackagePetsServices[]>;
};

export const inquiryPackageActivitiesServices = async () => {
  const method = "GET";
  const path = `ecommerce/getPackagePlacesActivities`;
  const response = await fetch(method, path, {});
  return response?.data as IApiResponse<IPackageActivitiesServices[]>;
};

export const inquiryOpenDay = async () => {
  const method = "GET";
  const path = `ecommerce/getDay`;
  const response = await fetch(method, path, {});
  return response?.data as IApiResponse<IDay[]>;
};
