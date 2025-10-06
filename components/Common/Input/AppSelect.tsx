import { Select, SelectProps } from "antd";
import { IOption } from "interface/common.interface";
import { useMemo } from "react";

interface IProps extends SelectProps {
  title?: string;
  className?: string;
  classNameContainer?: string;
  layout?: "horizontal" | "vertical";
  prefixIcon?: React.ReactNode;
  popupClassName?: string;
}

const AppSelect = (props: IProps) => {
  const {
    title,
    className = "",
    classNameContainer = "",
    layout = "horizontal",
    options,
    prefixIcon,
    popupClassName = "",
    ...rest
  } = props;

  const selectOptions = useMemo(() => {
    if (!prefixIcon) return options;

    return options?.map<IOption>(({ label, value }) => ({
      label: (
        <div className="flex items-center gap-[8px] h-full">
          {prefixIcon}
          {label}
        </div>
      ),
      value: value?.toString() ?? "",
    }));
  }, [options, prefixIcon]);

  return (
    <div
      className={`select-input-container ${
        layout === "horizontal" ? "flex-row items-center" : "flex-col"
      } ${classNameContainer}`}
    >
      {title && (
        <div className="text-14 text-normal min-w-max">{`${title} :`}</div>
      )}
      <Select
        className={`${className}`}
        popupClassName={`select-input-popup-container ${popupClassName}`}
        options={selectOptions}
        {...rest}
      />
    </div>
  );
};

export default AppSelect;
