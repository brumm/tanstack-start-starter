import pluginJs from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRouter from '@tanstack/eslint-plugin-router'
import pluginReact from 'eslint-plugin-react'
import pluginSimpleSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import pluginTypeScriptEslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...pluginTypeScriptEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  ...pluginRouter.configs['flat/recommended'],
  ...pluginQuery.configs['flat/recommended'],

  { plugins: { 'simple-import-sort': pluginSimpleSort } },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unescaped-entities': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]
