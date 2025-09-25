import { getDateInfo } from "./dates-module/date-and-time.ts";
import { formatDateRange } from "./dates-module/dates.ts";
import type { IntervalType } from "./dates-module/intervals.ts";
import { generateDates } from "./dates-module/intervals.ts";

const start: Date = new Date(2025, 4, 22);
const end: Date = new Date(2027, 9, 23);
const start1: Date = new Date(2025, 3, 2);
const end1: Date = new Date(2025, 11, 4);

const date: Date = new Date();
const date1: Date = new Date();

const start2: Date = new Date(2025, 4, 22, 2, 3, 2);
const end2: Date = new Date(2026, 9, 23, 2, 3, 2);
const start3: Date = new Date(2025, 4, 2, 2, 3, 2);
const end3: Date = new Date(2025, 4, 2, 2, 6, 6);

console.log(formatDateRange(start, end, "DAY_MONTH_YEAR_SLASH"));
console.log(formatDateRange(start, end, "MONTH_YEAR_SLASH"));
console.log(formatDateRange(start1, end1, "DAY_MONTH_YEAR_SLASH"));
console.log(formatDateRange(start1, end1, "MONTH_YEAR_SLASH"));

console.log(getDateInfo(date, "Asia/Jerusalem"));
console.log(getDateInfo(date1, "Asia/Jerusalem"));

console.log(generateDates(start2, end2, "year" as IntervalType));
console.log(generateDates(start2, end2, "week" as IntervalType));
console.log(generateDates(start2, end2, "month" as IntervalType));
console.log(generateDates(start2, end2, "halfday" as IntervalType));
console.log(generateDates(start3, end3, "minute" as IntervalType));
console.log(generateDates(start2, end2, "day" as IntervalType));
console.log(generateDates(start3, end3, "second" as IntervalType));
