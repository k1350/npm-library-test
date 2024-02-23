module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-duplicate-imports': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            allowAny: false,
            allowBoolean: false,
            allowNever: false,
            allowNullish: false,
            allowNumber: true,
            allowRegExp: false,
          },
        ],
      },
    },
  ],
};
