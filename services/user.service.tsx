import { IApiResponse } from "@/interface/apiResponse.interface";
import { IUploadProfileResponse } from "@/interface/image.interface";
import { fetch } from "@/utils/fetch";

interface IotherCommentWithCalendar {
  pageNumber: number;
  rowsOfPage: number;
  userId: number | null;
}

export const getUserProfileService = async (ctx = {}) => {
  const method = "GET";
  const path = `user`;
  return fetch(method, path, {}, ctx);
};

export const getProfileComment = async (param = {}) => {
  const method = "GET";
  const path = `user/otherComment`;
  return fetch(method, path, param, {});
};

export const getOtherCommentWithCalendar = async (
  param: IotherCommentWithCalendar = {
    pageNumber: 1,
    rowsOfPage: 5,
    userId: null,
  },
) => {
  const method = "GET";
  const path = `user/otherCommentWithCalendar`;
  return fetch(method, path, param, {});
};

export const getProfileReview = async (param = {}) => {
  const method = "GET";
  const path = `user/otherReview`;
  return fetch(method, path, param, {});
};

export const getUserFollower = async (param = {}) => {
  const method = "POST";
  const path = `user/getFollowersInfoByUserId`;
  return fetch(method, path, param, {});
};

export const getFollowing = async (data) => {
  const method = "POST";
  const path = `user/getListFollowing`;
  return fetch(method, path, data);
};

export const getFollower = async (data) => {
  const method = "POST";
  const path = `user/getListFollowers`;
  return fetch(method, path, data);
};

export const setFollow = async (data) => {
  const method = "POST";
  const path = `user/follow`;
  return fetch(method, path, data);
};

export const setUnfollow = async (data) => {
  const method = "POST";
  const path = `user/unFollow`;
  return fetch(method, path, data);
};

export const bindMaxCardToUser = async (maxcardID: number) => {
  const method = "PUT";
  const path = `user/maxcard/${maxcardID}`;
  return fetch(method, path);
};

export const searchAllUserByUsername = async (data: {}) => {
  const method = "POST";
  const path = `search/searchAllUserByUserName`;
  return fetch(method, path, data);
};

export const updateUserImageProfile = async (file: File) => {
  const method = "POST";
  const path = `user/image/upload/profile`;

  const formData = new FormData();
  formData.append("files[]", file, file.name);
  const header = { "Content-Type": "multipart/form-data" };
  const response = await fetch(method, path, formData, {}, header);
  return response.data as IApiResponse<IUploadProfileResponse>;
};

export const updateUserNameProfile = async (
  userName: string,
  phoneNumber: string,
) => {
  const method = "PUT";
  const path = `user`;

  const body = { email: "", name: userName, tel: phoneNumber };
  const response = await fetch(method, path, body);

  return response.data as IApiResponse<{ status: string }>;
};

export const updateNameService = async (name: string, tel: string) => {
  let body = {
    email: "",
    name: name,
    tel: tel,
  };

  const method = "PUT";
  const path = `user`;
  return fetch(method, path, body);
};

export const checkNameDupicateService = async (name: string) => {
  let body = {
    name: name,
  };

  const method = "POST";
  const path = `user/checkDupilcateName`;
  return fetch(method, path, body);
};

export const checkRefCodeService = async (user_id: string) => {
  let param = {};
  param = {
    scode: user_id,
  };

  const method = "GET";
  const path = `user/suggestCode`;
  return fetch(method, path, param);
};

export const checkHeader = async () => {
  const method = "POST";
  const path = `user/update/data/header`;
  return fetch(method, path, {});
};

export const updateTokenCustomer = async (tokenCustomer: string) => {
  const method = "POST";
  const path = `user/updateTokenCustomer`;
  return fetch(method, path, { tokenCustomer });
};

interface ICampaignData {
  page_type: string;
  ref_type: string;
  ref_code: string;
  campaign_code: string;
  campaign_code_text: string;
  for_new_user_only: string;
  is_encrypted?: boolean;
}

export const sendLoginInformation = async (
  isNewRegister,
  auto_bind_maxcard,
  campaign_data: ICampaignData | null,
) => {
  const method = "POST";
  const path = `user/auth/sendLoginInformation`;

  let body = {
    isNewRegister,
    auto_bind_maxcard,
    campaign_data,
  };
  return fetch(method, path, body);
};

export const loginByPartner = async (
  token: string,
  partnerName: string = "MAXME",
) => {
  const method = "POST";
  const path = `user/auth/loginByPartner`;

  let body = {
    token,
    partnerName,
  };
  return fetch(method, path, body);
};

export const getUserRanking = async (
  foodType_id: string | null | undefined = null,
  pageNumber: number = 1,
  rowsOfPage: number = 10,
) => {
  let param = {
    foodType_id: foodType_id == "all" ? null : foodType_id || null,
    pageNumber,
    rowsOfPage,
  };

  const method = "GET";
  const path = `user/getUserRanking`;
  return fetch(method, path, param);
};

export const getMyUserRanking = async (
  foodType_id: string | null | undefined = null,
) => {
  let param = {
    foodType_id: foodType_id || null,
  };

  const method = "GET";
  const path = `user/getMyUserRanking`;
  return fetch(method, path, param);
};

export const checkEmailDuplicate = async (param = {}) => {
  const method = "GET";
  const path = `user/auth/checkMail`;
  return fetch(method, path, param, {});
};

export const verifyEmail = async (params = {}) => {
  const method = "POST";
  const path = `user/auth/verifyEmail`;
  return fetch(method, path, params, {});
};

export const sendRegisterUser = async (params = {}) => {
  const method = "POST";
  const path = `user/auth/register`;
  return fetch(method, path, params, {});
};

export const sendEmailForgotPassword = async (params = {}) => {
  const method = "POST";
  const path = `user/auth/forgot/password`;
  return fetch(method, path, params, {});
};

export const sendResetPassword = async (params = {}) => {
  const method = "POST";
  const path = `user/auth/updatePassword`;
  return fetch(method, path, params, {});
};

export const updatePersonalizeDate = async (userId: number | string) => {
  const method = "PUT";
  const path = `user/updatePersonalizeDate/${userId}`;
  return fetch(method, path);
};

export const searchSuggestForMyReview = async (
  text,
  userId: number | string,
) => {
  const method = "POST";
  const path = `search/searchSuggestForMyReview`;
  const data = {
    text,
    userId: +userId,
  };
  return fetch(method, path, data);
};

export const checkOtp = async (param = {}) => {
  const method = "POST";
  const path = `user/auth/checkOtp`;
  const response = await fetch(method, path, param, {});
  return response.data;
};
