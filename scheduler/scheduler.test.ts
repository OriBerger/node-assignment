import { formatISO } from "date-fns";
import { describe, expect, it } from "vitest";
import { generateDates } from "../dates-module/intervals";
import { scheduler } from "./scheduler";

describe("scheduler", () => {
  const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  it("runs callback after delay (seconds)", async () => {
    let done = false;
    scheduler(
      () => {
        done = true;
      },
      { delayInSeconds: 2 }
    );

    await wait(2500);
    expect(done).toBe(true);
  });

  it("runs callback at specific Date", async () => {
    let done = false;
    const targetDate = new Date(Date.now() + 2000);
    scheduler(
      () => {
        done = true;
      },
      { date: targetDate }
    );

    await wait(2500);
    expect(done).toBe(true);
  });

  it("runs callback from ISO date string", async () => {
    let done = false;
    const isoDate = formatISO(new Date(Date.now() + 2000));

    scheduler(
      () => {
        done = true;
      },
      { isoString: isoDate }
    );

    await wait(2500);
    expect(done).toBe(true);
  });

  it("runs callback using CRON syntax", async () => {
    let count = 0;
    const job = scheduler(
      () => {
        count++;
      },
      { cron: "*/1 * * * * *" }
    ); // every second

    await wait(3100);
    job.cancel();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  it("schedules using generated dates", async () => {
    let done = false;
    const start = new Date();
    const end = new Date(start.getTime() + 6000);

    const dates = generateDates(start, end, "second");
    expect(dates.length).toBeGreaterThan(1);

    scheduler(
      () => {
        done = true;
      },
      { date: dates[1] }
    ); // schedule at second timestamp

    await wait(2500);
    expect(done).toBe(true);
  });
});
