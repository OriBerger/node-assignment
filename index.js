import { getDateInfo } from './dates-module/date-and-time.js';
import { formatDateRange } from './dates-module/dates.js';

const start = new Date(2025, 4, 22);
const end = new Date(2025, 9, 23);

const start1 = new Date(2025, 1, 2);
const end1 = new Date(2025, 12, 1);

const specificDate = new Date();
const specificDate1 = new Date();

console.log(formatDateRange(start, end, "DD/MM/YY"));
console.log(formatDateRange(start, end, "MM/YYYY"));

console.log(formatDateRange(start1, end1, "DD/MM/YY"));
console.log(formatDateRange(start1, end1, "MM/YYYY"));

console.log(getDateInfo(specificDate, "Asia/Jerusalem"));
console.log(getDateInfo(specificDate1, "Asia/Jerusalem"));