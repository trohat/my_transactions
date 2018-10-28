import React from "react";
import { Menu } from "./overviewstyles";

class OverviewMenu extends React.Component {
  render() {
    return (
      <Menu>
        <button>Přidat novou transakci</button>
        <h4>Zobrazit záznamy:</h4>
        <ul>
          <li>Pouze příjmy</li>
          <li>Pouze výdaje</li>
          <li>Zobrazit vše</li>
        </ul>
        <h4>Za období:</h4>
        <ul>
          <li>Dnešní den</li>
          <li>Poslední měsíc</li>
          <li>Zobrazit vše</li>
        </ul>
      </Menu>
    );
  }
}

export default OverviewMenu;
