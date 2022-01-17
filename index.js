module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: ['airbnb', 'airbnb-typescript'],
  plugins: ['react-hooks', 'jam3'],
  rules: {
    // Annoyances during development
    '@typescript-eslint/no-unused-vars': 'warn',
    'consistent-return': 'off',
    'no-trailing-spaces': 'warn',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'import/no-cycle': 'warn', // <-- FIXME: Remove when all errors are fixed
    'no-nested-ternary': 'off',

    // Prefer named exports
    'import/prefer-default-export': 'off',

    // Sanitize dangerous input
    'jam3/no-sanitizer-with-danger': 'error',
    'react/no-danger': 'off',

    // Requirement for microbundle to handle Fragments
    'react/jsx-fragments': ['error', 'syntax'],

    // Force adherence to rules of hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn', // <-- FIXME: Set to 'error' when all warnings are fixed

    // Proper naming for variables
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    // Setting max-length of lines except edge cases
    'max-len': [
      'error',
      {
        code: 120,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    // order the imports
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
  globals: {
    JSX: 'readonly',
  },
};
