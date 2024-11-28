// src/components/UserForm.tsx
'use client';

import React from "react";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql/mutations/user';
import Form from "../components/molecules/Form/Form";
import Input from "../components/input/input";
import Button from "../components/atoms/Button/Button";
import ErrorMessage from "../components/atoms/ErrorMessage/ErrorMessage";


export function UserForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      console.log('User created:', data);
      setUsername('');
      setPassword('');
      setError('');
    },
    onError: (error) => {
      console.error('Login error:', error);
      setError(error.message);
    },
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser({
        variables: {
          username,
          password,
        },
      });
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create User'}
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
}

