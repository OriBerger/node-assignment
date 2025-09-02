import { format, isBefore } from "date-fns";

export const FORMATS = {
  DAY_MONTH_YEAR: "dd-MM-yyyy",
  DAY_MONTH_YEAR_SLASH: "dd/MM/yyyy",
  MONTH_YEAR: "MM-yyyy",
  MONTH_YEAR_SLASH: "MM/yyyy",
  TIME: "HH:mm:ss",
  DATE_TIME: "yyyy-MM-ddTHH:mm:ss",
  DATE_TIME_WITH_MILLISECONDS: "yyyy-MM-ddTHH:mm:ss.SSS",
};

export function formatDateRange(
  startDate,
  endDate,
  style = FORMATS.DAY_MONTH_YEAR_SLASH
) {
  if (!startDate || !endDate || !FORMATS[style]) {
    throw new Error("Invalid parameters");
  }

  if (isBefore(endDate, startDate)) {
    throw new Error("Invalid date range");
  }

  const start = format(new Date(startDate), FORMATS[style]);
  const end = format(new Date(endDate), FORMATS[style]);
  return `${start} - ${end}`;
}
