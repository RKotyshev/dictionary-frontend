// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const stylisticJs = require('@stylistic/eslint-plugin-js');

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "df",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "df",
          style: "kebab-case",
        },
      ],
      "@stylistic/js/max-len": ["error",
        {
          code: 120,
          tabWidth: 2,
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            accessors: "explicit",
            constructors: "off",
            methods: "explicit",
            properties: "explicit",
            parameterProperties: "explicit",
          },
        }
      ],
      "@typescript-eslint/no-empty-function": [
        "error",
        {
          allow: ["constructors"],
        }
      ],
      "@typescript-eslint/explicit-function-return-type": "error"
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
