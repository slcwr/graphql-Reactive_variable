// tests/mocks/handlers.ts
import { MockedResponse } from '@apollo/client/testing';
import { LOGIN_MUTATION } from '@/graphql/mutations/user';

export const mocks: ReadonlyArray<MockedResponse> = [
  {
    request: {
      query: LOGIN_MUTATION,
      variables: {
        username: 'testuser',
        password: 'password123'
      }
    },
    result: {
      data: {
        login: {
          token: 'fake-token',
          user: {
            id: 1,
            username: 'testuser',
            todos: [
              {
                id: 1,
                description: 'Test todo 1',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                userId: 1,
                user: {
                  id: 1,
                  username: 'testuser',
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString()
                }
              }
            ],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        }
      }
    }
  }
];