import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});
export default [
  ...compat.config({
    extends: ['next/core-web-vitals']
  }),
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: true,
        process: true,
        window:  true,
        __dirname: true
      }
    },
    rules: {
      'no-unused-vars': ['warn', { 
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }]
    }
  },
  {
    ignores: ['node_modules/**', '.next/**', 'backend/src/generated/**','**/*.d.ts','backend/dist/**','frontend/cypress/**' ]
  }
  
];