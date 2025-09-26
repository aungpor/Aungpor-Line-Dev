import { fetch } from "utils/fetch";

export const getOTP = async (data) => {
  const method = "POST";
  const path = `sms/sendOtp`;
  return fetch(method, path, data);
};

export const getOTPDetail = async (otpNo: number) => {
  const method = "GET";
  const path = `sms/check/otp/${otpNo}`;
  return fetch(method, path, {});
};

export const updateOTPNoStatus = async (otpID: number, data) => {
  const method = "PUT";
  const path = `sms/updateOtpNoStatus/${otpID} `;
  return fetch(method, path, data);
};

export const getSmsSend = async ({
  otp_to,
  otp_module,
  otp_status,
  patois_maxcard_id,
}) => {
  const method = "POST";
  const path = `sms/send`;
  const body = {
    otp: {
      otp_to: otp_to.replace(/-/g, ""),
      otp_module,
      otp_status,
      patois_maxcard_id,
      otp_type: "MAXCARD",
    },
  };
  return fetch(method, path, body);
};

export const fetchGetOTPMaxcard = async () => {
  const method = "GET";
  const path = `sms/check/otp`;
  return fetch(method, path, {});
};

export const insertOTPFail = async (otpData, otpFail) => {
  const method = "POST";
  const path = `sms/send/otpfail`;
  const body = {
    otpfail: {
      otp_no: otpData?.otp_no.replace(/-/g, ""),
      otp_no_fail: otpFail.replace(/-/g, ""),
      otp_to: otpData?.otp_to,
      otp_type: "MAXCARD",
      otp_user_id: otpData?.otp_user_id,
    },
  };
  return fetch(method, path, body);
};

export const updateOTPMaxcardStatus = async (
  otpID: number,
  data = { otp_status: "" },
) => {
  const method = "PUT";
  const path = `sms/otp/${otpID}`;
  const body = {
    otp: data,
  };
  return fetch(method, path, body);
};
