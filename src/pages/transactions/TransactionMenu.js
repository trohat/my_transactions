import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getDayBoundaries, getMonthBoundaries } from "../../util/helpers";
import {
  Menu,
  AddButton,
  IncomeButton,
  ExpenseButton,
  StyledButton,
  SortingButton
} from "./styles/menuStyles";

const TransactionMenu = ({
  changeTypeFilter,
  changeTimeFilter,
  sortTransactions,
  addTransaction
}) => {
  const lastDay = () => {
    const date = new Date();
    const day = getDayBoundaries(date);
    changeTimeFilter(day[0], day[1]);
  };

  const lastMonth = () => {
    const date = new Date();
    const month = getMonthBoundaries(date);
    changeTimeFilter(month[0], month[1]);
  };

  return (
    <Menu>
      <h2>Moje peněženka</h2>
      <h3>Zobrazit záznamy:</h3>
      <ul>
        <li>
          <IncomeButton onClick={() => changeTypeFilter("income")}>
            Pouze příjmy
          </IncomeButton>
        </li>
        <li>
          <ExpenseButton onClick={() => changeTypeFilter("expense")}>
            Pouze výdaje
          </ExpenseButton>
        </li>
        <li>
          <StyledButton onClick={() => changeTypeFilter("all")}>
            Zobrazit vše
          </StyledButton>
        </li>
      </ul>
      <h3>Za období:</h3>
      <ul>
        <li>
          <StyledButton onClick={lastDay}>Dnešní den</StyledButton>
        </li>
        <li>
          <StyledButton onClick={lastMonth}>Poslední měsíc</StyledButton>
        </li>
        <li>
          <StyledButton onClick={() => changeTimeFilter(0, 0)}>
            Zobrazit vše
          </StyledButton>
        </li>
      </ul>
      <h3>Seřadit podle data:</h3>
      <ul>
        <li>
          <SortingButton onClick={() => sortTransactions("asc")}>
            <span>Vzestupně</span>
            <span>{"\u25B2"}</span>
          </SortingButton>
        </li>
        <li>
          <SortingButton onClick={() => sortTransactions("desc")}>
            <span>Sestupně</span>
            <span>{"\u25BC"}</span>
          </SortingButton>
        </li>
      </ul>
      <AddButton onClick={addTransaction}>Přidat novou transakci</AddButton>
      <div>
        <Link to="/">Zpět na úvodní stránku</Link>
      </div>
    </Menu>
  );
};

TransactionMenu.propTypes = {
  changeTypeFilter: PropTypes.func.isRequired,
  changeTimeFilter: PropTypes.func.isRequired,
  sortTransactions: PropTypes.func.isRequired,
  addTransaction: PropTypes.func.isRequired
};

export default TransactionMenu;
