import {signInUser} from "../../features/user";
import { GraphQLJSONObject } from 'graphql-type-json';
import {getJsonWebKey} from "../../features/signingKeys";

const resolvers = {
  JSONObject: GraphQLJSONObject,
  Query: {
    jsonWebToken: () => getJsonWebKey()
  },
  Mutation: {
    signIn: (_, {userName, password, grantType, clientId}) => signInUser(userName, password, grantType, clientId),
  }
};

export { resolvers }