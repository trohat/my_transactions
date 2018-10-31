import React from "react";
import {
  Table,
  Heading,
  DateCol,
  DescCol,
  AmountCol,
  EmptyDiv
} from "./styles/tableStyles";
import Record from "./Record";

const TransactionTable = ({
  transactions,
  filter: { type, from, to },
  editTransaction,
  deleteTransaction,
  dataLoaded
}) => {
  const timeFilterAll = to === 0;
  const filteredTransactions = transactions.filter(
    item =>
      (type === "all" || type === item.type) &&
      (timeFilterAll || (from < item.created && to > item.created))
  );
  return (
    <Table>
      <Heading>
        <DateCol>Datum</DateCol>
        <DescCol>Popis</DescCol>
        <AmountCol>Částka</AmountCol>
      </Heading>
      {filteredTransactions.length > 0 ? (
        filteredTransactions.map(item => (
          <Record
            key={item.id}
            item={item}
            editTransaction={editTransaction}
            deleteTransaction={deleteTransaction}
          />
        ))
      ) : (
        <EmptyDiv>
          {dataLoaded
            ? "Zadanému filtru neodpovídá žádná položka."
            : "Načítají se data..."}
        </EmptyDiv>
      )}
    </Table>
  );
};

export default TransactionTable;
