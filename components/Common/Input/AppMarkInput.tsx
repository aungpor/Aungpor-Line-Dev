import { Input, InputProps } from "antd";
import InputMask from "react-input-mask";

import { ReactNode } from "react";

interface IProps extends InputProps {
  mask: string | (string | RegExp)[];
  maskChar?: string | null;
  className?: string;
}

const AppMarkInput = (props: IProps) => {
  const {
    mask,
    value,
    maskChar = null,
    onChange,
    className = "",
    ...rest
  } = props;

  return (
    <InputMask
      mask={mask}
      maskChar={maskChar}
      value={value}
      onChange={onChange}
    >
      {
        ((inputProps: any) => (
          <Input
            className={`h-[36px] px-[8px] rounded-[8px] ${className}`}
            {...inputProps}
            {...rest}
          />
        )) as unknown as ReactNode
      }
    </InputMask>
  );
};

export default AppMarkInput;
