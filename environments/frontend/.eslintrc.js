const path = require('path');

const tsPath = path.resolve(__dirname, 'tsconfig.json');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "airbnb-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:putout/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": tsPath
  },
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ],
  "plugins": [
    "module-resolver",
    "import",
    "putout",
    "sort-destructure-keys",
    "sort-exports",
    "react-hooks",
    "emotion"
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
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [
          "Link"
        ],
        "specialLink": [
          "hrefLeft",
          "hrefRight",
          "to"
        ],
        "aspects": [
          "invalidHref",
          "preferButton"
        ]
      }
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "controlComponents": [
          "FastField",
          "Field"
        ]
      }
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "always",
        "children": true,
        "allowMultiline": true,
        "spacing": {
          "objectLiterals": "never"
        }
      }
    ],
    "react/jsx-curly-newline": [
      "error",
      {
        "multiline": "require",
        "singleline": "forbid"
      }
    ],
    "react/forbid-prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-max-props-per-line": [
      "error",
      {
        "when": "always",
        "maximum": 1
      }
    ],
    "react/sort-comp": [
      "error",
      {
        "order": [
          "type-annotations",
          "static-variables",
          "static-methods",
          "instance-variables",
          "instance-methods",
          "lifecycle",
          "getters",
          "setters",
          "/^handle.+$/",
          "everything-else",
          "rendering"
        ],
        "groups": {
          "rendering": [
            "/^render.+$/",
            "render"
          ]
        }
      }
    ],
    "react/jsx-sort-default-props": [
      "error",
      {
        "ignoreCase": true
      }
    ],
    "react/sort-prop-types": [
      "error",
      {
        "callbacksLast": true,
        "ignoreCase": true,
        "requiredFirst": true,
        "sortShapeProp": true
      }
    ],
    "react/jsx-sort-props": [
      "error",
      {
        "callbacksLast": true,
        "ignoreCase": true,
        "shorthandFirst": true,
        "reservedFirst": [
          "key",
          "ref"
        ]
      }
    ],
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
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
      ".jsx",
      ".ts",
      ".tsx"
    ],
    "import/resolver": {
      "babel-module": {},
      "typescript": {
        "alwaysTryTypes": true,
        "directory": tsPath
      }
    },
    "react": {
      "version": "detect"
    }
  }
};
