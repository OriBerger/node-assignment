import { describe, expect, it } from "vitest";
import { getDateInfo } from "../dates-module/date-and-time.js";
import { formatDateRange } from "../dates-module/dates.js";
import { generateDates } from "../dates-module/intervals.js";

describe("formatDateRange", () => {
  const start = new Date(2025, 4, 22);
  const end = new Date(2027, 9, 23);
  const start1 = new Date(2025, 11, 10);
  const end1 = new Date(2025, 0, 5);

  it("format date range DD/MM/YY", () => {
    expect(formatDateRange(start, end, "DD/MM/YY")).toBe("22/05/25 - 23/10/27");
  });

  it("format date range MM/YYYY", () => {
    expect(formatDateRange(start, end, "MM/YYYY")).toBe("05/2025 - 10/2027");
  });

  it("throw error for invalid format", () => {
    expect(() => formatDateRange(start, end, "MM/YY")).toThrow(
      "Invalid format"
    );
  });

  it("throw error if startDate is after endDate", () => {
    expect(() => formatDateRange(start1, end1, "DD/MM/YY")).toThrow(
      "Invalid date range"
    );
  });
});

describe("getDateInfo", () => {
  const invalidInput = "2025-08-28";
  const date = new Date(2025, 4, 22, 14, 30, 45);
  const saturday = new Date(2025, 7, 2);
  const friday = new Date(2025, 6, 25);
  const date1 = new Date(2025, 0, 15);

  it("return info for a date and time", () => {
    const info = getDateInfo(date, "Asia/Jerusalem");
    expect(info.month).toBe(5);
    expect(info.hour).toBe(14);
    expect(info.second).toBe(45);
    expect(typeof info.weekDay).toBe("string");
    expect(info.timeZone).toBe("Asia/Jerusalem");
  });

  it("detect weekend correctly", () => {
    expect(getDateInfo(saturday, "Asia/Jerusalem").isWeekend).toBe(true);
    expect(getDateInfo(friday, "Asia/Jerusalem").isWeekend).toBe(true);
  });

  it("calculate weekOfYear, dayOfYear, quarter, and daysInMonth correctly", () => {
    const info = getDateInfo(date1, "Asia/Jerusalem");
    expect(info.weekOfYear).toBe(3);
    expect(info.dayOfYear).toBe(15);
    expect(info.quarter).toBe(1);
    expect(info.daysInMonth).toBe(31);
  });

  it("throw error if dateInput is not a Date object", () => {
    expect(() => getDateInfo(invalidInput, "Asia/Jerusalem")).toThrow(
      "Invalid date input"
    );
  });
});

describe("generateDates", () => {
  const start = new Date(2025, 4, 22, 2, 3, 2);
  const end = new Date(2027, 9, 23, 2, 3, 2);
  const start1 = new Date(2025, 4, 22, 2, 3, 2);
  const end1 = new Date(2025, 4, 29, 2, 3, 2);
  const start2 = new Date();
  const end2 = new Date();

  it("generate year intervals", () => {
    const dates = generateDates(start, end, "year");
    expect(dates.length).toBe(3);
    expect(dates[0].getFullYear()).toBe(2025);
    expect(dates[1].getFullYear()).toBe(2026);
    expect(dates[2].getFullYear()).toBe(2027);
  });

  it("generate week intervals", () => {
    const dates = generateDates(start1, end1, "week");
    expect(dates.length).toBe(2);
    expect(dates[0].getDate()).toBe(22);
    expect(dates[1].getDate()).toBe(29);
  });

  it("throw error for invalid interval", () => {
    expect(() => generateDates(start2, end2, "millisecond")).toThrow(
      "Invalid interval"
    );
  });
});
