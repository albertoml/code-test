import {sign} from 'jsonwebtoken';
import {config} from '../config';
import {getSigningKeys} from './signingKeys';
import {findByNameAndPassword} from "../db/query/user";
import {encryptPassword} from "./user";

export const passwordToken = async (requestToken) => {

  if (!requestToken.userName) {
    return { error: 'Username not provided' }
  }
  if (!requestToken.password) {
    return { error: 'Password not provided' }
  }
  const user = await findByNameAndPassword(requestToken.userName, encryptPassword(requestToken.password));
  if(!user) {
    return { error: 'User not found' }
  }

  const { kid, privateKey } = await getSigningKeys();

  const expires =
    Math.floor(Date.now() / 1000) + config.auth.tokenExpirationSeconds;

  const token = sign(
    {
      exp: expires,
    },
    privateKey,
    {
      issuer: config.auth.issuer,
      algorithm: 'RS512',
      audience: config.auth.audience,
      keyid: kid,
      subject: user._id.toString(),
    }
  );

  return {
    access_token: token,
    token_type: 'Bearer',
    expires_in: expires,
  };
};