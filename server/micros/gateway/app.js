import {ApolloGateway, RemoteGraphQLDataSource} from "@apollo/gateway";
import {config} from "./config";

const {ApolloServer} = require('apollo-server');

const gateway = new ApolloGateway({
  serviceList: [
    {name: 'ads', url: config.micros.ad},
    {name: 'auth', url: config.micros.auth}
  ],
  buildService: ({name, url}) => {
    return new RemoteGraphQLDataSource(
      {
        url,
        willSendRequest({request, context}) {
          request.http.headers.set("midden-access-token", context.token);
        }
      }
    );
  }
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  context: ({req, res}) => {
    let token = null;
    if (req.headers.authorization) {
      [, token] = req.headers.authorization.split('Bearer ')
    }
    return {
      token
    }
  }
});

server.listen({port: config.server.port}).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});