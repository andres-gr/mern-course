const path = require('path');

const tsPath = path.resolve(__dirname, 'tsconfig.json');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:putout/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "overrides": [
    {
      "files": ["*.ts"],
      "rules": {
        "import/default": "off",
        "import/named": "off",
        "import/namespace": "off",
        "import/no-named-as-default-member": "off"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": tsPath
  },
  "plugins": [
    "module-resolver",
    "import",
    "putout",
    "sort-destructure-keys",
    "sort-exports"
  ],
  "rules": {
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "no-undef": "off",
    "no-console": "warn",
    "no-var": "error",
    "indent": "off",
    "semi": [
      "error",
      "never"
    ],
    "key-spacing": [
      "error",
      {
        "align": {
          "beforeColon": true,
          "afterColon": true,
          "on": "colon",
          "mode": "minimum"
        },
        "singleLine": {
          "beforeColon": false,
          "afterColon": true
        },
        "multiLine": {
          "beforeColon": false,
          "afterColon": true,
          "mode": "minimum"
        }
      }
    ],
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true
      }
    ],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ],
    "no-extra-parens": "off",
    "arrow-parens": [
      "error",
      "as-needed",
      {
        "requireForBlockBody": false
      }
    ],
    "no-nested-ternary": "off",
    "space-before-function-paren": "off",
    "no-underscore-dangle": "off",
    "max-len": "off",
    "one-var": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0
      }
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        "avoidQuotes": false,
        "avoidExplicitReturnArrows": false
      }
    ],
    "func-names": [
      "error",
      "as-needed"
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "multiline": true,
          "minProperties": 2,
          "consistent": true
        },
        "ObjectPattern": {
          "multiline": true,
          "minProperties": 2,
          "consistent": true
        },
        "ImportDeclaration": {
          "multiline": true,
          "minProperties": 2,
          "consistent": true
        },
        "ExportDeclaration": {
          "multiline": true,
          "minProperties": 2,
          "consistent": true
        }
      }
    ],
    "object-property-newline": [
      "error",
      {
        "allowAllPropertiesOnSameLine": false
      }
    ],
    "default-case": "off",
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": false
      }
    ],
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "padding-line-between-statements": "off",
    "nonblock-statement-body-position": [
      "error",
      "beside"
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        "caseSensitive": false,
        "natural": true,
        "minKeys": 2
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false
      }
    ],
    "array-element-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 2
      }
    ],
    "array-bracket-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 2
      }
    ],
    "no-void": "off",
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "consistent-return": "off",
    "import/order": "error",
    "@typescript-eslint/semi": [
      "error",
      "never"
    ],
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": {
          "let": 2,
          "const": 3
        },
        "MemberExpression": 1,
        "flatTernaryExpressions": true
      }
    ],
    "@typescript-eslint/space-before-function-paren": [
      "error",
      "always"
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": false
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": [
      "off",
      {
        "fixToUnknown": true,
        "ignoreRestArgs": true
      }
    ],
    "@typescript-eslint/no-extra-parens": [
      "error",
      "all",
      {
        "enforceForArrowConditionals": false,
        "nestedBinaryExpressions": false,
        "ignoreJSX": "multi-line"
      }
    ],
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        "allow": [
          "private-constructors",
          "protected-constructors",
        ]
      }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "putout/putout": "off",
    "putout/align-spaces": "off",
    "putout/destructuring-as-function-argument": "off",
    "putout/multiple-properties-destructuring": [
      "error",
      {
        "minProperties": 2
      }
    ],
    "putout/single-property-destructuring": "off",
    "putout/long-properties-destructuring": "error",
    "putout/keyword-spacing": "off",
    "module-resolver/use-alias": [
      "error",
      {
        "projectRoot": srcPath
      }
    ],
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-exports/sort-exports": [
      "error",
      {
        "sortDir": "asc",
        "ignoreCase": true
      }
    ]
  },
  "settings": {
    "import/extensions": [
      ".js",
      ".ts"
    ],
    "import/resolver": {
      "babel-module": {},
      "typescript": {
        "alwaysTryTypes": true,
        "directory": tsPath
      }
    }
  }
};
