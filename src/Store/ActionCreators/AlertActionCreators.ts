import { alertActions } from '../Actions/AlertAction';

// ACTIONS
interface signInAlertAction {
  type: alertActions.SIGNIN_ALERT;
  message: string;
}

interface signUpAlertAction {
  type: alertActions.SIGNUP_ALERT;
  message: string;
}

interface cleartAlertAction {
  type: alertActions.CLEAR;
}

// ACTION CREATORS

export const alertSignIn = (message: string) => {
  return {
    type: alertActions.SIGNIN_ALERT,
    message: message,
  };
};

export const alertSignUp = (message: string) => {
  return {
    type: alertActions.SIGNUP_ALERT,
    message: message,
  };
};

export const clearAlert = () => {
  return {
    type: alertActions.CLEAR,
  };
};

export type AlertActionsTypes = signInAlertAction | signUpAlertAction | cleartAlertAction;
