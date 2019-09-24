module.exports = {
  "extends": [
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    // This is necessary because otherwise it yields an error:
    // `Definition for rule '@typescript-eslint/consistent-type-assertions'
    // was not found  @typescript-eslint/consistent-type-assertions`
    "@typescript-eslint/consistent-type-assertions": 0
  }
}