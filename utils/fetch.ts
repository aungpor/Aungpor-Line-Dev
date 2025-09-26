import { Modal } from "antd";
import axios, { Method } from "axios";
import { environment } from "constants/_environment";
import moment from "moment";
import { getToken } from "next-auth/jwt";
import { getSession, signOut } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { signatureEncrypt } from "./encrypt";
import { isEmptyObject } from "./validateFunction";

const { confirm } = Modal;

export const fetch = async (
  method: Method = "GET",
  endpoint: string = "/",
  body: any = {},
  ctx: any = {},
  headers = {},
  apiURL = environment.API_URL,
) => {
  let uuid = uuidv4();
  let accessToken = "";
  const baseURL = `${apiURL}/${endpoint}`;
  const options = {};
  const queryName = method === "GET" ? "params" : "data";
  const api = axios.create({
    baseURL,
  });

  if (ctx?.req) {
    const token = await getToken({ req: ctx.req });
    accessToken = token?.accessToken;
  }

  const session = await getSession();

  if (session?.accessToken) {
    accessToken = session?.accessToken;
  }

  api.interceptors.request.use((config) => {
    if (config.headers) {
      if (accessToken) {
        config.headers["token"] = `Bearer ${accessToken}`;
      }
      if (method != "GET") {
        config.headers["signature"] = signatureEncrypt(
          body,
          session?.myUser?.user_secret,
          uuid,
          moment().format("YYYYMMDD"),
        );
      }
    }
    return config;
  });

  if (method != "GET") {
    body.tid = uuid;
  }

  try {
    const result = await api.request({
      method,
      baseURL,
      [queryName]: body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
      ...options,
    });

    return result;
  } catch (error: any) {
    let errorMsg = error?.response;

    try {
      let dataBody = {
        error_from: "Patois Website",
        error_name: errorMsg?.statusText || errorMsg?.message || "",
        error_func_name: errorMsg?.request?.responseURL || "",
        error_code: errorMsg?.status || "",
        error_massage: JSON.stringify(errorMsg?.request?.responseText || {}),
      };
      if (accessToken) {
        const baseURL = `${apiURL}/system/errorlogAuth`;
        const api = axios.create({ baseURL });
        api.interceptors.request.use((config) => {
          if (config.headers) config.headers["token"] = `Bearer ${accessToken}`;
          return config;
        });
        await api.request({
          method: "POST",
          baseURL,
          data: dataBody,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
          },
        });
      } else {
        const baseURL = `${apiURL}/system/errorlog`;
        const api = axios.create({ baseURL });
        await api.request({
          method: "POST",
          baseURL,
          data: dataBody,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
          },
        });
      }
    } catch (error) {}

    //* Case token expired and Check ctx in case fetch data at server side error
    if (error?.response?.status === 401 && isEmptyObject(ctx)) {
      confirm({
        title: "Session หมดอายุ",
        cancelButtonProps: {
          disabled: true,
          style: {
            display: "none",
          },
        },
        content: "กรุณาเข้าสู่ระบบใหม่อีกครั้ง",
        onOk: () => {
          signOut({
            callbackUrl: `${process.env.NEXT_PUBLIC_WEB_URL}`,
          });
        },
      });
    }

    return {
      data: null,
      status: error,
    };
  }
};
