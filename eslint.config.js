import { FlatCompat } from '@eslint/eslintrc';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginAstro from 'eslint-plugin-astro';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'eslint.config.js'],
  },

  ...compat.extends('airbnb-base'),

  {
    rules: {
      'object-curly-newline': 'off',
      'operator-linebreak': 'off',
      'implicit-arrow-linebreak': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': ['error', 'ignorePackages', {
        js: 'never', mjs: 'never', ts: 'never', tsx: 'never', astro: 'never',
      }],
      'no-console': ['error', { allow: ['error', 'warn'] }],
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', 'accumulator', 'e', 'ctx', 'req', 'request', 'res', 'response',
          'el', 'elem', 'element', 'wrap', 'node', 'ref',
        ],
      }],
    },
  },

  {
    files: ['**/*.ts', '**/*.astro'],
    plugins: { '@typescript-eslint': tsPlugin },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: { project: './tsconfig.json' },
      },
    },
  },

  {
    files: ['**/*.astro'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^Props$' }],
      'max-len': ['error', { code: 120, ignoreTemplateLiterals: true, ignoreStrings: true }],
    },
  },

  ...pluginAstro.configs['flat/recommended'],
];
