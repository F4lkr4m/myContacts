import { Dispatch } from 'redux';
import { userActions } from '../Actions/UserActions';
import { alertSignIn, alertSignUp, clearAlert } from './AlertActionCreators';
import { validatePassword, validatePasswordWithRepeat, validateUsername } from '../../Utils/Validation';
import { apiSignIn, apiSignUp } from '../../Utils/Api';
import { constants } from '../../Utils/Constants';

// USER DATA PAYLOAD FROM FORMS
export interface userDataPayload {
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
  };
  return action;
};

export const signIn = (payload: userDataPayload) => {
  return async (dispatch: Dispatch) => {
    const usernameValidation = validateUsername(payload.username);
    if (!usernameValidation.isOk) {
      dispatch(alertSignIn(usernameValidation.message));
      return;
    }
    const passwordValidation = validatePassword(payload.password);
    if (!passwordValidation.isOk) {
      dispatch(alertSignIn(passwordValidation.message));
      return;
    }
    // Clear if all is ok
    dispatch(clearAlert());

    try {
      const result = await apiSignIn(payload.username, payload.password);
      if (result.status === 201) {
        dispatch(userSignInAC(payload.username));
      } else {
        dispatch(alertSignIn(constants.errorsMessages.smthWentWrong));
      }
    } catch {
      dispatch(alertSignIn(constants.errorsMessages.smthWentWrong));
    }
  };
};

export const signUp = (payload: userDataSignUpPayload) => {
  return async (dispatch: Dispatch) => {
    const usernameValidation = validateUsername(payload.username);
    if (!usernameValidation.isOk) {
      dispatch(alertSignUp(usernameValidation.message));
      return;
    }
    const passwordsValidation = validatePasswordWithRepeat(payload.password, payload.repeatPassword);
    if (!passwordsValidation.isOk) {
      dispatch(alertSignUp(passwordsValidation.message));
      return;
    }
    // clear if all is ok
    dispatch(clearAlert());

    try {
      const result = await apiSignUp(payload.username, payload.password);
      if (result.status === 201) {
        dispatch(userSignInAC(payload.username));
      } else {
        dispatch(alertSignUp(constants.errorsMessages.smthWentWrong));
      }
    } catch {
      dispatch(alertSignUp(constants.errorsMessages.smthWentWrong));
    }
  };
};

export const logOut = () => {
  return (dispatch: Dispatch) => {
    dispatch(userLogOutAC());
  };
};

// EXPORT ACTION INTERFACES

export type UserActionsTypes = userLogOutAction | userSignInAction;
