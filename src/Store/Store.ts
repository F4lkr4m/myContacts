import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Reducers/UserReducer";
import { alertReducer } from "./Reducers/AlertReducer";

const rootReducer = combineReducers({
  userReducer,
  alertReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));


export type rootReducerType = ReturnType<typeof rootReducer>;

export default store;
