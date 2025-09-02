import { getDateInfo } from "./dates-module/date-and-time.js";
import { formatDateRange } from "./dates-module/dates.js";
import { generateDates } from "./dates-module/intervals.js";

const start = new Date(2025, 4, 22);
const end = new Date(2027, 9, 23);
const start1 = new Date(2025, 3, 2);
const end1 = new Date(2025, 11, 4);

const date = new Date();
const date1 = new Date();

const start2 = new Date(2025, 4, 22, 2, 3, 2);
const end2 = new Date(2026, 9, 23, 2, 3, 2);
const start3 = new Date(2025, 4, 2, 2, 3, 2);
const end3 = new Date(2025, 4, 2, 2, 6, 6);

console.log(formatDateRange(start, end, "DAY_MONTH_YEAR_SLASH"));
console.log(formatDateRange(start, end, "MONTH_YEAR_SLASH"));
console.log(formatDateRange(start1, end1, "DAY_MONTH_YEAR_SLASH"));
console.log(formatDateRange(start1, end1, "MONTH_YEAR_SLASH"));

console.log(getDateInfo(date, "Asia/Jerusalem"));
console.log(getDateInfo(date1, "Asia/Jerusalem"));

console.log(generateDates(start2, end2, "year"));
console.log(generateDates(start2, end2, "week"));
console.log(generateDates(start2, end2, "month"));
console.log(generateDates(start2, end2, "halfday"));
console.log(generateDates(start3, end3, "minute"));
console.log(generateDates(start2, end2, "day"));
console.log(generateDates(start3, end3, "second"));
