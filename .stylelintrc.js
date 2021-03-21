module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'at-root',
          'content',
          'else',
          'extend',
          'function',
          'if',
          'include',
          'mixin',
          'return',
          'warn',
          'error',
          'each',
          'for',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export'],
      },
    ],
    'no-descending-specificity': [true, { severity: 'warning' }],
    'property-no-unknown': [true, { ignoreProperties: /.*/ }],
  },
};
