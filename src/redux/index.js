import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducer as todoReducer } from "./reducer";

const reducers = combineReducers({ todo: todoReducer });

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
