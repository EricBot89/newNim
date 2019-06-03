import React from "react";
import { connect } from "react-redux";
import { Rules, Login } from "./";

const DCMain = props => {
  let loggedin = false;
  if (props.user.username) {
    loggedin = true;
  }
  return (
    <div id="welcome-screen">
      {loggedin ? "" : <Login />}
      <Rules />
    </div>
  );
};

const getUserInfoFromState = state => ({
  user: state.user
});

const Main = connect(
  getUserInfoFromState,
  null
)(DCMain);

export { Main };
