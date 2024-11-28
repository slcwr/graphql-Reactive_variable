"use strict";
// src/components/UserForm.tsx
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
exports.UserForm = UserForm;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const client_1 = require("@apollo/client");
const user_1 = require("../../graphql/mutations/user");
const Form_1 = require("../components/molecules/Form/Form");
const input_1 = require("../components/input/input");
const button_1 = require("../components/atoms/button/button");
const ErrorMessage_1 = require("../components/atoms/ErrorMessage/ErrorMessage");
function UserForm() {
    const [username, setUsername] = (0, react_2.useState)('');
    const [password, setPassword] = (0, react_2.useState)('');
    const [error, setError] = (0, react_2.useState)('');
    const [createUser, { loading }] = (0, client_1.useMutation)(user_1.CREATE_USER, {
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
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield createUser({
                variables: {
                    username,
                    password,
                },
            });
        }
        catch (err) {
            console.error('Error creating user:', err);
        }
    });
    return (<Form_1.Form onSubmit={handleSubmit}>
      <input_1.Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
      <input_1.Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      <button_1.Button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create User'}
      </button_1.Button>
      {error && <ErrorMessage_1.ErrorMessage>{error}</ErrorMessage_1.ErrorMessage>}
    </Form_1.Form>);
}
