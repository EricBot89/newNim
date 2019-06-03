import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loggingMiddleware, thunkMiddleware } from "./middleware";

const initState = {
  user: {
    username: null,
  },
  };

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      break;
  }
  return state;
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(loggingMiddleware, thunkMiddleware))
);

export { store };
