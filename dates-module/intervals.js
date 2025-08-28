export const generateDates = (startDate, endDate, interval) => {
  const result = [];
  const current = new Date(startDate);
  const intervals = [
    "year",
    "month",
    "week",
    "day",
    "halfday",
    "hour",
    "minute",
    "second",
  ];

  if (!intervals.includes(interval)) {
    throw new Error("Invalid interval");
  }

  while (current <= endDate) {
    result.push(new Date(current));

    switch (interval) {
      case "year":
        current.setFullYear(current.getFullYear() + 1);
        break;
      case "month":
        current.setMonth(current.getMonth() + 1);
        break;
      case "week":
        current.setDate(current.getDate() + 7);
        break;
      case "day":
        current.setDate(current.getDate() + 1);
        break;
      case "halfday":
        current.setHours(current.getHours() + 12);
        break;
      case "hour":
        current.setHours(current.getHours() + 1);
        break;
      case "minute":
        current.setMinutes(current.getMinutes() + 1);
        break;
      case "second":
        current.setSeconds(current.getSeconds() + 1);
        break;
      default:
        current.setDate(current.getDate() + 1); // One day as default
    }
  }
  return result;
};
