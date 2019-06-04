/* eslint-disable */

const loggingMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    console.log("Old user:", state.user);
    console.log(next(action));
    console.log("New user:", state.user);
  };
};

// implementation by DA
const thunkMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
};

export { loggingMiddleware, thunkMiddleware };
