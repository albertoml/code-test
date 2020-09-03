import crypto from "crypto";
import {findByNameAndPassword} from "../db/query/user";
import {generateToken} from "./token";

const encryptPassword = (password) => {
  return crypto.createHmac('sha512', password).digest('hex');
}

const signInUser = async (userName, password, grantType, clientId) => {
  const user = await findByNameAndPassword(userName, encryptPassword(password))
  if (user) {
    return generateToken({grantType, clientId, userName, password})
  }
  return { error: 'Invalid User' }
}

export {encryptPassword, signInUser}