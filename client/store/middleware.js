/* eslint-disable */

const loggingMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    console.log("no logging implimented");
    console.log(next(action));
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
