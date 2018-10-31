import React from "react";
import Modal from "react-modal";
import axios from "../../util/axios";
import TransactionMenu from "./TransactionMenu";
import TransactionTable from "./TransactionTable";
import AddTransactionForm from "./AddTransactionForm";
import ErrorBoundary from "../ErrorBoundary";
import { TransactionDisplay, modalStyles } from "./styles/pageStyles";

class TransactionPage extends React.Component {
  state = {
    transactions: [],
    dataLoaded: false,
    filter: {
      type: "all",
      from: 0,
      to: 0
    },
    newTransaction: {
      name: "",
      type: "expense",
      value: 0,
      id: 0,
      created: 0
    },
    adding: true,
    // "adding:false" means we are just editing an existing transaction
    sorted: null,
    showModal: false
  };

  componentDidMount() {
    axios.get("/transactions").then(response => {
      this.setState({ transactions: response.data, dataLoaded: true });
    });
  }

  addTransaction = () => {
    this.setState({
      newTransaction: {
        name: "",
        type: "expense",
        value: 0
      },
      adding: true,
      showModal: true
    });
  };

  editTransaction = id => {
    const myTransaction = this.state.transactions.filter(
      transaction => transaction.id === id
    )[0];
    this.setState({
      newTransaction: myTransaction,
      adding: false,
      showModal: true
    });
  };

  deleteTransaction = id => {
    const transactions = this.state.transactions.filter(
      transaction => transaction.id !== id
    );
    this.setState({ transactions });
    axios.delete(`/transactions/${id}`);
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      newTransaction: {
        ...prevState.newTransaction,
        [name]: value
      }
    }));
  };

  handleSubmit = async () => {
    this.setState({ showModal: false });
    const newTransaction = this.state.newTransaction;
    if (this.state.adding) {
      const id = new Date().getTime();
      newTransaction.created = id;
      newTransaction.id = id;
      axios.post(`/transactions`, newTransaction);
      await this.setState(prevState => ({
        transactions: [...prevState.transactions, newTransaction]
      }));
      if (this.state.sorted) {
        this.sortTransactions(this.state.sorted);
      }
    } else {
      axios.put(`/transactions/${newTransaction.id}`, newTransaction);
      const transactions = this.state.transactions.map(
        transaction =>
          newTransaction.id === transaction.id ? newTransaction : transaction
      );
      this.setState({ transactions });
    }
  };

  changeTypeFilter = type => {
    const filter = this.state.filter;
    this.setState({ filter: { ...filter, type } });
  };

  changeTimeFilter = (from, to) => {
    const filter = this.state.filter;
    this.setState({ filter: { ...filter, from, to } });
  };

  sortTransactions = how => {
    let transactions = this.state.transactions;
    if (how === "asc") {
      transactions.sort((t1, t2) => t1.created - t2.created);
    } else {
      transactions.sort((t1, t2) => t2.created - t1.created);
    }
    this.setState({ transactions, sorted: how });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <ErrorBoundary>
        <TransactionDisplay>
          <TransactionMenu
            changeTypeFilter={this.changeTypeFilter}
            changeTimeFilter={this.changeTimeFilter}
            sortTransactions={this.sortTransactions}
            addTransaction={this.addTransaction}
          />
          <TransactionTable
            transactions={this.state.transactions}
            filter={this.state.filter}
            editTransaction={this.editTransaction}
            deleteTransaction={this.deleteTransaction}
            dataLoaded={this.state.dataLoaded}
          />
          <Modal
            isOpen={this.state.showModal}
            style={modalStyles}
            ariaHideApp={false}
          >
            <AddTransactionForm
              adding={this.state.adding}
              newTransaction={this.state.newTransaction}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              closeModal={this.closeModal}
            />
          </Modal>
        </TransactionDisplay>
      </ErrorBoundary>
    );
  }
}

export default TransactionPage;
