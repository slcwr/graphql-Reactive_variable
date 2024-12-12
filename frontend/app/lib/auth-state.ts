// src/lib/auth-state.ts
import { makeVar } from '@apollo/client';

export interface AuthState {
  isLoggedIn: boolean;
  user?: {
    id: string;
    name: string;
  };
}

export const authStateVar = makeVar<AuthState>({
  isLoggedIn: false,
});
