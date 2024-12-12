// src/hooks/useAuth.ts
import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar, userVar } from '../lib/apollo-client';

export const useAuth = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const user = useReactiveVar(userVar);

  const login = (userData: any, token: string) => {
    localStorage.setItem('token', token);
    userVar(userData);
    isLoggedInVar(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    userVar(null);
    isLoggedInVar(false);
  };

  return {
    isLoggedIn,
    user,
    login,
    logout
  };
};

