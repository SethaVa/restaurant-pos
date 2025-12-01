const formatDate = (date: Date | string): string => {
  const d = new Date(date);

  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

export default formatDate;