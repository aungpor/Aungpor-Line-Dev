import { Button, ButtonProps } from "antd";
import { CSSProperties } from "react";
import SpinDotLoading from "../Loading/SpinDotLoading";



interface IProps extends Omit<ButtonProps, "type"> {
  title: string;
  className?: string;
  textClassName?: string;
  color?: string;
  backgroundColor?: string;
  style?: CSSProperties;
  isLoading?: boolean;
  loadingColor?: string;
  type?: "primary" | "secondary" | "tertiary" | "danger";
  variant?: "fill" | "outline" | "text";
}

const AppButton = (props: IProps) => {
  const {
    title,
    style,
    className = "",
    textClassName = "",
    color = "#FFFFFF",
    backgroundColor = "#00B751",
    type = "primary",
    variant = "fill",
    isLoading,
    disabled,
    ...rest
  } = props;

  const getFillButtonStyles = () => {
    switch (type) {
      case "primary":
        return `bg-[#00B751] hover:bg-[#6ADE93] active:bg-[#006B37] focus:bg-[#00B751] hover:border-[#00B751] focus:border-[#00B751]`;
      case "secondary":
        return `bg-[#F2F2F2] hover:bg-[#D9D9D9] active:bg-[#8C8C8C] focus:bg-[#F2F2F2] hover:border-[#F2F2F2] focus:border-[#F2F2F2]`;
      case "tertiary":
        return `bg-[#FA6315] hover:bg-[#FFDAB8] active:bg-[#872200] focus:bg-[#FA6315] hover:border-[#FA6315] focus:border-[#FA6315]`;
    }
  };

  const getEnabledStyles = (outline: string) => {
    switch (variant) {
      case "fill":
        return getFillButtonStyles();
      case "outline":
        return `shadow-none bg-[#FFFFFF] hover:bg-[#F2F2F2] active:bg-[#FFFFFF] !border-solid !border-[${outline}] hover:border-[${outline}] focus:border-[${outline}]`;
      case "text":
        return "shadow-none bg-[#FFFFFF] hover:bg-[#F2F2F2] active:bg-[#FFFFFF]";
    }
  };

  const getDisabledStyles = () => {
    const color = type === "secondary" ? "#F2F2F2" : "#D9D9D9";
    switch (variant) {
      case "fill":
        return `disabled:bg-[${color}] disabled:hover:!bg-[${color}]`;
      case "outline":
        return "disabled:bg-[#FFF] disabled:hover:!bg-[#FFF] disabled:border disabled:border-solid disabled:border-[#D9D9D9]";
      case "text":
        return "disabled:bg-[#FFF] disabled:hover:!bg-[#FFF]";
    }
  };

  const getContainerStyles = (outline: string) => {
    const enabledStyles = getEnabledStyles(outline);

    const disabledStyles = getDisabledStyles();
    if (disabled) {
      return disabledStyles;
    }

    return enabledStyles;
  };

  const containerStyles = (() => {
    switch (type) {
      case "primary":
        return getContainerStyles("#00B751");
      case "secondary":
        return getContainerStyles("#D9D9D9");
      case "tertiary":
        return getContainerStyles("#FA6315");
      default:
        return "bg-[#00B751]";
    }
  })();

  const getTextColor = (
    fill: string,
    fillDisable: string,
    outline: string,
    outlineDisable: string,
  ) => {
    if (disabled) {
      return variant === "fill" ? fillDisable : outlineDisable;
    } else {
      return variant === "fill" ? fill : outline;
    }
  };

  const textColor = (() => {
    switch (type) {
      case "primary":
        return getTextColor("#FFFFFF", "#8C8C8C", "#00B751", "#D9D9D9");
      case "secondary":
        return getTextColor("#303030", "#C7C7C7", "#303030", "#D9D9D9");
      case "tertiary":
        return getTextColor("#FFFFFF", "#8C8C8C", "#FA6315", "#D9D9D9");
      default:
        return "#FFFFFF";
    }
  })();

  return (
    <Button
      disabled={disabled || isLoading}
      className={`button-container ${containerStyles} ${className}`}
      style={{ borderRadius: 8, ...style }}
      {...rest}
    >
      <div
        style={{ color: textColor }}
        className={`button-text ${textClassName}`}
      >
        <div className="flex flex-row items-center justify-center gap-[8px]">
          {isLoading && (
            <SpinDotLoading active={isLoading} className={"!h-[20px]"} />
          )}
          {title}
        </div>
      </div>
    </Button>
  );
};

export default AppButton;
