export const isProd = process.env.NODE_ENV === "production";
export const AUTH_STORAGE_NAME = "patoistoken";

export const environment = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  API_QUALITY_URL: process.env.NEXT_PUBLIC_API_QUALITY_URL,
};
