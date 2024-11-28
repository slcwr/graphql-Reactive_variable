"use strict";
// src/components/LoginForm.tsx
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
exports.LoginForm = LoginForm;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const client_1 = require("@apollo/client");
const user_1 = require("../../graphql/mutations/user");
const navigation_1 = require("next/navigation");
const useLocalStorage_1 = require("../hooks/useLocalStorage");
const button_1 = require("../components/atoms/button/button");
const ErrorMessage_1 = require("../components/atoms/ErrorMessage/ErrorMessage");
const input_1 = require("../components/input/input");
const Form_1 = require("../components/molecules/Form/Form");
const Container_1 = require("../components/atoms/Container/Container");
function LoginForm() {
    const router = (0, navigation_1.useRouter)();
    const [username, setUsername] = (0, react_2.useState)('');
    const [password, setPassword] = (0, react_2.useState)('');
    const [error, setError] = (0, react_2.useState)('');
    const { saveToken, getToken } = (0, useLocalStorage_1.useLocalStorage)();
    const [loginMutation, { loading }] = (0, client_1.useMutation)(user_1.LOGIN_MUTATION, {
        onCompleted: (data) => {
            var _a;
            if ((_a = data.login) === null || _a === void 0 ? void 0 : _a.token) {
                saveToken(data.login.token);
                router.push('/todo?success=true');
            }
        },
        onError: (error) => {
            console.error('Login error:', error);
            setError(error.message);
        }
    });
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        e.preventDefault();
        setError(''); // エラーメッセージをリセット
        try {
            const { data } = yield loginMutation({
                variables: {
                    username,
                    password,
                },
            });
            if ((_a = data === null || data === void 0 ? void 0 : data.login) === null || _a === void 0 ? void 0 : _a.token) {
                saveToken(data.login.token);
                console.log('Stored token:', getToken());
                //router.push('/todo');
            }
        }
        catch (err) {
            console.error('Login error:', err);
            setError(err instanceof Error ? err.message : 'ログインに失敗しました');
        }
    });
    return (<Container_1.Container>
      <Form_1.Form onSubmit={handleSubmit}>
        <input_1.Input data-testid="username-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input_1.Input data-testid="password-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button_1.Button type="submit" data-testid="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button_1.Button>

        {error && (<ErrorMessage_1.ErrorMessage>
                    {error}
                </ErrorMessage_1.ErrorMessage>)}
      </Form_1.Form>
      </Container_1.Container>);
}
