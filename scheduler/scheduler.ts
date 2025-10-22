import { addSeconds, isBefore, parseISO } from "date-fns";
import schedule, { Job } from "node-schedule";

type Callback = () => void | Promise<void>;

interface ScheduleOptions {
  delayInSeconds?: number;
  date?: Date;
  isoString?: string;
  cron?: string;
}

export function scheduler(callback: Callback, options: ScheduleOptions): Job {
  const { delayInSeconds = 0, date, isoString, cron } = options;
  let job: Job;

  if (cron) {
    job = schedule.scheduleJob(cron, async () => {
      try {
        await callback();
      } catch (err) {
        console.error("Error in scheduled cron callback:", err);
      }
    });
  } else {
    // Date / ISO / delay
    let dateToRun: Date = new Date();
    if (delayInSeconds > 0) dateToRun = addSeconds(dateToRun, delayInSeconds);
    if (date) dateToRun = date;
    if (isoString) dateToRun = parseISO(isoString);

    if (isBefore(dateToRun, new Date())) {
      throw new Error("Scheduled date is in the past");
    }
    
    job = schedule.scheduleJob(dateToRun, async () => {
      try {
        await callback();
      } catch (err) {
        console.error("Error in scheduled callback:", err);
      }
    });
  }

  return job;
}
