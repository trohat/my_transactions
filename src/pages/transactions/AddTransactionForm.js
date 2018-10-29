import React from "react";
import {
  FormWrapper,
  NumberInput,
  TextInput,
  StyledSelect,
  StyledModalButton
} from "./transactionstyles";

const AddTransactionForm = ({
  adding,
  newTransaction: { name, value, type },
  handleChange,
  handleSubmit,
  closeModal
}) => {
  return (
    <FormWrapper>
      <h3>{adding ? "Přidat novou transakci:" : "Upravit transakci:"}</h3>
      <label htmlFor="value">Částka: </label>
      <NumberInput
        type="number"
        id="value"
        name="value"
        value={value}
        onChange={handleChange}
      />
      <label htmlFor="name">Popis: </label>
      <TextInput
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="type">Typ transakce: </label>
      <StyledSelect id="type" name="type" value={type} onChange={handleChange}>
        <option value="income">Příjem</option>
        <option value="expense">Výdej</option>
      </StyledSelect>
      <StyledModalButton onClick={handleSubmit}>Uložit</StyledModalButton>
      <StyledModalButton onClick={closeModal}>Zrušit</StyledModalButton>
    </FormWrapper>
  );
};

export default AddTransactionForm;
