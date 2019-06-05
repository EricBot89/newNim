import React from "react";
import ReactDOM from "react-dom";
import 'babel-polyfill';
import { ErrorBoundary } from "./ErrorBoundary";
import { Provider, connect } from "react-redux";
import { store, loginThunk } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Game, Main, Setup, Profile, Nav } from "./comp/index";

class Index extends React.Component {
   async componentDidMount() {
    await this.props.getUserData();
  }

  render() {
    return (
      <div id="app">
        <Router>
          {this.props.user.username ? <Nav /> : ""}
          <Switch>
            <Route path="/" component={Main} />
            <Route path="/profile" componenet={Profile} />
            <Route path="/setup" componenet={Setup} />
            <Route path="/game" componenet={Game} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mountUserOnRefresh = dispatch => {
  return {
    getUserData() {
      dispatch(loginThunk());
    }
  };
};

const getUserInfoFromState = state => ({
  user: state.user
});

const App = connect(
  getUserInfoFromState,
  mountUserOnRefresh
)(Index);

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
