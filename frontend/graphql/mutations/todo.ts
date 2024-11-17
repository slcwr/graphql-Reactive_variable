// graphql/mutations/todo.ts
import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
  mutation CreateTodo($description: String!, $userId: Int!) {
    createTodo(description: $description, userId: $userId) {
      id
      description
      user {
        id
        username
      }
    }
  }
`;

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      description
      user {
        id
        username
      }
    }
  }
`;