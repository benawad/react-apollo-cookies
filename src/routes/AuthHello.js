import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const authHelloQuery = gql`
  {
    authHello
  }
`;

export default () => (
  <Query query={authHelloQuery}>
    {({ loading, data }) => (loading ? null : <div>{data.authHello}</div>)}
  </Query>
);
