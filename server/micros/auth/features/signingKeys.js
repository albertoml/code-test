import mem from 'mem';
import { JWK, JWKS } from 'jose';
import {generateKeys} from '../lib/crypto';
import {config} from "../config";

const getSigningKeys = mem(async () => {
  const {publicKey, privateKey} = generateKeys();
  return {
    kid: config.auth.signingKid,
    publicKey,
    privateKey,
  };
})

const getJsonWebKey = mem(
  async () => {
    const { kid, publicKey } = await getSigningKeys();
    const jwk = JWK.asKey(publicKey, { kid, alg: 'RS512', use: 'sig' });
    const keyStore = new JWKS.KeyStore([jwk]);
    return keyStore.toJWKS();
  }
);

export {getSigningKeys, getJsonWebKey};