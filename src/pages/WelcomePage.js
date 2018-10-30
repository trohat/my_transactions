import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Heading = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const WrapperDiv = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 1.2em;
`;

class WelcomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Heading>Vítejte v aplikaci moje peněženka!</Heading>
        <WrapperDiv>
          <Link to="/transactions">Zobrazit transakce</Link>
        </WrapperDiv>
        <WrapperDiv>
          <Link to="/overview">Zobrazit přehledy</Link>
        </WrapperDiv>
      </React.Fragment>
    );
  }
}

export default WelcomePage;
