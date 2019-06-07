/* eslint-disable */

const loggingMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    console.log("Old user:", getState().user);
    console.log(next(action));
    console.log("New user:", getState().user);
  };
};

// implementation by DA
const thunkMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    if (typeof action === "function") {
      console.log("thunk in progress")
      return action(dispatch, getState);
    }
    return next(action);
  };
};

export { loggingMiddleware, thunkMiddleware };
