import React from "react";
import { minYear, maxYear } from "../../util/constants";
import styled from "styled-components";

const WrapperDiv = styled.div`
  margin-top: -6px;
  margin-bottom: 37px;
  font-size: 1.2em;
`;

const InvalidDate = () => {
  return (
    <WrapperDiv>
      <p>Zadaná data nejsou platná.</p>
      <p>
        Aplikace pracuje pouze s roky mezi lety {minYear} a {maxYear}.<br />
        Den musí odpovídat platnému dni v zadaném měsíci.
      </p>
    </WrapperDiv>
  );
};

export default InvalidDate;
