import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.css';
import { MainPage } from "components";
import {
  HashRouter as Router,
  Route, Switch, Redirect,
} from "react-router-dom";
import routes from "./routes";

const App = props => (
  <Router>
    <Switch>
      <Route exact path={routes.MAIN_PAGE} component={MainPage} />
      <Redirect to={routes.MAIN_PAGE} />
    </Switch>
  </Router>
);

export default App;
