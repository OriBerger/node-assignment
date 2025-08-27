import {
    format,
    getDayOfYear,
    getDaysInMonth,
    getISOWeek,
    getQuarter,
    isWeekend,
} from "date-fns";

export const getDateInfo = (dateInput, timeZone) => {
  return {
    year: dateInput.getFullYear(),
    month: dateInput.getMonth() + 1,
    monthText: format(dateInput, "MMMM"), // Month name
    day: dateInput.getDate(),
    weekDay: format(dateInput, "EEEE"), // Day name
    hour: dateInput.getHours(),
    minute: dateInput.getMinutes(),
    second: dateInput.getSeconds(),
    millisecond: dateInput.getMilliseconds(),
    iso: dateInput.toISOString(),
    weekOfYear: getISOWeek(dateInput),
    dayOfYear: getDayOfYear(dateInput),
    quarter: getQuarter(dateInput),
    isWeekend: isWeekend(dateInput),
    daysInMonth: getDaysInMonth(dateInput),
    timestamp: dateInput.getTime(),
    timeZone: timeZone,
  };
};
