// src/components/LoginForm.tsx
'use client';

import React from "react";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../graphql/mutations/user';
import { useRouter } from 'next/navigation'; 
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button  from "../components/atoms/Button/Button";
import ErrorMessage from "../components/atoms/ErrorMessage/ErrorMessage";
import Input  from "../components/input/input";
import Form  from "../components/molecules/Form/Form";
import Container from "../components/atoms/Container/Container";
import { useAuth } from '../hooks/useAuth';



export function LoginForm() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { saveToken, getToken } = useLocalStorage();
    const { login } = useAuth();
    const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
        onCompleted: (data) => {
            if (data.login?.token) {
                saveToken(data.login.token);
                login(data.login.user, data.login.token);
                router.push('/todo?success=true');
            }
        },
      onError: (error) => {
        console.error('Login error:', error);
        setError(error.message);
      }
    });
  

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(''); // エラーメッセージをリセット
  
      try {
        const { data } = await loginMutation({
          variables: {
            username,
            password,
          },
        });
        login('userId', 'userName');
  
        if (data?.login?.token) {
          saveToken(data.login.token);
          console.log('Stored token:', getToken());
          //router.push('/todo');
        }
      } catch (err) {
        console.error('Login error:', err);
        setError(err instanceof Error ? err.message : 'ログインに失敗しました');
      }
    };
  
    return (
      <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          data-testid="username-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
        <Input
          data-testid="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <Button type="submit" data-testid="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>

        {error && ( 
                <ErrorMessage>
                    {error}
                </ErrorMessage>
            )}
      </Form>
      </Container>
    );
  }