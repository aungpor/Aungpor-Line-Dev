import { useEffect, useRef, useState } from "react";

interface IProps {
  seconds: number;
}

const useCountdown = ({ seconds }: IProps) => {
  const [countdown, setCountdown] = useState<number>(seconds);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (submitted && !timer.current) {
      timer.current = setInterval(() => {
        setCountdown((prevCountdown) => {
          const newCountdown = prevCountdown - 1;
          if (newCountdown === 0) {
            clearInterval(timer.current);
            timer.current = undefined;
            setSubmitted(false);
            return 0;
          }
          return newCountdown;
        });
      }, 1000);
    }
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = undefined;
      }
    };
  }, [submitted]);

  let countdownString = "00:00";
  if (countdown > 0) {
    countdownString =
      Math.floor(countdown / 60)
        .toString()
        .padStart(2, "0") +
      ":" +
      (countdown % 60).toString().padStart(2, "0");
  }

  const handleCountdown = () => {
    setCountdown(seconds);
    setSubmitted(true);
  };

  const convertCountDownText = (val: string) => {
    if (!val) return "00 : 00 : 00";

    val = `00 : ${val}`;

    let valText = val.replace(/:/g, " : ");

    return valText;
  };

  return {
    countdown,
    countdownString,
    handleCountdown,
    countDownText: convertCountDownText(countdownString),
  };
};

export default useCountdown;
