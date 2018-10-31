import styled from "styled-components";
import { plusColor, minusColor } from "../../../util/constants";

export const WrapperDiv = styled.div`
  margin-top: -6px;
  margin-bottom: 50px;
  font-size: 1.2em;
`;

export const UnstyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  line-height: 1.6;
`;

export const IncomeSpan = styled(StyledSpan)`
  color: ${plusColor};
`;

export const ExpenseSpan = styled(StyledSpan)`
  color: ${minusColor};
`;
