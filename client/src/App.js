import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import { Router, Route, Switch } from "react-router-dom";
// import ExternalApi from "./views/ExternalApi";
import Profile from "./components/Profile";
import Title from "./components/Title";
import Footer from "./components/Footer";
import history from "./utils/history";
import Garage from "./pages/garage";


function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <Title></Title>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/pages/garage" component={Garage} />
          {/* <PrivateRoute path="/external-api" component={ExternalApi} /> */}

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
