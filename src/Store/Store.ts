import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './Reducers/UserReducer';
import { alertReducer } from './Reducers/AlertReducer';
import { contactsReducer } from './Reducers/ContactsReducer';

const rootReducer = combineReducers({
  userReducer,
  alertReducer,
  contactsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type rootReducerType = ReturnType<typeof rootReducer>;

export default store;
