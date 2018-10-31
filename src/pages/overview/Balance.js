import React from "react";
import {
  WrapperDiv,
  UnstyledUl,
  IncomeSpan,
  ExpenseSpan,
  StyledSpan
} from "./styles/balanceStyles";
import { formatDate, getDayBoundaries } from "../../util/helpers";

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

  console.log(
    `Zobrazují se transakce od ${new Date(date1)} do ${new Date(date2)}`
  );

  return (
    <WrapperDiv>
      <div>
        {date2 >= date1
          ? `Celková bilance od ${formatDate(date1)} do ${formatDate(
              date2
            )} včetně:`
          : "Druhé datum by mělo být později než to první (nebo mohou být stejná)."}
      </div>
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
    </WrapperDiv>
  );
};

export default Balance;
