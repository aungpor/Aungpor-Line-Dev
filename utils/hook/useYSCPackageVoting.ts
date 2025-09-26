import { YSC_MAXIMUM_VOTE } from "constants/youngScout";
import { IYSCDetailSchema } from "interface/youngScout.interface";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  isVotingEnded: boolean;
  voteCount: number;
  setVoteCount: Dispatch<SetStateAction<number>>;
  packageData: IYSCDetailSchema;
}

export const useYSCPackageVoting = (props: IProps) => {
  const { isVotingEnded, voteCount, setVoteCount, packageData } = props;

  const onIncreaseVote = () => {
    if (voteCount >= packageData.package_stock || isVotingEnded) return;
    setVoteCount((vote) => vote + 1);
  };
  const onDecreaseVote = () => {
    if (voteCount <= 1 || isVotingEnded) return;
    setVoteCount((vote) => vote - 1);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const vote = e.target.value.replace(",", "");
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(vote) || vote === "") {
      if (Number(vote) > YSC_MAXIMUM_VOTE) {
        setVoteCount(YSC_MAXIMUM_VOTE);
        return;
      }
      setVoteCount(Number(vote));
    }
  };

  const onBlurHandler = () => {
    if (voteCount === 0) {
      setVoteCount(1);
    }
  };

  const getDisabledColor = () => {
    if (isVotingEnded) return "#C7C7C7";
    return "#767676";
  };

  const getDisabledCursor = () => {
    if (isVotingEnded) return "!cursor-no-drop";
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
