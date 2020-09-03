import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';

import App from './components/App';
import {Grommet} from "grommet";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GATEWAY_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('access_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Grommet plain>
      <App />
    </Grommet>
  </ApolloProvider>,
  document.getElementById('root'),
);
