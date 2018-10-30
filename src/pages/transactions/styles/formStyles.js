import styled from "styled-components";

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
  margin: 10px auto 40px auto;
  font-weight: normal;
  font-size: inherit;
`;

export const StyledModalButton = styled.button`
  padding: 8px 16px;
  margin: 15px;
  font-size: 1.4em;
  font-weight: bold;
`;

export const OkButton = styled(StyledModalButton)`
  color: green;
`;

export const CancelButton = styled(StyledModalButton)`
  color: red;
`;
