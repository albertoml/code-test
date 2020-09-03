import {logger} from "./lib/logger";
import {config} from "./config";
import {typeDefs} from "./graph/schema";
import {resolvers} from "./graph/resolvers";
import {connect} from "./lib/mongo";
import {buildFederatedSchema} from "@apollo/federation";

const { ApolloServer } = require('apollo-server');

const main = async () => {
  await connect();
}

main().then(() => {
  const server = new ApolloServer({
    schema: buildFederatedSchema([
      {
        typeDefs,
        resolvers
      }
    ]),
    logger
  });

  server.listen({ port: config.server.port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})