// src/app/page.tsx
'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_TODO, GET_TODOS } from '../graphql/mutations/todo';

// スタイル付きコンポーネントの定義
const Container = styled.div`
  max-width: 28rem; // max-w-md
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 1.5rem; // text-2xl
  font-weight: bold;
  margin-bottom: 1rem; // mb-4
`;

const TodoList = styled.div`
  margin-bottom: 1rem; // mb-4
`;

const TodoItem = styled.div`
  padding: 0.5rem; // p-2
  margin-bottom: 0.5rem; // mb-2
  background-color: #f3f4f6; // bg-gray-100
  border-radius: 0.25rem; // rounded
`;

const Form = styled.form`
  display: flex;
  gap: 0.5rem; // gap-2
`;

const Input = styled.input`
  flex: 1; // flex-1
  padding: 0.5rem; // p-2
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem; // rounded
`;

const Button = styled.button`
  padding: 0.5rem 1rem; // px-4 py-2
  background-color: #3b82f6; // bg-blue-500
  color: white;
  border-radius: 0.25rem; // rounded
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2563eb; // hover:bg-blue-600
  }
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