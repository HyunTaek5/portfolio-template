module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './packages/tsconfig.settings.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    node: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './packages/tsconfig.settings.json'
      }
    }
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent', 'index']]
      }
    ],
    'prettier/prettier': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        allowExpressions: true
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        overrides: {
          constructors: 'no-public'
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase']
      },
      {
        selector: ['accessor', 'typeLike'],
        format: ['PascalCase']
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE']
      }
    ],
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_+', ignoreRestSiblings: true }],
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/require-await': 'warn'
  }
}
