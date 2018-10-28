import React from "react";
import { Table, Heading, DateCol, DescCol, AmountCol } from "./overviewstyles";
import Record from "./Record";

class OverviewTable extends React.Component {
  render() {
    const timeFilterAll = this.props.filter.to === 0;
    return (
      <Table>
        <Heading>
          <DateCol>Datum</DateCol>
          <DescCol>Popis</DescCol>
          <AmountCol>Částka</AmountCol>
        </Heading>
        {this.props.transactions.map(
          item =>
            (this.props.filter.type === "all" ||
              this.props.filter.type === item.type) &&
            (timeFilterAll ||
              (this.props.filter.from < item.created &&
                this.props.filter.to > item.created)) ? (
              <Record
                key={item.id}
                item={item}
                editTransaction={this.props.editTransaction}
                deleteTransaction={this.props.deleteTransaction}
              />
            ) : (
              ""
            )
        )}
      </Table>
    );
  }
}

export default OverviewTable;
