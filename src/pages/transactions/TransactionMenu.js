import React from "react";
import {
  Menu,
  AddButton,
  IncomeButton,
  ExpenseButton,
  StyledButton
} from "./transactionstyles";
import { getDayBoundaries, getMonthBoundaries } from "../../util/helpers";

class TransactionMenu extends React.Component {
  lastDay = () => {
    const date = new Date();
    const day = getDayBoundaries(date);
    this.props.changeTimeFilter(day[0], day[1]);
    console.log(
      `Zobrazují se transakce od ${new Date(day[0])} do ${new Date(day[1])}`
    );
  };

  lastMonth = () => {
    const date = new Date();
    const month = getMonthBoundaries(date);
    this.props.changeTimeFilter(month[0], month[1]);
    console.log(
      `Zobrazují se transakce od ${new Date(month[0])} do ${new Date(month[1])}`
    );
  };

  render() {
    return (
      <Menu>
        <h2>Moje peněženka</h2>
        <h3>Zobrazit záznamy:</h3>
        <ul>
          <li>
            <IncomeButton onClick={() => this.props.changeTypeFilter("income")}>
              Pouze příjmy
            </IncomeButton>
          </li>
          <li>
            <ExpenseButton
              onClick={() => this.props.changeTypeFilter("expense")}
            >
              Pouze výdaje
            </ExpenseButton>
          </li>
          <li>
            <StyledButton onClick={() => this.props.changeTypeFilter("all")}>
              Zobrazit vše
            </StyledButton>
          </li>
        </ul>
        <h3>Za období:</h3>
        <ul>
          <li>
            <StyledButton onClick={this.lastDay}>Dnešní den</StyledButton>
          </li>
          <li>
            <StyledButton onClick={this.lastMonth}>Poslední měsíc</StyledButton>
          </li>
          <li>
            <StyledButton onClick={() => this.props.changeTimeFilter(0, 0)}>
              Zobrazit vše
            </StyledButton>
          </li>
        </ul>
        <h3>Seřadit podle data:</h3>
        <ul>
          <li>
            <StyledButton onClick={() => this.props.sortTransactions("asc")}>
              Vzestupně
            </StyledButton>
          </li>
          <li>
            <StyledButton onClick={() => this.props.sortTransactions("desc")}>
              Sestupně
            </StyledButton>
          </li>
        </ul>
        <AddButton onClick={this.props.addTransaction}>
          Přidat novou transakci
        </AddButton>
      </Menu>
    );
  }
}

export default TransactionMenu;
