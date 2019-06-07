import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loggingMiddleware, thunkMiddleware } from "./middleware";
import axios from "axios";

const initState = {
  user: {
    username: null
  }
};

const SET_USER_ON_STATE = "SET_USER_ON_STATE";

const setUserOnState = user => {
  return { type: SET_USER_ON_STATE, user };
};

const loginThunk = () => {
  return async dispatch => {
    const user = await axios.get("auth/me");
    console.log(user)
    if (user) {
      dispatch(setUserOnState(user.data));
    }
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_ON_STATE:
      state.user = action.user;
      return state;
    default:
      break;
  }
  return state;
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(loggingMiddleware, thunkMiddleware))
);

export { store, loginThunk };
