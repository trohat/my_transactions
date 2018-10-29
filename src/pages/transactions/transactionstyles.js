import styled from "styled-components";
import { plusColor, minusColor, stripsColor } from "../../util/constants";

export const TransactionDisplay = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  width: 20%;
  display: inline-block;

  h2 {
    margin-bottom: 45px;
  }

  h3 {
    margin-top: 45px;
    margin-bottom: 6px;
  }

  & ul {
    padding-left: 0px;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  & li {
    list-style-type: none;
  }
`;

export const StyledButton = styled.button`
  font-weight: bold;
  min-width: 115px;
  padding: 6px;
  margin: 4px;
`;

export const AddButton = styled(StyledButton)`
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 10px;
  font-size: 0.9em;
`;

export const IncomeButton = styled(StyledButton)`
  color: ${plusColor};
`;

export const ExpenseButton = styled(StyledButton)`
  color: ${minusColor};
`;

export const Table = styled.div`
  text-align: left;
  width: 60%;
  border-left: 1px solid black;
  padding-left: 20px;
  display: inline-block;
  margin-bottom: 40px;

  @media only screen and (max-width: 1040px) {
    width: 80%;
  }
`;

export const Heading = styled.header`
  font-weight: bold;
  padding-bottom: 10px;

  div {
    text-align: center;
    font-weight: bold;
  }
`;

export const RecordDiv = styled.div`
  text-align: auto;
  padding-top: 2px;
  padding-bottom: 3px;

  &:nth-child(even) {
    background-color: ${stripsColor};
  }
`;

const InlineDiv = styled.div`
  display: inline-block;
`;

export const DateCol = styled(InlineDiv)`
  width: 20%;
  text-align: center;
  font-weight: 600;
`;

export const DescCol = styled(InlineDiv)`
  width: 40%;
`;

export const AmountCol = styled(InlineDiv)`
  text-align: center;
  width: 15%;
  font-weight: bold;
`;

export const PlusAmountCol = styled(AmountCol)`
  color: ${plusColor};
`;

export const MinusAmountCol = styled(AmountCol)`
  color: ${minusColor};
`;

export const ButtonCol = styled(InlineDiv)`
  width: 25%;
  text-align: center;

  button {
    margin-left: 8px;
    margin-right: 8px;
  }
`;

export const EditButton = styled.button``;

export const DelButton = styled.button``;

export const FormWrapper = styled.div`
  font-size: 1em;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  display: block;
  height: 28px;
  margin: 4px auto 25px auto;
  font-weight: normal;
  font-size: inherit;
`;

export const NumberInput = styled(StyledInput)`
  text-align: right;
  width: 100px;
`;

export const TextInput = styled(StyledInput)`
  width: 500px;
  text-align: center;
  margin-bottom: 35px;
`;

export const StyledSelect = styled.select`
  display: block;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px auto 20px auto;
  font-weight: normal;
  font-size: inherit;
`;

export const StyledModalButton = styled.button`
  padding: 3px 12px;
  margin: 10px;
  font-size: inherit;
  font-weight: inherit;
`;

export const modalStyles = {
  content: {
    bottom: "auto",
    top: "20%",
    left: "22%",
    right: "22%",
    border: "5px solid lightblue"
  }
};
