import React from "react";

const AddTransactionForm = ({
  newTransaction: { name, value, type },
  handleChange,
  handleSubmit
}) => {
  return (
    <React.Fragment>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="number" name="value" value={value} onChange={handleChange} />
      <select name="type" value={type} onChange={handleChange}>
        <option value="income">Příjem</option>
        <option value="expense">Výdaj</option>
      </select>
      <input type="button" value="Uložit" onClick={handleSubmit} />
    </React.Fragment>
  );
};

export default AddTransactionForm;
