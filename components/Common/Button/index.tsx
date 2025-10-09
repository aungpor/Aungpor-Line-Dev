import { Button, ButtonProps } from "antd";
import { CSSProperties } from "react";
import SpinDotLoading from "../Loading/SpinDotLoading";

interface IProps extends Omit<ButtonProps, "type" | "color" | "variant"> {
  title: string;
  className?: string;
  textClassName?: string;
  textColor?: string; // will be renamed to textColorProp in destructuring to avoid collisions
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
    textColor: textColorProp = "#FFFFFF",
    backgroundColor = "#00B751",
    type = "primary",
    variant = "fill",
    isLoading,
    disabled,
    ...rest
  } = props;

  /** 🎨 Fill button styles */
  const getFillButtonStyles = () => {
    switch (type) {
      case "primary":
        return `!bg-[#00B751] hover:!bg-[#6ADE93] active:!bg-[#006B37] focus:!bg-[#00B751] !border-[#00B751] hover:!border-[#00B751]`;
      case "secondary":
        return `!bg-[#F2F2F2] hover:!bg-[#D9D9D9] active:!bg-[#8C8C8C] focus:!bg-[#F2F2F2] !border-[#F2F2F2] hover:!border-[#F2F2F2]`;
      case "tertiary":
        return `!bg-[#FA6315] hover:!bg-[#FFDAB8] active:!bg-[#872200] focus:!bg-[#FA6315] !border-[#FA6315] hover:!border-[#FA6315]`;
      case "danger":
        return `!bg-[#FF4D4F] hover:!bg-[#FF7875] active:!bg-[#D9363E] focus:!bg-[#FF4D4F] !border-[#FF4D4F] hover:!border-[#FF4D4F]`;
      default:
        return `!bg-[#00B751] hover:!bg-[#6ADE93]`;
    }
  };

  /** 🎨 Outline button styles */
  const getOutlineButtonStyles = (outline: string) =>
    `!shadow-none !bg-white hover:!bg-[#F2F2F2] active:!bg-white 
     !border-solid !border-[${outline}] hover:!border-[${outline}] focus:!border-[${outline}]`;

  /** 🎨 Text button styles */
  const getTextButtonStyles = () =>
    `!shadow-none !bg-white hover:!bg-[#F2F2F2] active:!bg-white`;

  /** 🎨 Disabled styles */
  const getDisabledStyles = () => {
    const base = type === "secondary" ? "#F2F2F2" : "#D9D9D9";
    switch (variant) {
      case "fill":
        return `disabled:!bg-[${base}] disabled:hover:!bg-[${base}] disabled:!border-none`;
      case "outline":
        return `disabled:!bg-white disabled:hover:!bg-white disabled:!border-[#D9D9D9] disabled:!border-solid`;
      case "text":
        return `disabled:!bg-white disabled:hover:!bg-white`;
    }
  };

  /** 🎨 Combine style sets */
  const getContainerStyles = (outline: string) => {
    if (disabled) return getDisabledStyles();

    switch (variant) {
      case "fill":
        return getFillButtonStyles();
      case "outline":
        return getOutlineButtonStyles(outline);
      case "text":
        return getTextButtonStyles();
      default:
        return "";
    }
  };

  const outlineColor =
    type === "primary"
      ? "#00B751"
      : type === "secondary"
        ? "#D9D9D9"
        : type === "tertiary"
          ? "#FA6315"
          : "#FF4D4F";

  const containerStyles = getContainerStyles(outlineColor);

  /** 🖋 Text color logic */
  const getTextColor = (
    fill: string,
    fillDisable: string,
    outline: string,
    outlineDisable: string
  ) => {
    if (disabled) {
      return variant === "fill" ? fillDisable : outlineDisable;
    }
    return variant === "fill" ? fill : outline;
  };

  const textColor = (() => {
    switch (type) {
      case "primary":
        return getTextColor("#FFFFFF", "#8C8C8C", "#00B751", "#D9D9D9");
      case "secondary":
        return getTextColor("#303030", "#C7C7C7", "#303030", "#D9D9D9");
      case "tertiary":
        return getTextColor("#FFFFFF", "#8C8C8C", "#FA6315", "#D9D9D9");
      case "danger":
        return getTextColor("#FFFFFF", "#8C8C8C", "#FF4D4F", "#D9D9D9");
      default:
        return "#FFFFFF";
    }
  })();

  return (
    <Button
      disabled={disabled || isLoading}
      className={`button-container !rounded-[8px] !h-[40px] !w-full ${containerStyles} ${className}`}
      style={style}
      {...rest}
    >
      <div style={{ color: textColor }} className={`button-text ${textClassName}`}>
        <div className="flex flex-row items-center justify-center gap-[8px]">
          {isLoading && <SpinDotLoading active={isLoading} className="!h-[20px]" />}
          {title}
        </div>
      </div>
    </Button>
  );
};

export default AppButton;
