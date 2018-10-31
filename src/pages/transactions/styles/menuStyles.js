import styled from "styled-components";
import { plusColor, minusColor, notebookHeight } from "../../../util/constants";

export const Menu = styled.div`
  width: 20%;
  display: inline-block;

  h2 {
    margin-bottom: 45px;

    @media only screen and (max-height: 850px) {
      margin-top: 15px;
      margin-bottom: 30px;
    }

    @media only screen and (max-height: ${notebookHeight}) {
      margin-bottom: 20px;
      margin-top: 10px;
    }
  }

  h3 {
    margin-top: 45px;
    margin-bottom: 6px;

    @media only screen and (max-height: 850px) {
      margin-top: 15px;
    }

    @media only screen and (max-height: ${notebookHeight}) {
      margin-top: 10px;
    }
  }

  & ul {
    padding-left: 0px;
    margin-top: 15px;
    margin-bottom: 30px;

    @media only screen and (max-height: 850px) {
      margin-bottom: 20px;
    }

    @media only screen and (max-height: ${notebookHeight}) {
      margin-bottom: 15px;
      margin-top: 10px;
    }
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

  @media only screen and (max-height: 850px) {
    margin-top: 17px;
    margin-bottom: 40px;
  }

  @media only screen and (max-height: ${notebookHeight}) {
    margin-top: 17px;
    margin-bottom: 30px;
  }
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
