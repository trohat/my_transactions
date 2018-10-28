import React from "react";
import OverviewMenu from "./OverviewMenu";
import OverviewTable from "./OverviewTable";
import { OverviewDisplay } from "./overviewstyles";
import axios from "../../util/axios";

class OverviewPage extends React.Component {
  state = {
    transactions: [],
    filter: {
      type: "all",
      from: 0,
      to: 0
    }
  };

  componentDidMount() {
    axios.get("/transactions").then(response => {
      this.setState({ transactions: response.data });
    });
  }

  deleteTransaction = id => {
    let transactions = this.state.transactions.filter(
      transaction => transaction.id !== id
    );
    this.setState({ transactions });
    axios.delete(`/transactions/${id}`).then(response => {
      console.log(response);
    });
  };

  render() {
    return (
      <OverviewDisplay>
        <OverviewMenu />
        <OverviewTable
          transactions={this.state.transactions}
          filter={this.state.filter}
          deleteTransaction={this.deleteTransaction}
        />
      </OverviewDisplay>
    );
  }
}

export default OverviewPage;
