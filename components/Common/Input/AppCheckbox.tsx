import { Checkbox, CheckboxProps } from "antd";

interface IProps extends CheckboxProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const AppCheckbox = (props: IProps) => {
  const { children, className = "", title = "", ...rest } = props;

  return (
    <Checkbox className={`app-checkbox-container  ${className}`} {...rest}>
      {title ? (
        <div className="text-[14px] leading-[21px] text-normal">{title}</div>
      ) : (
        children
      )}
    </Checkbox>
  );
};

export default AppCheckbox;
