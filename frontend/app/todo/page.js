"use strict";
// src/app/page.tsx
'use client';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const client_1 = require("@apollo/client");
const todo_1 = require("../../graphql/mutations/todo");
const Form_1 = require("../components/molecules/Form/Form");
const input_1 = require("../components/input/input");
const button_1 = require("../components/atoms/button/button");
const Title_1 = require("../components/atoms/Title/Title");
const Container_1 = require("../components/atoms/Container/Container");
const TodoList = styled_components_1.default.div `
  margin-bottom: 1rem; // mb-4
`;
const TodoItem = styled_components_1.default.div `
  padding: 0.5rem; // p-2
  margin-bottom: 0.5rem; // mb-2
  background-color: #f3f4f6; // bg-gray-100
  border-radius: 0.25rem; // rounded
`;
function Home() {
    const [newTodo, setNewTodo] = (0, react_2.useState)('');
    // GraphQLクエリとミューテーションの設定
    const { data, loading, error } = (0, client_1.useQuery)(todo_1.GET_TODOS);
    const [createTodo] = (0, client_1.useMutation)(todo_1.CREATE_TODO, {
        refetchQueries: [{ query: todo_1.GET_TODOS }], // 作成後にリストを更新
    });
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        if (newTodo.trim()) {
            try {
                yield createTodo({
                    variables: {
                        description: newTodo,
                        userId: 1, // ここは実際のユーザーIDに置き換える
                    },
                });
                setNewTodo('');
            }
            catch (err) {
                console.error('Error creating todo:', err);
            }
        }
    });
    if (loading)
        return <div>Loading...</div>;
    if (error)
        return <div>Error: {error.message}</div>;
    return (<Container_1.Container>
      <Title_1.Title>Welcome to Todo List</Title_1.Title>
  
      <TodoList>
        {data === null || data === void 0 ? void 0 : data.todos.map((todo) => (<TodoItem key={todo.id}>
            {todo.description}
            <small> - by {todo.user.username}</small>
          </TodoItem>))}
      </TodoList>

      <Form_1.Form onSubmit={handleSubmit}>
        <input_1.Input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new todo"/>
        <button_1.Button type="submit">Add</button_1.Button>
      </Form_1.Form>
    </Container_1.Container>);
}
