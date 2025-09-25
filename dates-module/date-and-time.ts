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
  getYear,
} from "date-fns";

const isWeekend = (dateInput: Date): boolean => getDay(dateInput) >= 4;

export interface DateInfo {
  year: number;
  month: number;
  monthText: string;
  day: number;
  weekDay: string;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
  iso: string;
  weekOfYear: number;
  dayOfYear: number;
  quarter: number;
  isWeekend: boolean;
  daysInMonth: number;
  timestamp: number;
  timeZone: string;
}

export function getDateInfo(
  dateInput: string | Date,
  timeZone: string
): DateInfo {
  if (!dateInput || !timeZone) {
    throw new Error("Invalid parameters");
  }

  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

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
    timestamp: date.getTime(),
    timeZone,
  };
}
