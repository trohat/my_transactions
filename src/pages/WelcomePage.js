import React from "react";
import { Link } from "react-router-dom";

class WelcomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Vítejte v aplikaci moje peněženka!</h2>
        <div>
          <Link to="/transaction/new">Přidat novou transakci</Link>
        </div>
        <div>
          <Link to="/overview">Zobrazit přehledy</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default WelcomePage;
