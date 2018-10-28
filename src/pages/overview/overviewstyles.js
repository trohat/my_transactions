import styled from "styled-components";
import { plusColor, minusColor, stripsColor } from "../../util/constants";

export const OverviewDisplay = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  margin-top: 100px;
  width: 20%;
  display: inline-block;

  h4 {
    margin-bottom: 6px;
  }

  & ul {
    padding-left: 0px;
    margin-top: 5px;
  }

  & li {
    list-style-type: none;
  }
`;

export const Table = styled.div`
  text-align: left;
  width: 60%;
  border-left: 1px solid black;
  padding-left: 20px;
  display: inline-block;
  margin-bottom: 40px;
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

export const EmptyCol = styled(InlineDiv)``;

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
