import React from "react";

const Rules = props => {
  return (
    <ul>
      <li> The game starts with a stack of nimbs. </li>
      <li>
        {" "}
        This is a nimb:{" "}
        <img
          src="nimb.png"
          alt="nimb"
          style={({ width: "20px" }, { height: "20px" })}
        />{" "}
      </li>
      <li>
        {" "}
        On each turn the current player takes at least one and up to three nimbs
        off the stack{" "}
      </li>
      <li> The player who takes the last nimb off the stack is the winner. </li>
    </ul>
  );
};

export { Rules };
