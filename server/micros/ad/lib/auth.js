import {config} from "../config";
import jwkToPem from "jwk-to-pem";
import axios from "axios"
import mem from "mem"
import * as jwt from "jsonwebtoken";

const validateAuthToken = async (token) => {
  const decodedToken = jwt.decode(token, {complete: true});
  if (decodedToken !== null) {
    const signingKey = await getPublicSigningKey(decodedToken.header.kid);
    return jwt.verify(token, signingKey + "");
  }
  throw Error ('Invalid token')
}

const getPublicSigningKey = mem(key => {
  return axios.post(config.auth.url, {query: 'query getPublicSigningKey {jsonWebToken}'})
    .then(function (response) {
      return jwkToPem(response.data.data.jsonWebToken.keys.find(k => k.kid === key));
    })
    .catch(function (error) {
      throw Error('Unable to get public signing key ' + error)
    })
})

export {validateAuthToken}