const formatDateTime = (date: Date | string): string => {
  const d = new Date(date);

  return d.toLocaleString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
};

export default formatDateTime;