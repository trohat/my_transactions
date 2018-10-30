import React from "react";
import {
  Table,
  Heading,
  DateCol,
  DescCol,
  AmountCol
} from "./styles/tableStyles";
import Record from "./Record";

const TransactionTable = ({
  transactions,
  filter: { type, from, to },
  editTransaction,
  deleteTransaction
}) => {
  const timeFilterAll = to === 0;
  return (
    <Table>
      <Heading>
        <DateCol>Datum</DateCol>
        <DescCol>Popis</DescCol>
        <AmountCol>Částka</AmountCol>
      </Heading>
      {transactions.map(
        item =>
          (type === "all" || type === item.type) &&
          (timeFilterAll || (from < item.created && to > item.created)) ? (
            <Record
              key={item.id}
              item={item}
              editTransaction={editTransaction}
              deleteTransaction={deleteTransaction}
            />
          ) : (
            ""
          )
      )}
    </Table>
  );
};

export default TransactionTable;
