import schedule, { Job } from "node-schedule";

type Callback = () => void | Promise<void>;

interface ScheduleOptions {
  delayInSeconds?: number;
  date?: Date;
  isoString?: string;
  cron?: string;
}

export function scheduler(callback: Callback, options: ScheduleOptions): Job {
  let job: Job;

  if (options.cron) {
    job = schedule.scheduleJob(options.cron, async () => {
      try {
        await callback();
      } catch (err) {
        console.error("Error in scheduled cron callback:", err);
      }
    });
  } else {
    // Date / ISO / delay
    let dateToRun: Date;

    if (options.delayInSeconds !== undefined) {
      dateToRun = new Date(Date.now() + options.delayInSeconds * 1000);
    } else if (options.date) {
      dateToRun = options.date;
    } else if (options.isoString) {
      dateToRun = new Date(options.isoString);
    } else {
      throw new Error("No valid time option provided");
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
