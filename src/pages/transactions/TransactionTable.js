import React from "react";
import Record from "./Record";
import PropTypes from "prop-types";
import ErrorBoundary from "../ErrorBoundary";
import { transactionShape } from "../../util/constants";
import {
  Table,
  Heading,
  DateCol,
  DescCol,
  AmountCol,
  EmptyDiv
} from "./styles/tableStyles";

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
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape(transactionShape)).isRequired,
  filter: PropTypes.object.isRequired,
  editTransaction: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool
};

export default TransactionTable;
