import {
  eachDayOfInterval,
  eachHourOfInterval,
  eachMinuteOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  eachYearOfInterval,
  isBefore,
} from "date-fns";

export const intervals = {
  year: "year",
  month: "month",
  week: "week",
  day: "day",
  halfday: "halfday",
  hour: "hour",
  minute: "minute",
  second: "second",
};

export type IntervalType = keyof typeof intervals;

const intervalsFunctions = {
  year: (start: Date, end: Date) => eachYearOfInterval({ start, end }),
  month: (start: Date, end: Date) => eachMonthOfInterval({ start, end }),
  week: (start: Date, end: Date) => eachWeekOfInterval({ start, end }),
  day: (start: Date, end: Date) => eachDayOfInterval({ start, end }),
  halfday: (start: Date, end: Date) => createInterval(start, end, "halfday"),
  hour: (start: Date, end: Date) => eachHourOfInterval({ start, end }),
  minute: (start: Date, end: Date) => eachMinuteOfInterval({ start, end }),
  second: (start: Date, end: Date) => createInterval(start, end, "second"),
};

function createInterval(
  startDate: Date | string,
  endDate: Date | string,
  interval: IntervalType
): Date[] {
  const dates: Date[] = [];
  let current = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;
  while (isBefore(current, end)) {
    dates.push(new Date(current));
    if (interval === intervals.halfday) {
      current.setHours(current.getHours() + 12); // Halfday
    } else {
      current.setSeconds(current.getSeconds() + 1); // Second
    }
  }
  return dates;
}

export function generateDates(
  startDate: Date | string,
  endDate: Date | string,
  interval: IntervalType = "day"
): Date[] {
  if (!intervals[interval]) {
    throw new Error("Invalid interval");
  }
  if (interval === intervals.halfday || interval === intervals.second) {
    return createInterval(startDate, endDate, interval); // Manual implementation
  }
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;
  return intervalsFunctions[interval](start, end);
}
