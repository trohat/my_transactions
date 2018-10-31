import React from "react";
import PropTypes from "prop-types";
import {
  FormWrapper,
  NumberInput,
  TextInput,
  StyledSelect,
  OkButton,
  CancelButton
} from "./styles/formStyles";

const AddTransactionForm = ({
  adding,
  newTransaction: { name, value, type },
  handleChange,
  handleSubmit,
  closeModal
}) => {
  return (
    <FormWrapper>
      <h3>{adding ? "Přidat novou transakci:" : "Editovat transakci:"}</h3>
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
      <OkButton onClick={handleSubmit}>{"\u2714"}</OkButton>
      <CancelButton onClick={closeModal}>{"\u2718"}</CancelButton>
    </FormWrapper>
  );
};

AddTransactionForm.propTypes = {
  newTransaction: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  adding: PropTypes.bool
};

export default AddTransactionForm;
