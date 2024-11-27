// src/app/page.tsx
'use client';
import React from "react";
import { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_TODO, GET_TODOS } from '../../graphql/mutations/todo';
import { Form } from "../components/molecules/Form/Form";
import { Input } from "../components/input/input";
import { Button } from "../components/atoms/button/button";
import { Title } from "../components/atoms/Title/Title";
import { Container } from "../components/atoms/Container/Container";




const TodoList = styled.div`
  margin-bottom: 1rem; // mb-4
`;

const TodoItem = styled.div`
  padding: 0.5rem; // p-2
  margin-bottom: 0.5rem; // mb-2
  background-color: #f3f4f6; // bg-gray-100
  border-radius: 0.25rem; // rounded
`;


interface Todo {
  id: number;
  description: string;
  user: {
    id: number;
    username: string;
  };
}

export default function Home() {
  const [newTodo, setNewTodo] = useState('');
  
  // GraphQLクエリとミューテーションの設定
  const { data, loading, error } = useQuery(GET_TODOS);
  const [createTodo] = useMutation(CREATE_TODO, {
    refetchQueries: [{ query: GET_TODOS }], // 作成後にリストを更新
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      try {
        await createTodo({
          variables: {
            description: newTodo,
            userId: 1, // ここは実際のユーザーIDに置き換える
          },
        });
        setNewTodo('');
      } catch (err) {
        console.error('Error creating todo:', err);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <Title>Welcome to Todo List</Title>
  
      <TodoList>
        {data?.todos.map((todo: Todo) => (
          <TodoItem key={todo.id}>
            {todo.description}
            <small> - by {todo.user.username}</small>
          </TodoItem>
        ))}
      </TodoList>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <Button type="submit">Add</Button>
      </Form>
    </Container>
  );
}