module.exports = {
  'extends': [
    'eslint:recommended',
  ],
  'rules': {
    // Start JS
    'indent': [
      'error',
      2.
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'no-unsafe-negation': 'error',
    'block-scoped-var': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eqeqeq': ['error', 'always', {'null': 'ignore'}],
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    // 'no-magic-numbers': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-with': 'error',
    'radix': 'error',
    'require-await': 'error',
    'yoda': 'error',
    'no-catch-shadow': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-use-before-define': 'error',
    'array-bracket-spacing': ['error', 'always', { 'objectsInArrays': false }],
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'func-call-spacing': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'strict'
      }
    ],
    'keyword-spacing': ['error', { 'before': true }],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', {
      code: 80,
      ignoreTemplateLiterals: true
    }],
    'multiline-ternary': ['error', 'never'],
    'new-cap': ['error', { 'capIsNewExceptions': ['List', 'Map'] }],
    'new-parens': 'error',
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': ['error', { 'allowAfterThis': true }],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { 'minProperties': 2, 'consistent': true }],
    'object-property-newline': ['error'],
    'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false }],
    'operator-linebreak': ['error', 'after'],
    'quote-props': ['error', 'consistent-as-needed'],
    'semi-spacing': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    // End JS
  }
};
