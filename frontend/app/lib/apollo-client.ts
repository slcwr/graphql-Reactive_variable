// lib/apollo-client.ts

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4001/graphql', // バックエンドのURLが正しいか確認
  credentials: 'include' // 必要に応じて
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
  },
});