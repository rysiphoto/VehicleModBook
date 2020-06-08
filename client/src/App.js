import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Title from "./components/Title";
import Footer from "./components/Footer";
import MenuExampleSecondaryPointing from "./components/NavMenu";
import history from "./utils/history";
import Garage from "./components/Garage";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <Title />
          <MenuExampleSecondaryPointing />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/Profile" component={Profile} />
          <PrivateRoute path="/Garage" component={Garage} />
          {/* <PrivateRoute path="/external-api" component={ExternalApi} /> */}

        </Switch>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
