import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';

export default [
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
        window:  true
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
    ignores: ['node_modules/**', '.next/**', 'backend/src/generated/**','**/*.d.ts','backend/dist/**' ]
  }
];