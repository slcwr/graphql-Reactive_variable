// src/lib/apollo-client.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ApolloLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4001/graphql',
  credentials: 'include',
});

// エラーハンドリングの追加
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  },
});