export const getYearFromDate = (date: string) => {
  const d = new Date(date);
  return d.getFullYear();
};

export const getMonthDateYear = (date: string) => {
  const d = new Date(date);
  return d.toDateString().split(" ").slice(1).join(" ");
};
export const urlConstructor = (id: number, name: string) => {
  return id + "-" + name.replace(/\s+/g, "-").toLowerCase();
};

export const getIdFromUrl = (url: string) => {
  return url.split("-")[0];
};

