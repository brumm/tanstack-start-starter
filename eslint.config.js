// @ts-check
import eslintReact from '@eslint-react/eslint-plugin'
import eslintJs from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import eslintTanStack from '@tanstack/eslint-plugin-router'
import pluginSimpleSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  files: ['**/*.ts', '**/*.tsx'],
  extends: [
    eslintJs.configs.recommended,
    tseslint.configs.recommended,
    eslintReact.configs['recommended-typescript'],
    eslintTanStack.configs['flat/recommended'],
    pluginQuery.configs['flat/recommended'],
  ],
  plugins: { 'simple-import-sort': pluginSimpleSort },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
  rules: {},
})
