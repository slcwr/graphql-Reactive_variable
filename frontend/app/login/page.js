"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginPage;
const LoginForm_1 = require("../components/LoginForm");
const Title_1 = require("../components/atoms/Title/Title");
function LoginPage() {
    return (<div>
      <Title_1.Title>Login</Title_1.Title>
      <LoginForm_1.LoginForm />
    </div>);
}
