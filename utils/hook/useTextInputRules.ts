import { Rule } from "antd/lib/form";

export const useTextInputRules = (
  name?: string,
  type?: "text" | "email" | "phone" | "checkbox" | "password" | "citizenId",
  required = false,
  requiredMessage?: string,
) => {
  const getTextInputRules = () => {
    const rules: Rule[] = [];

    if (required) {
      const requiredRule: Rule = {
        required,
        message: requiredMessage ?? `ระบุ​${name ?? ""}`,
      };
      rules.push(requiredRule);
    }

    if (type === "email") {
      const emailRule: Rule = {
        type: "email",
        message: "รูปแบบอีเมลไม่ถูกต้อง",
      };
      rules.push(emailRule);
    } else if (type === "phone") {
      const phoneRule: Rule = {
        type: "string",
        pattern: /^0[0-9]{8,9}$/,
        message: "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง",
      };
      rules.push(phoneRule);
    } else if (type === "citizenId") {
      const citizenIdRule: Rule = {
        type: "string",
        pattern: /^[0-9]{13}$/,
        message: "รูปแบบเลขบัตรประชาชนไม่ถูกต้อง",
      };
      rules.push(citizenIdRule);
    }

    return rules;
  };

  return { rules: getTextInputRules() };
};
