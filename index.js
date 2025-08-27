import { formatDateRange } from './dates-module/dates.js';

const start = new Date(2025, 4, 22);
const end = new Date(2025, 9, 23);

const start1 = new Date(2025, 1, 2);
const end1 = new Date(2025, 12, 1);


const start2 = new Date(2025, 3, 10);
const end2 = new Date(2025, 4, 9);

console.log(formatDateRange(start, end, "DD/MM/YY"));
console.log(formatDateRange(start, end, "MM/YYYY"));

console.log(formatDateRange(start1, end1, "DD/MM/YY"));
console.log(formatDateRange(start1, end1, "MM/YYYY"));

console.log(formatDateRange(start2, end2, "DD/MM/YY"));
console.log(formatDateRange(start2, end2, "MM/YYYY"));