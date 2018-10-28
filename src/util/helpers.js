export const formatDate = date => {
  let myDate = new Date(date);
  return `${myDate.getDate()}. ${myDate.getMonth() +
    1}. ${myDate.getFullYear()}`;
};

export const getMonthBoundaries = date => {
  let myDate = new Date(date);
  let month = myDate.getMonth();
  let year = myDate.getFullYear();
  let beginning = new Date(year, month, 1, 0, 0, 0, 0);
  if (month === 11) {
    year++;
  } else {
    month++;
  }
  let end = new Date(year, month, 1, 0, 0, 0, -1);

  return [beginning.getTime(), end.getTime()];
};

export const getDayBoundaries = date => {
  let myDate = new Date(date);
  let day = myDate.getDate();
  let month = myDate.getMonth();
  let year = myDate.getFullYear();
  let beginning = new Date(year, month, day, 0, 0, 0, 0);
  let end = new Date(year, month, day, 23, 59, 59, 999);

  return [beginning.getTime(), end.getTime()];
};
