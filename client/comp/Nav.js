import React from "react";
import { connect } from "react-redux";
import { NavLink as Link } from "react-router-dom";

const DCNav = () => {
  return (
    <span id="navBar">
      <Link to="/" activeClassName={"selected-link"}>
        <h3>Rules</h3>
      </Link>
      <Link to="/profile" activeClassName={"selected-link"}>
        <h3>Profile</h3>
      </Link>
      <Link to="/setup" activeClassName={"selected-link"}>
        <h3>New Game</h3>
      </Link>
    </span>
  );
};

const Nav = connect(
  null,
  null
)(DCNav);

export { Nav };
