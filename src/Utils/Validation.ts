import isStrongPassword from 'validator/lib/isStrongPassword';
import { constants } from './Constants';

export interface ValidationResult {
  isOk: boolean;
  message: string;
}

export const validatePassword = (password: string): ValidationResult => {
  if (!isStrongPassword(password)) {
    return {
      isOk: false,
      message: constants.errorsMessages.passwordIsToWeak,
    };
  }
  return {
    isOk: true,
    message: '',
  };
};

export const validatePasswordWithRepeat = (password: string, repeat: string): ValidationResult => {
  if (password !== repeat) {
    return {
      isOk: false,
      message: constants.errorsMessages.passwordsDoesNotMatch,
    };
  }
  const validationOfPassword = validatePassword(password);
  if (!validationOfPassword.isOk) {
    return validationOfPassword;
  }

  return {
    isOk: true,
    message: '',
  };
};

export const validateUsername = (username: string): ValidationResult => {
  if (username.length < constants.usernameValidationOpts.length) {
    return {
      isOk: false,
      message: constants.errorsMessages.usernameIsToShort,
    };
  }
  return {
    isOk: true,
    message: '',
  };
};
