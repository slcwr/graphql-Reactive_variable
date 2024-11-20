// src/components/LoginForm.tsx
'use client';

import React from "react";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../graphql/mutations/user';
import { useRouter } from 'next/navigation'; 

import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0051a2;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.5rem;
`;

export function LoginForm() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
      onCompleted: (data) => {
        if (data.login?.token) {
          localStorage.setItem('token', data.login.token);
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
  
        if (data?.login?.token) {
          localStorage.setItem('token', data.login.token);
          console.log('Stored token:', localStorage.getItem('token'));
          //router.push('/todo');
        }
      } catch (err) {
        console.error('Login error:', err);
        setError(err instanceof Error ? err.message : 'ログインに失敗しました');
      }
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          data-testid="username-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          data-testid="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" data-testid="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
    );
  }