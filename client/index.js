import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Game, Main, Setup, Profile, Nav } from "./comp/index";

const Index = props => {
  return (
    <div id="app">
      <Router>
        <Nav />
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

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);
