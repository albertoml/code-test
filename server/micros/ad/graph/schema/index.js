import {gql} from "apollo-server";
import {adType} from "./ad";
import {imageType} from "./image";
import {query} from "./query";
import {mutation} from "./mutation";

const typeDefs = gql`
  ${adType}
  ${imageType}
  ${query}
  ${mutation}
`;

export { typeDefs };