import React from "react";
import {
  Table,
  Heading,
  DateCol,
  DescCol,
  AmountCol,
  EmptyCol
} from "./overviewstyles";
import Record from "./Record";

class OverviewTable extends React.Component {
  render() {
    return (
      <Table>
        <Heading>
          <DateCol>Datum</DateCol>
          <DescCol>Popis</DescCol>
          <AmountCol>Částka</AmountCol>
          <EmptyCol />
        </Heading>
        {this.props.transactions.map(
          item =>
            this.props.filter.type === "all" ||
            this.props.filter.type === item.type ? (
              <Record
                key={item.id}
                item={item}
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
