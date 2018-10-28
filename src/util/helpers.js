export const formatDate = function(date) {
  let myDate = new Date(date);
  return `${myDate.getDate()}. ${myDate.getMonth() +
    1}. ${myDate.getFullYear()}`;
};
