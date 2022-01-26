import { UserActionsTypes } from "../ActionCreators/UserActionCreator";
import { userActions } from "../Actions/UserActions";

export interface UserState {
  auth: boolean;
  username: string;
}

const initialUserState: UserState = {
  auth: false,
  username: '',
};

export const userReducer = (state: UserState = initialUserState, action: UserActionsTypes): UserState => {
  switch(action.type) {
    case userActions.USER_SIGNIN: {
      return {
        auth: true,
        username: action.payload,
      };
    } 
    case userActions.USER_LOGOUT: {
      return {
        auth: false,
        username: '',
      };
    }
    default:
      return state;
  }
};
