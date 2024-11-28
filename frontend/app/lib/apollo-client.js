"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// src/lib/apollo-client.ts
const client_1 = require("@apollo/client");
const error_1 = require("@apollo/client/link/error");
const client_2 = require("@apollo/client");
const httpLink = (0, client_1.createHttpLink)({
    uri: 'http://localhost:4001/graphql',
    credentials: 'include',
});
// エラーハンドリングの追加
const errorLink = (0, error_1.onError)(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});
const link = client_2.ApolloLink.from([errorLink, httpLink]);
exports.client = new client_1.ApolloClient({
    link,
    cache: new client_1.InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'network-only',
        },
        mutate: {
            fetchPolicy: 'no-cache',
        },
    },
});
