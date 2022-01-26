import { Dispatch } from "redux";
import { userActions } from "../Actions/UserActions"


// USER DATA PAYLOAD FROM FORMS
export  interface userDataPayload {
  username: string;
  password: string;
}

export interface userDataSignUpPayload {
  username: string;
  password: string;
  repeatPassword: string;
}

// ACTIONS INTERFACES
interface userSignInAction {
  type: userActions.USER_SIGNIN;
  payload: string;
}

interface userLogOutAction {
  type: userActions.USER_LOGOUT;
}

// ACTION CREATORS

const userSignInAC = (username: string) => {
  const action: userSignInAction = {
    type: userActions.USER_SIGNIN,
    payload: username,
  };
  return action;
};

const userLogOutAC = () => {
  const action: userLogOutAction = {
    type: userActions.USER_LOGOUT,
  }
  return action;
};

export const signIn = (payload: userDataPayload) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      console.log('DISPATCH');
      dispatch(userSignInAC(payload.username));
    }, 1000);
  };
}

export const signUp = (payload: userDataSignUpPayload) => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(userSignInAC(payload.username));
    }, 1000);
  };
}

export const logOut = () => {
  return (dispatch: Dispatch) => {
    dispatch(userLogOutAC());
  };
}

// EXPORT ACTION INTERFACES

export type UserActionsTypes = userLogOutAction | userSignInAction;
