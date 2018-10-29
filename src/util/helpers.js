export const formatDate = date => {
  const myDate = new Date(date);
  return `${myDate.getDate()}. ${myDate.getMonth() +
    1}. ${myDate.getFullYear()}`;
};

export const getMonthBoundaries = date => {
  const myDate = new Date(date);
  let month = myDate.getMonth();
  let year = myDate.getFullYear();
  const beginning = new Date(year, month, 1, 0, 0, 0, 0);
  if (month === 11) {
    year++;
    month = 0;
  } else {
    month++;
  }
  const end = new Date(year, month, 1, 0, 0, 0, -1);

  return [beginning.getTime(), end.getTime()];
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
