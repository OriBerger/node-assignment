import {
  format,
  formatISO,
  getDate,
  getDay,
  getDayOfYear,
  getDaysInMonth,
  getHours,
  getISOWeek,
  getMilliseconds,
  getMinutes,
  getMonth,
  getQuarter,
  getSeconds,
  getTime,
  getYear,
} from "date-fns";

const isWeekend = (dateInput) => (getDay(dateInput) >= 4 ? true : false);

export function getDateInfo(dateInput, timeZone) {
  if (!dateInput || !timeZone) {
    throw new Error("Invalid parameters");
  }
  const date = new Date(dateInput);
  return {
    year: getYear(date),
    month: getMonth(date) + 1,
    monthText: format(date, "MMMM"), // Month name
    day: getDate(date),
    weekDay: format(date, "EEEE"), // Day name
    hour: getHours(date),
    minute: getMinutes(date),
    second: getSeconds(date),
    millisecond: getMilliseconds(date),
    iso: formatISO(date),
    weekOfYear: getISOWeek(date),
    dayOfYear: getDayOfYear(date),
    quarter: getQuarter(date),
    isWeekend: isWeekend(date),
    daysInMonth: getDaysInMonth(date),
    timestamp: getTime(date),
    timeZone: timeZone,
  };
}
