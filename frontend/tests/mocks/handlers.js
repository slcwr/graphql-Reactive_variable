"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mocks = void 0;
const user_1 = require("@/graphql/mutations/user");
exports.mocks = [
    {
        request: {
            query: user_1.LOGIN_MUTATION,
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
