import {
  eachDayOfInterval,
  eachHourOfInterval,
  eachMinuteOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  eachYearOfInterval,
  isBefore,
} from "date-fns";

const intervals = {
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
    if (interval === "halfday") {
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
  if (interval === "halfday" || interval === "second") {
    return createInterval(startDate, endDate, interval); // Manual implementation
  }
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dates = intervals[interval]({ start, end });
  return dates;
}
