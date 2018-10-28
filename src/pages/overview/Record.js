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
} from "./overviewstyles";
import { formatDate } from "../../util/helpers";

const Record = ({
  item: { created, name, value, type, id },
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
        <EditButton>Upravit</EditButton>
        <DelButton onClick={() => deleteTransaction(id)}>Smazat</DelButton>
      </ButtonCol>
    </RecordDiv>
  );
};

export default Record;
