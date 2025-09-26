import { Form } from "antd";
import { NamePath } from "antd/lib/form/interface";
import { useMemo } from "react";
import OtpInput, { OTPInputProps } from "react-otp-input";

interface IProps extends Omit<OTPInputProps, "numInputs"> {
  name: NamePath;
  label?: string;
  className?: string;
  formClassName?: string;
  required?: boolean;
  fixErrorContainer?: boolean;
  numInputs?: number;
}

const FormOTPInput = (props: IProps) => {
  const {
    name,
    label,
    className = "",
    formClassName = "",
    fixErrorContainer = true,
    numInputs = 6,
    onChange,
    ...rest
  } = props;

  const form = Form.useFormInstance();

  const isError = useMemo(() => {
    if (!form) return false;
    return form.getFieldError(name)?.length > 0;
  }, [form, name]);

  return (
    <Form.Item
      name={name}
      label={label}
      colon={false}
      shouldUpdate
      labelCol={{ span: 24 }}
      className={` ${formClassName}`}
      style={{ marginBottom: fixErrorContainer ? 24 : 0 }}
    >
      <OtpInput
        value={""}
        numInputs={numInputs}
        onChange={onChange}
        renderSeparator={<span className="m-[8px]" />} 
        {...rest}
        renderInput={(inputProps) => (
          <input
            {...inputProps}
            inputMode="numeric"
            pattern="[0-9]*"
            className={` ${className} ${
              isError ? "border-red-500 focus:ring-red-500" : ""
            }`}
          />
        )}
      />
    </Form.Item>
  );
};

export default FormOTPInput;
