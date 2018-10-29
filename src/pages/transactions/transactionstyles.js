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
