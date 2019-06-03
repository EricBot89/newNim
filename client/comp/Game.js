import React from "react";
import { connect } from "react-redux";

const DCGame = props => {
  return <p>Game goes here</p>;
};

const Game = connect(
  null,
  null
)(DCGame);

export { Game };
