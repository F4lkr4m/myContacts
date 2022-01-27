// It is simple implementation of api, it can be extended by taking out network module
// And adding new urls

import { constants } from './Constants';

export const apiSignIn = (username: string, password: string) => {
  return fetch(constants.serverAddress + constants.apiPaths.signin, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;',
    },
    mode: 'cors',
    body: JSON.stringify({ body: 'kek' }),
  });
};

export const apiSignUp = (username: string, password: string) => {
  console.log({ username: username, password: password });
  return fetch(constants.serverAddress + constants.apiPaths.signup, {
    method: 'post',
    mode: 'cors',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
};
