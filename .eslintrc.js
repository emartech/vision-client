module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    'emarsys'
  ],
  rules: {
    'no-console': 0,
    // 'no-console': process.env.ENVIRONMENT === 'production' ? 'error' : 'off',
    'no-debugger': process.env.ENVIRONMENT === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
};
