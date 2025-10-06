import { Input } from "antd";
import { ChangeEvent, KeyboardEvent } from "react";
import AppIcon from "../Icons";

interface IProps {
  placeholder?: string;
  height?: number;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch: (value: string) => void;
}

const AppSearch = (props: IProps) => {
  const { value, placeholder = "", className = "", onChange, onSearch } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value);
    }
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(value ?? "");
    }
  };

  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      className={`search-input-container h-[36px] ${className}`}
      suffix={
        <AppIcon
          size={20}
          name="SearchOutline"
          className="cursor-pointer"
          onClick={() => onSearch(value ?? "")}
        />
      }
    />
  );
};

export default AppSearch;
