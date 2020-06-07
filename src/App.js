// src/App.js
import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import { Router, Route, Switch } from "react-router-dom";
// import ExternalApi from "./views/ExternalApi";
import Profile from "./components/Profile";
import history from "./utils/history";
import Garage from "./components/Garage";
// import Vehicle from "./components/Vehicle";
// import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/garage" component={Garage} />
          {/* <PrivateRoute path="/external-api" component={ExternalApi} /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
