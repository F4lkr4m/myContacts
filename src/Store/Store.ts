import { combineReducers, createStore } from "redux";
import { userReducer } from "./Reducers/UserReducer";

const rootReducer = combineReducers({
  userReducer,
});

const store = createStore(rootReducer);


export type rootReducerType = ReturnType<typeof rootReducer>;

export default store;
