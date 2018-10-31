import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../util/helpers";
import { transactionShape } from "../../util/constants";
import {
  RecordDiv,
  DateCol,
  DescCol,
  PlusAmountCol,
  MinusAmountCol,
  ButtonCol,
  EditButton,
  DelButton
} from "./styles/tableStyles";

const Record = ({
  item: { created, name, value, type, id },
  editTransaction,
  deleteTransaction
}) => {
  return (
    <RecordDiv>
      <DateCol>{formatDate(created)}</DateCol>
      <DescCol>{name}</DescCol>
      {type === "income" ? (
        <PlusAmountCol>+ {value}</PlusAmountCol>
      ) : (
        <MinusAmountCol>- {value}</MinusAmountCol>
      )}
      <ButtonCol>
        <EditButton onClick={() => editTransaction(id)}>
          {"\u270E"} Upravit
        </EditButton>
        <DelButton onClick={() => deleteTransaction(id)}>
          {"\u2716"} Smazat
        </DelButton>
      </ButtonCol>
    </RecordDiv>
  );
};

Record.propTypes = {
  item: PropTypes.shape(transactionShape).isRequired,
  editTransaction: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired
};

export default Record;
