"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TODOS = exports.CREATE_TODO = void 0;
// graphql/mutations/todo.ts
const client_1 = require("@apollo/client");
exports.CREATE_TODO = (0, client_1.gql) `
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
exports.GET_TODOS = (0, client_1.gql) `
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
