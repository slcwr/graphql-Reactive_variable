"use strict";
// src/app/providers.tsx
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = Providers;
const client_1 = require("@apollo/client");
const apollo_client_1 = require("./lib/apollo-client");
const react_1 = __importDefault(require("react"));
function Providers({ children }) {
    return (<client_1.ApolloProvider client={apollo_client_1.client}>
      {children}
    </client_1.ApolloProvider>);
}
