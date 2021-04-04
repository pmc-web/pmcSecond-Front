module.exports = {
  extends: ["airbnb-typescript-prettier"],
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "jsx-a11y/accessible-emoji": "off",
    "react-hooks/exhaustive-deps": "off",
    semi: ["error", "never"],
    "react/jsx-props-no-spreading": "off",
  },
  settings: {
    "import/resolver": "webpack",
  },
};
