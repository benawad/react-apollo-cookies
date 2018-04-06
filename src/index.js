import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";

const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include"
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
