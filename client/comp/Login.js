import React from "react";
import { connect } from "react-redux";

const DCLogin = props => {
  return <button>Login with google!</button>;
};

const Login = connect(
  null,
  null
)(DCLogin);

export { Login };
