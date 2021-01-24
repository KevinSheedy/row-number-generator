module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google", "prettier"],
  rules: {
    quotes: ["error", "double"],
  },
};
