import { AlertActionsTypes } from '../ActionCreators/AlertActionCreators';
import { alertActions } from '../Actions/AlertAction';

export interface AlertState {
  signInMessage: string;
  signUpMessage: string;
}

const initialAlertState: AlertState = {
  signInMessage: '',
  signUpMessage: '',
};

export const alertReducer = (state: AlertState = initialAlertState, action: AlertActionsTypes): AlertState => {
  switch (action.type) {
    case alertActions.SIGNIN_ALERT: {
      return {
        ...state,
        signInMessage: action.message,
      };
    }
    case alertActions.SIGNUP_ALERT: {
      return {
        ...state,
        signUpMessage: action.message,
      };
    }
    case alertActions.CLEAR: {
      return {
        signInMessage: '',
        signUpMessage: '',
      };
    }
    default:
      return state;
  }
};
