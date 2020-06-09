import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: process.env.APOLLO_CLIENT_URI,
});

export default client;
