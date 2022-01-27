export const constants = {
  appPaths: {
    sign: '/sign',
    home: '/',
  },
  errorsMessages: {
    passwordsDoesNotMatch: 'Пароли не совпадают!',
    passwordIsToWeak: 'Неправильный пароль! Пароль должен содержать цифру, заглавную букву и специальный символ.',
    usernameIsToShort: 'Слишком короткое имя пользователя. Имя должно быть длинной не менее 4х символов',
    smthWentWrong: 'Что-то пошло не так.',
  },
  usernameValidationOpts: {
    length: 4,
  },
  serverAddress: 'http://127.0.0.1:3004',
  apiPaths: {
    signin: '/signin',
    signup: '/signup',
  },
};
