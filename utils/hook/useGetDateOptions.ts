import { THAI_MONTHS_OPTIONS } from "constants/dateTime";
import dayjs from "dayjs";
import { IOption } from "interface/common.interface";
import { useEffect, useState } from "react";
import "./styles.scss";

export const useGetDateOptions = (
  selectedMonth: string,
  selectedYear: string,
) => {
  const currThaiYear = dayjs().year() + 543;
  const [dayOptions, setDayOptions] = useState<IOption[]>([]);

  useEffect(() => {
    const maximumDay = getMaxDayInMonth();
    setDayOptions(getDayOptions(maximumDay));
  }, [selectedMonth, selectedYear]);

  const getIsLeapYear = () => {
    const gregorianYear = Number(selectedYear) - 543;
    return (
      (gregorianYear % 4 === 0 && gregorianYear % 100 !== 0) ||
      gregorianYear % 400 === 0
    );
  };

  const getMaxDayInMonth = () => {
    const month = Number(selectedMonth);
    const year = Number(selectedYear);
    if (!month) return 31;
    if (!year) return 31;

    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
      return 31;
    }
    if (month === 2) {
      return getIsLeapYear() ? 29 : 28;
    }
    return 30;
  };

  const getDayOptions = (maximumDay: number) => {
    return Array.from(
      { length: maximumDay },
      (_, i): IOption => ({
        value: `${i + 1}`,
        label: (i + 1).toString().padStart(2, "0"),
      }),
    );
  };

  const getThaiYearOptions = () => {
    return Array.from(
      { length: 100 },
      (_, i): IOption => ({
        value: `${currThaiYear - i}`,
        label: `${currThaiYear - i}`,
      }),
    );
  };

  return {
    dayOptions: dayOptions,
    monthOptions: THAI_MONTHS_OPTIONS,
    yearOptions: getThaiYearOptions(),
  };
};
