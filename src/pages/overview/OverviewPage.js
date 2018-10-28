import React from "react";
import Modal from "react-modal";
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
    },
    showModal: false
  };

  componentDidMount() {
    axios.get("/transactions").then(response => {
      this.setState({ transactions: response.data });
    });
  }

  editTransaction = id => {
    this.setState({ showModal: true });
  };

  deleteTransaction = id => {
    let transactions = this.state.transactions.filter(
      transaction => transaction.id !== id
    );
    this.setState({ transactions });
    axios.delete(`/transactions/${id}`).then(response => {
      console.log(response);
    });
  };

  changeTypeFilter = type => {
    const filter = this.state.filter;
    this.setState({ filter: { ...filter, type } });
  };

  changeTimeFilter = (from, to) => {
    const filter = this.state.filter;
    this.setState({ filter: { ...filter, from, to } });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <OverviewDisplay>
        <OverviewMenu
          changeTypeFilter={this.changeTypeFilter}
          changeTimeFilter={this.changeTimeFilter}
        />
        <OverviewTable
          transactions={this.state.transactions}
          filter={this.state.filter}
          editTransaction={this.editTransaction}
          deleteTransaction={this.deleteTransaction}
        />
        <Modal isOpen={this.state.showModal} ariaHideApp={false}>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </OverviewDisplay>
    );
  }
}

export default OverviewPage;
