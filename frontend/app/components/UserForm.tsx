// src/components/UserForm.tsx
'use client';

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql/mutations/user';
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
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create User'}
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
}

