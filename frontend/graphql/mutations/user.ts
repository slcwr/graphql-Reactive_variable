// src/graphql/mutations/user.ts
import { gql } from '@apollo/client';

// ユーザー作成
export const CREATE_USER = gql`
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
export const UPDATE_USER = gql`
  mutation UpdateUser($id: Int!, $username: String, $password: String) {
    updateUser(id: $id, username: $username, password: $password) {
      id
      username
      updatedAt
    }
  }
`;

// ユーザー削除
export const DELETE_USER = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
      username
    }
  }
`;

// ユーザー認証（ログイン）
export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;