import React from "react";
import { connect } from "react-redux";
import { Nav } from "./";

const DCProfile = props => {
  const { username } = props.user;

  return (
    <div>
      <h1>Welcome {username}</h1>
    </div>
  );
};

const getUserInfoFromState = state => ({
  user: state.user
});

const Profile = connect(
  getUserInfoFromState,
  null
)(DCProfile);

export { Profile };
