// utils/registration.ts
import Cookies from "js-cookie";

export const getRegistrationStep = () => {
  if (typeof window === "undefined") return null;
  return Cookies.get("registrationStep") || null;
};

export const setRegistrationStep = (step: "info" | "pdpa" | "otp") => {
  if (typeof window === "undefined") return;
  Cookies.set("registrationStep", step, { path: "/" });
  console.log("✅ registrationStep set to:", step);
};
