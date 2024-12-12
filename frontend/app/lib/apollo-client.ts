// src/lib/apollo-client.ts
import { 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink, 
  makeVar 
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ApolloLink } from '@apollo/client';

// Reactive Variablesの定義
export const isLoggedInVar = makeVar<boolean>(false);
export const userVar = makeVar<any>(null);

// キャッシュの設定
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // Reactive Variablesのフィールド定義
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          }
        },
        user: {
          read() {
            return userVar();
          }
        }
      }
    }
  }
});

const httpLink = createHttpLink({
  uri: 'http://localhost:4001/graphql',
  credentials: 'include',
});

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
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  },
});
