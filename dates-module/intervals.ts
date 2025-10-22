import {
  eachDayOfInterval,
  eachHourOfInterval,
  eachMinuteOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  eachYearOfInterval,
  isBefore,
} from "date-fns";

export enum INTERVALS {
  year = "year",
  month = "month",
  week = "week",
  day = "day",
  halfday = "halfday",
  hour = "hour",
  minute = "minute",
  second = "second",
};

const intervalsFunctions: Record<INTERVALS, (start: Date, end: Date) => Date[]> = {
  [INTERVALS.year]: (start: Date, end: Date) => eachYearOfInterval({ start, end }),
  [INTERVALS.month]: (start: Date, end: Date) => eachMonthOfInterval({ start, end }),
  [INTERVALS.week]: (start: Date, end: Date) => eachWeekOfInterval({ start, end }),
  [INTERVALS.day]: (start: Date, end: Date) => eachDayOfInterval({ start, end }),
  [INTERVALS.halfday]: (start: Date, end: Date) => createInterval(start, end, INTERVALS.halfday),
  [INTERVALS.hour]: (start: Date, end: Date) => eachHourOfInterval({ start, end }),
  [INTERVALS.minute]: (start: Date, end: Date) => eachMinuteOfInterval({ start, end }),
  [INTERVALS.second]: (start: Date, end: Date) => createInterval(start, end, INTERVALS.second),
};

function createInterval(
  startDate: Date | string,
  endDate: Date | string,
  interval: INTERVALS
): Date[] {
  const dates: Date[] = [];
  let current = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;
  while (isBefore(current, end)) {
    dates.push(new Date(current));
    if (interval === INTERVALS.halfday) {
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
  interval: INTERVALS = INTERVALS.day
): Date[] {
  if (!Object.values(INTERVALS).includes(interval)) {
    throw new Error("Invalid interval");
  }
  if (interval === INTERVALS.halfday || interval === INTERVALS.second) {
    return createInterval(startDate, endDate, interval); // Manual implementation
  }
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;
  return intervalsFunctions[interval](start, end);
}
