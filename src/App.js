import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import OverviewPage from "./pages/overview/OverviewPage";
import TransactionPage from "./pages/TransactionPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/overview" component={OverviewPage} />
            <Route
              path="/transaction/:transactionId"
              component={TransactionPage}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
