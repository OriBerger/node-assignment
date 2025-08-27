export const formatDateRange = (startDate, endDate, format) => {
  if (startDate > endDate) throw new Error("Invalid date range");

  const pad = (n) => (n < 10 ? "0" + n : n);

  const formats = {
    "DD/MM/YY": () => {
      return (
        pad(startDate.getDate()) +
        "/" +
        pad(startDate.getMonth() + 1) +
        "/" +
        String(startDate.getFullYear()).slice(-2) +
        " - " +
        pad(endDate.getDate()) +
        "/" +
        pad(endDate.getMonth() + 1) +
        "/" +
        String(endDate.getFullYear()).slice(-2)
      );
    },
    "MM/YYYY": () => {
      return (
        pad(startDate.getMonth() + 1) +
        "/" +
        startDate.getFullYear() +
        " - " +
        pad(endDate.getMonth() + 1) +
        "/" +
        endDate.getFullYear()
      );
    },
  };

  if (!formats[format]) throw new Error("Invalid format");

  return formats[format]();
};
