import { ColProps, Form, Input, InputProps } from "antd";
import { NamePath } from "antd/lib/form/interface";
import { useTextInputRules } from "utils/hook/useTextInputRules";

// import AppIcon from "../Icons";
import AppMarkInput from "../Input/AppMarkInput";
// import "./styles.scss";

interface IProps extends Omit<InputProps, "name"> {
  name: NamePath;
  label?: string;
  className?: string;
  height?: number;
  required?: boolean;
  type?: "text" | "email" | "phone" | "password" | "citizenId";
  requiredMessage?: string;
  fixErrorContainer?: boolean;
  wrapperCol?: ColProps;
  formClassName?: string;
  preserve?: boolean;
  mask?: string | (string | RegExp)[];
}

const FormTextInput = (props: IProps) => {
  const {
    name,
    label,
    required,
    type = "text",
    placeholder,
    requiredMessage,
    wrapperCol,
    fixErrorContainer = true,
    formClassName = "",
    className = "",
    mask,
    onChange,
    preserve = false,
    allowClear = false,
    ...rest
  } = props;

  const { rules } = useTextInputRules(label, type, required, requiredMessage);

  return (
    <Form.Item
      name={name}
      label={label}
      colon={false}
      labelCol={{ span: 24 }}
      wrapperCol={wrapperCol}
      className={`text-input-container ${formClassName}`}
      rules={rules}
      preserve={preserve}
      style={{ marginBottom: fixErrorContainer ? 24 : 0 }}
    >
      {mask ? (
        <AppMarkInput
          mask={mask}
          className={className}
          placeholder={placeholder}
          {...rest}
        />
      ) : type === "password" ? (
        <Input.Password
          className={`p-[8px] rounded-[8px] ${className}`}
          allowClear={allowClear}
          placeholder={placeholder}
          onChange={onChange}
          // iconRender={(visible) => (
          //   <AppIcon name={visible ? "EyeOutline" : "EyeSlashOutline"} />
          // )}
          {...rest}
        />
      ) : (
        <Input
          className={`p-[8px] rounded-[8px] ${className}`}
          allowClear={allowClear}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
      )}
    </Form.Item>
  );
};

export default FormTextInput;
