import {config} from '../config';
import {passwordToken} from "./passwordToken";

const grantTypeMethod = {
  password: passwordToken,
};

export const generateToken = (requestToken) => {

  if (!requestToken.grantType) {
    return { error: 'Grant type not provided' }
  }

  if (!requestToken.clientId) {
    return { error: 'Client ID not provided' }
  }

  if (requestToken.clientId !== config.auth.clientId) {
    return { error: 'Wrong client ID' }
  }

  if (!grantTypeMethod[requestToken.grantType]) {
    return { error: 'Grant type not available' }
  }

  return grantTypeMethod[requestToken.grantType](requestToken);
};