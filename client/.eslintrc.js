module.exports = {
  parser: 'babel-eslint',
  extends: ['react-tools', 'prettier', 'prettier/react'],

  plugins: ['prettier'],

  rules: {
    'no-underscore-dangle': 'off',

    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],

    'import/no-extraneous-dependencies': 'off',

    'react/sort-comp': 'off',

    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier#options
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
