module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember/use-ember-get-and-set': 0,
    'ember/named-functions-in-promises': [2, {
      allowSimpleArrowFunction: true
    }],
    'ember/order-in-components': [2, {
      order: [
        'service',
        'property',
        'lifecycle-hook',
        'single-line-function',
        'multi-line-function',
        'observer',
        'actions',
        'method',
      ]
    }]
  }
};
