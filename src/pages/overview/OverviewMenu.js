import React from "react";
import {
  Menu,
  AddButton,
  IncomeButton,
  ExpenseButton,
  AllButton
} from "./overviewstyles";
import { getDayBoundaries, getMonthBoundaries } from "../../util/helpers";

class OverviewMenu extends React.Component {
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
            <AllButton onClick={() => this.props.changeTypeFilter("all")}>
              Zobrazit vše
            </AllButton>
          </li>
        </ul>
        <h3>Za období:</h3>
        <ul>
          <li>
            <AllButton onClick={this.lastDay}>Dnešní den</AllButton>
          </li>
          <li>
            <AllButton onClick={this.lastMonth}>Poslední měsíc</AllButton>
          </li>
          <li>
            <AllButton onClick={() => this.props.changeTimeFilter(0, 0)}>
              Zobrazit vše
            </AllButton>
          </li>
        </ul>
        <AddButton>Přidat novou transakci</AddButton>
      </Menu>
    );
  }
}

export default OverviewMenu;
