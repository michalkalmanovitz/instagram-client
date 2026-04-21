
export const parseDate = (date: Date) => {
  const newDate = new Date(date);
  return newDate.toISOString().split("T")[0];
};