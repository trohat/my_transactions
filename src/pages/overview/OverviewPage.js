import React from "react";
import { Link } from "react-router-dom";
import axios from "../../util/axios";
import { daysInMonth } from "../../util/helpers";
import { minYear, maxYear } from "../../util/constants";
import DateForm from "./DateForm";
import Balance from "./Balance";
import InvalidDate from "./InvalidDate";
import ErrorBoundary from "../ErrorBoundary";
import { StyledButton } from "./styles/pageStyles";

class OverviewPage extends React.Component {
  state = {
    transactions: [],
    from: {
      day: 1,
      month: 0,
      year: 2018
    },
    to: {
      day: 1,
      month: 0,
      year: 2018
    },
    result: {
      show: false,
      start: {},
      end: {}
    }
  };

  componentDidMount() {
    axios.get("/transactions").then(response => {
      this.setState({ transactions: response.data });
    });
  }

  updateDate = (id, date) => {
    this.setState({ [id]: date });
  };

  showBalance = () => {
    this.setState(prevState => ({
      result: {
        show: true,
        start: { ...prevState.from },
        end: { ...prevState.to }
      }
    }));
  };

  testDateValidity = ({ day, month, year }) => {
    return (
      year >= minYear &&
      year <= maxYear &&
      day > 0 &&
      day <= daysInMonth(month, year)
    );
  };

  testBothDateValidity = () => {
    return (
      this.testDateValidity(this.state.result.start) &&
      this.testDateValidity(this.state.result.end)
    );
  };

  render() {
    return (
      <ErrorBoundary>
        <h2>Zobrazit celkovou bilanci</h2>
        Od
        <DateForm
          id="from"
          date={this.state.from}
          updateDate={this.updateDate}
        />
        do
        <DateForm id="to" date={this.state.to} updateDate={this.updateDate} />
        <div>
          <StyledButton onClick={this.showBalance}>Zobrazit!</StyledButton>
        </div>
        {this.state.result.show &&
          (this.testBothDateValidity() ? (
            <Balance
              transactions={this.state.transactions}
              from={this.state.result.start}
              to={this.state.result.end}
            />
          ) : (
            <InvalidDate />
          ))}
        <div>
          <Link to="/">Zpět na úvodní stránku</Link>
        </div>
      </ErrorBoundary>
    );
  }
}

export default OverviewPage;
