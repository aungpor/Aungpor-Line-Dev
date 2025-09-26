import { YSC_MAXIMUM_VOTE } from "constants/youngScout";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  packageStock: number;
}

export const useMyOrderPackageUsing = (props: IProps) => {
  const { value, setValue, packageStock } = props;

  const onIncreaseVote = () => {
    if (value >= packageStock) return;
    setValue((vote) => vote + 1);
  };
  const onDecreaseVote = () => {
    if (value <= 1) return;
    setValue((vote) => vote - 1);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const vote = e.target.value.replace(",", "");
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(vote) || vote === "") {
      if (Number(vote) > YSC_MAXIMUM_VOTE) {
        setValue(YSC_MAXIMUM_VOTE);
        return;
      }
      setValue(Number(vote));
    }
  };

  const onBlurHandler = () => {
    if (value === 0) {
      setValue(1);
    }
  };

  const getDisabledColor = () => {
    if (value >= packageStock) return "#C7C7C7";
    return "#767676";
  };

  const getDisabledCursor = () => {
    if (value >= packageStock) return "!cursor-no-drop";
    return "!cursor-pointer";
  };

  return {
    onIncreaseVote,
    onDecreaseVote,
    onChangeHandler,
    onBlurHandler,
    buttonColorStyles: getDisabledColor(),
    buttonCursorStyles: getDisabledCursor(),
  };
};
