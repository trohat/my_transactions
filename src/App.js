import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import TransactionPage from "./pages/transactions/TransactionPage";
import OverviewPage from "./pages/OverviewPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/transactions" component={TransactionPage} />
            <Route path="/overview" component={OverviewPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
