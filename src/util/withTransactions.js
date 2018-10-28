import React, { Component } from "react";
import axios from "./axios";

const withTransactions = WrappedComponent => {
  class Wrapper extends Component {
    state = {
      transactions: []
    };

    componentDidMount() {
      axios.get("/transactions").then(response => {
        this.setState({ transactions: response.data });
      });
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }

  return Wrapper;
};

export default withTransactions;
