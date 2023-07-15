module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": ["error", { trailingComma: "all" }],
    "react/function-component-definition": "off",
    "no-unused-vars": "off",
    "linebreak-style": 0,
    "import/no-dynamic-require": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "global-require": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx"] }],
    "import/extensions": 0,
    "no-use-before-define": 0,
    "no-shadow": "off",
    "react/prop-types": "off",
    "no-empty-pattern": 0,
    "no-alert": 0,
    "react-hooks/exhaustive-deps": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: [],
        labelAttributes: ["htmlFor"], // 수정된 부분
        controlComponents: [],
        assert: "htmlFor",
        depth: 25,
      },
    ],
  },
};
