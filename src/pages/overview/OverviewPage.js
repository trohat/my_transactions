import React from "react";
import { Link } from "react-router-dom";
import axios from "../../util/axios";
import DateForm from "./DateForm";

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
    showResult: false
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
    this.setState(prevState => ({ showResult: !prevState.showResult }));
  };

  render() {
    return (
      <div>
        <h2>Zobrazit celkovou bilanci</h2>
        Od:{" "}
        <DateForm
          id="from"
          date={this.state.from}
          updateDate={this.updateDate}
        />{" "}
        do:{" "}
        <DateForm id="to" date={this.state.to} updateDate={this.updateDate} />
        <button onClick={this.showBalance}>Zobrazit!</button>
        {this.state.showResult && (
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        )}
        <div>
          <Link to="/">Zpět na úvodní stránku</Link>
        </div>
      </div>
    );
  }
}

export default OverviewPage;
