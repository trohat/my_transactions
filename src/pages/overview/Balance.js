import React from "react";
import PropTypes from "prop-types";
import { formatDate, getDayBoundaries } from "../../util/helpers";
import { dateShape } from "../../util/constants";
import {
  WrapperDiv,
  UnstyledUl,
  IncomeSpan,
  ExpenseSpan,
  StyledSpan
} from "./styles/balanceStyles";

const Balance = ({ transactions, from, to }) => {
  const makeDate = object =>
    new Date(object.year, object.month, object.day).getTime();

  const date1 = makeDate(from);
  const date2 = getDayBoundaries(makeDate(to))[1];

  let incomes = 0;
  let expenses = 0;

  transactions.forEach(transaction => {
    if (date1 < transaction.created && date2 > transaction.created) {
      if (transaction.type === "income") {
        incomes += +transaction.value;
      } else {
        expenses += +transaction.value;
      }
    }
  });

  return (
    <WrapperDiv>
      <p>
        Celková bilance od {formatDate(date1)} do {formatDate(date2)} včetně:
      </p>
      {date2 >= date1 ? (
        <UnstyledUl>
          <li>
            Příjmy: <IncomeSpan> {incomes} Kč </IncomeSpan>
          </li>
          <li>
            Výdaje: <ExpenseSpan> {expenses} Kč </ExpenseSpan>
          </li>
          <li>
            Celkem: <StyledSpan> {incomes - expenses} Kč </StyledSpan>
          </li>
        </UnstyledUl>
      ) : (
        <p>
          To nedává smysl. <br />
          Druhé datum by mělo být pozdější než to první (nebo mohou být stejná).
        </p>
      )}
    </WrapperDiv>
  );
};

Balance.propTypes = {
  transactions: PropTypes.array.isRequired,
  from: PropTypes.shape(dateShape).isRequired,
  to: PropTypes.shape(dateShape).isRequired
};

export default Balance;
