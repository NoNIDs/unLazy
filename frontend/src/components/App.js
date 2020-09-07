import React, { Fragment, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import AlertTemplate from "./layout/AlertTemplate";
import Alerts from "./layout/Alerts";

import Front from "./layout/Front";
import Header from "./layout/Header";

import Profile from "./app/Profile";
import Rating from "./app/Rating";
import Scheduler from "./app/Scheduler";
import Statistic from "./app/Statistic";
import Articles from "./app/Articles";

import Login from "./auth/Login";
import Register from "./auth/Register";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import store from "../store";
import { loadUser } from "../actions/auth";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate}>
        <Router>
          <Header />
          <Alerts />
          <div className="container main-container">
            <Switch>
              <Route exact path="/" component={Front} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/scheduler" component={Scheduler} />
              <PrivateRoute exact path="/rating" component={Rating} />
              <PrivateRoute exact path="/statistic" component={Statistic} />
              <PrivateRoute exact path="/articles" component={Articles} />
            </Switch>
          </div>
        </Router>
      </AlertProvider>
    </Provider>
  );
}

export default App;
