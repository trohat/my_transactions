import styled from "styled-components";
import { plusColor, minusColor, stripsColor } from "../../../util/constants";

export const Table = styled.div`
  text-align: left;
  width: 60%;
  border-left: 1px solid black;
  padding-left: 20px;
  display: inline-block;
  margin-bottom: 40px;

  @media only screen and (max-width: 1205px) {
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

  @media only screen and (max-width: 929px) {
    width: 30%;
  }
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
  text-align: right;

  @media only screen and (max-width: 929px) {
    width: 30%;
  }
`;

export const RecordButton = styled.button`
  margin-left: 8px;
  margin-right: 8px;
`;

export const EditButton = styled(RecordButton)``;

export const DelButton = styled(RecordButton)`
  margin-right: 3px;
`;
