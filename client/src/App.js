import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Title from "./components/Title";
import Footer from "./components/Footer";
import MenuExampleSecondaryPointing from "./components/NavMenu";
import history from "./utils/history";
import Vehicle from "./components/Vehicle";
import Home from "./components/Home";
import Service from "./components/Service";
import Basic from "./components/Basic";

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <Title />
          <MenuExampleSecondaryPointing />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/basic" component={Basic} />
          <PrivateRoute path="/service" component={Service} />
          <PrivateRoute path="/vehicle" component={Vehicle} />
          {/* <PrivateRoute path="/external-api" component={ExternalApi} /> */}
        </Switch>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
