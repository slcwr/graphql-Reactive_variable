'use client';

import { LoginForm } from '../components/LoginForm';
import { Title } from "../components/atoms/Title/Title";

export default function LoginPage() {
  return (
    <div>
      <Title>Login</Title>
      <LoginForm />
    </div>
  );
}