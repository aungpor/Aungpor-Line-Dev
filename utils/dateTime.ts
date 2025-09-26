import dayjs, { Dayjs } from "dayjs";
import { IOption } from "interface/common.interface";

export const getDisplayDate = (datetime: Date) => {
  const now = new Date(datetime);
  let day = now.toLocaleDateString("th-TH", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return `${day}`;
};

export const countdownToNextMonth = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  let nextMonth = currentMonth + 1;
  let nextYear = currentYear;
  if (nextMonth > 11) {
    nextMonth = 0;
    nextYear++;
  }

  const targetDate: any = new Date(nextYear, nextMonth, 1);

  const countdownInterval = setInterval(() => {
    const currentTime: any = new Date();
    const remainingTime = targetDate - currentTime;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, 1000);
};

export const getDateOptionsByDateLength = (
  startDate: Dayjs,
  endDate: Dayjs,
) => {
  const dateListOptions: IOption[] = [];
  const formatStartDate = dayjs(startDate).startOf("month");
  const formatEndDate = dayjs(endDate).startOf("month");
  const diffMonth = formatEndDate.diff(formatStartDate, "month");

  let currDate = endDate.set("date", 1).clone();

  for (let index = 0; index <= diffMonth; index++) {
    const options: IOption = {
      label: currDate.format("MMMM YYYY"),
      value: currDate.format("MM/DD/YYYY"),
    };
    currDate = currDate.add(-1, "month");
    dateListOptions.push(options);
  }

  return dateListOptions;
};

export const formatDate = (date: string | Dayjs | Date) => {
  return dayjs(date).format("DD MMM YYYY");
};

export const formatCountDownText = (value: string) => {
  if (!value) return "00:00:00";

  const formattedTime = `00:${value}`;

  return formattedTime.replace(/:/g, " : ");
};

export const formatCountDownHour = (value: string) => {
  const [hour = "00", minute = "00", second = "00"] = value
    .split(":")
    .map((v) => v.trim());

  return {
    hour,
    minute,
    second,
  };
};
