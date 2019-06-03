import React from "react";
import { connect } from "react-redux";

const DCSetup = props => {
  return <p>hi</p>;
};

const Setup = connect(
  null,
  null
)(DCSetup);

export { Setup };
