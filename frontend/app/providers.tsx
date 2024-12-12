// src/app/providers.tsx
'use client';

import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo-client';
import { Provider } from 'react-redux'
import { store } from './lib/store'
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
    </Provider>
  );
}

