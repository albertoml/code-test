import {gql} from "apollo-server";
import {query} from "./query";
import {mutation} from "./mutation";
import {userType} from "./user";

const typeDefs = gql`
  scalar JSONObject
  ${userType}
  ${query}
  ${mutation}
`;

export { typeDefs };