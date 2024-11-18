// src/components/LoginForm.tsx
'use client';

import React from "react";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/mutations/user';

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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const [login, { loading }] = useMutation(LOGIN_USER, {
      onCompleted: (data) => {
        // トークンの保存とリダイレクトなどの処理
        localStorage.setItem('token', data.login.token);
        // ユーザー情報の保存やリダイレクトなどの処理
      },
    });
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await login({
          variables: {
            username,
            password,
          },
        });
      } catch (err) {
        console.error('Login error:', err);
      }
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
    );
  }