import React from "react";
import { connect } from "react-redux";

const DCLogin = props => {
  return ( 
  <form method="get" action="/auth/google-auth">
    <button>Login with google!</button>;
  </form>
  )
};

const Login = connect(
  null,
  null
)(DCLogin);

export { Login };