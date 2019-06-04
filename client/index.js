

import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary"
import { Provider, connect } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Game, Main, Setup, Profile, Nav } from "./comp/index";

const Index = props => {
  return (
    <div id="app">
      <Router>
        {props.user.username ? <Nav /> : ""}
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/profile" componenet={Profile} />
          <Route path="/setup" componenet={Setup} />
          <Route path="/game" componenet={Game} />
        </Switch>
      </Router>
    </div>
  );
};

const getUserInfoFromState = state => ({
  user: state.user
});

const App = connect(getUserInfoFromState,null)(Index)

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
