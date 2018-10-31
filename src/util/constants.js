import PropTypes from "prop-types";

export const plusColor = "green";
export const minusColor = "red";
export const stripsColor = "gainsboro";

export const minYear = 1970;
export const maxYear = 2030;

export const notebookHeight = "750px";

export const dateShape = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
};
export const transactionShape = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  created: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};
