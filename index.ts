import { getDateInfo } from "./dates-module/date-and-time.ts";
import { formatDateRange, FORMATS } from "./dates-module/dates.ts";
import { generateDates, INTERVALS } from "./dates-module/intervals.ts";
import { Queue } from "./generic-queue/generic-queue.ts";
import { scheduler } from "./scheduler/scheduler.ts";

const timezone = "Asia/Jerusalem";

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

console.log(formatDateRange(start, end, FORMATS.DAY_MONTH_YEAR_SLASH));
console.log(formatDateRange(start, end, FORMATS.MONTH_YEAR_SLASH));
console.log(formatDateRange(start1, end1, FORMATS.DAY_MONTH_YEAR_SLASH));
console.log(formatDateRange(start1, end1, FORMATS.MONTH_YEAR_SLASH));

console.log(getDateInfo(date, timezone));
console.log(getDateInfo(date1, timezone));

console.log(generateDates(start2, end2, INTERVALS.year));
console.log(generateDates(start2, end2, INTERVALS.week));
console.log(generateDates(start2, end2, INTERVALS.month));
console.log(generateDates(start2, end2, INTERVALS.halfday));
console.log(generateDates(start3, end3, INTERVALS.minute));
console.log(generateDates(start2, end2, INTERVALS.day));
console.log(generateDates(start3, end3, INTERVALS.second));

scheduler(
  () => {
    console.log(
      "3 seconds: Format date range DD/MM/YYYY:",
      formatDateRange(start, end, FORMATS.DAY_MONTH_YEAR_SLASH)
    );
  },
  { delayInSeconds: 3 }
);

scheduler(
  () => {
    console.log(
      "3 seconds: Format date range MM/YYYY:",
      formatDateRange(start, end, FORMATS.MONTH_YEAR_SLASH)
    );
  },
  { delayInSeconds: 3 }
);

const runAtDate = new Date(Date.now() + 5000); // 5 seconds from now
scheduler(
  () => {
    console.log(
      "5 seconds: getDateInfo now:",
      getDateInfo(date, timezone)
    );
  },
  { date: runAtDate }
);

const isoDate = new Date(Date.now() + 7000).toISOString();
scheduler(
  () => {
    console.log(
      "7 seconds: getDateInfo with ISO date:",
      getDateInfo(date1, timezone)
    );
  },
  { isoString: isoDate }
);

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
console.log(numberQueue.dequeue());
console.log(numberQueue.peek());
console.log(numberQueue.dequeue());
console.log(numberQueue.isEmpty());
console.log(numberQueue.dequeue()); // should return undefined
console.log(numberQueue.toArray());

console.log("///////////////");

const stringQueue = new Queue<string>();
stringQueue.enqueue("a");
stringQueue.enqueue("b");
console.log(stringQueue.dequeue());
console.log(stringQueue.peek());
console.log(stringQueue.size());
console.log(stringQueue.toArray());

console.log("///////////////");

const mixedQueue = new Queue<string | number>();
mixedQueue.enqueue(1);
mixedQueue.enqueue("hello");
console.log(mixedQueue.dequeue());
console.log(mixedQueue.peek());
console.log(mixedQueue.size());
console.log(mixedQueue.toArray());
console.log(mixedQueue.clear());
