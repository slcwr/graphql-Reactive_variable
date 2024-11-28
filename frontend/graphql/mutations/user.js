"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_MUTATION = exports.DELETE_USER = exports.UPDATE_USER = exports.CREATE_USER = void 0;
// src/graphql/mutations/user.ts
const client_1 = require("@apollo/client");
// ユーザー作成
exports.CREATE_USER = (0, client_1.gql) `
  mutation CreateUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
      createdAt
      updatedAt
      todos {
        id
        description
      }
    }
  }
`;
// ユーザー更新
exports.UPDATE_USER = (0, client_1.gql) `
  mutation UpdateUser($id: Int!, $username: String, $password: String) {
    updateUser(id: $id, username: $username, password: $password) {
      id
      username
      updatedAt
    }
  }
`;
// ユーザー削除
exports.DELETE_USER = (0, client_1.gql) `
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
      username
    }
  }
`;
// ユーザー認証（ログイン）
exports.LOGIN_MUTATION = (0, client_1.gql) `
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
         todos {
          id
          description
        }
      }
    }
  }
`;
