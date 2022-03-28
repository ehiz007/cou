import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import initialState from "./initialState";
import userReducer from "./reducers/userReducer";
// import businessReducer from "./reducers/businessReducer";

const middleware = [thunk];

const reducer = combineReducers({
  user: userReducer,
  //   business:businessReducer
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
