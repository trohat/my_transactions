export const formatDate = date => {
  const myDate = new Date(date);
  return `${myDate.getDate()}. ${myDate.getMonth() +
    1}. ${myDate.getFullYear()}`;
};

export const getDayBoundaries = date => {
  const myDate = new Date(date);
  const day = myDate.getDate();
  const month = myDate.getMonth();
  const year = myDate.getFullYear();
  const beginning = new Date(year, month, day, 0, 0, 0, 0);
  const end = new Date(year, month, day, 23, 59, 59, 999);

  return [beginning.getTime(), end.getTime()];
};

export const getMonthBoundaries = date => {
  const myDate = new Date(date);
  const day = myDate.getDate();
  const month = myDate.getMonth();
  const year = myDate.getFullYear();
  const beginning = new Date(year, month - 1, day, 0, 0, 0, 0);
  const end = new Date(year, month, day, 23, 59, 59, 999);

  return [beginning.getTime(), end.getTime()];
};

export const daysInMonth = (month, year) =>
  32 - new Date(year, month, 32).getDate();
