import { userActions } from "../Actions/UserActions"

interface userSignInPayload {
  username: string;
  password: string;
}

interface userSignInAction {
  type: userActions.USER_SIGNIN;
  payload: userSignInPayload;
}

export const userSignIn = (payload: userSignInPayload) => {
  const action: userSignInAction = {
    type: userActions.USER_SIGNIN,
    payload: payload,
  };
  return action;
};

interface userSignUpPayload {
  username: string;
  password: string;
  passwordRepeat: string;
}

interface userSignUpAction {
  type: userActions.USER_SIGNUP;
  payload: userSignUpPayload;
}

export const userSignUp = (payload: userSignUpPayload) => {
  const action: userSignUpAction =  {
    type: userActions.USER_SIGNUP,
    payload: payload,
  };
  return action;
};

interface userLogOutAction {
  type: userActions.USER_LOGOUT;
}

export const userLogOut = () => {
  const action: userLogOutAction = {
    type: userActions.USER_LOGOUT,
  }
  return action;
};

export type UserActionsTypes = userLogOutAction | userSignInAction | userSignUpAction;
