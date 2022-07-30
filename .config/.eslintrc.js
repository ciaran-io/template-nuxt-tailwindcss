module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    // 'plugin:nuxt/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'prettier',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index','default'],
      },
    ],
  },
  // "ignorePatterns": ["client/pages/*.vue","client/layouts/*.vue"],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
