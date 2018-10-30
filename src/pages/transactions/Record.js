import React from "react";
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
import { formatDate } from "../../util/helpers";

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

export default Record;
