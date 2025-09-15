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

const intervalsFunctions = {
  year: eachYearOfInterval,
  month: eachMonthOfInterval,
  week: eachWeekOfInterval,
  day: eachDayOfInterval,
  halfday: createInterval, // Custom interval implementation
  hour: eachHourOfInterval,
  minute: eachMinuteOfInterval,
  second: createInterval, // Custom interval implementation
};

function createInterval(startDate, endDate, interval) {
  const dates = [];
  let current = new Date(startDate);
  let end = new Date(endDate);
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

export function generateDates(startDate, endDate, interval = "day") {
  if (!intervals[interval]) {
    throw new Error("Invalid interval");
  }
  if (interval === intervals.halfday || interval === intervals.second) {
    return createInterval(startDate, endDate, interval); // Manual implementation
  }
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dates = intervalsFunctions[interval]({ start, end });
  return dates;
}
