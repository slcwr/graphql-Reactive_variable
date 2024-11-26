import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'warn' // エラーから警告に変更
    }
  },
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**','backend/src/generated/**' ]
  }
];