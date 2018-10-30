import styled from "styled-components";
import { plusColor, minusColor } from "../../../util/constants";

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
  border-radius: 5px;
`;

export const AddButton = styled(StyledButton)`
  margin-bottom: 50px;
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

export const SortingButton = styled(StyledButton)`
  display: inline-flex;
  justify-content: space-between;
`;
