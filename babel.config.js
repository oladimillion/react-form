module.exports = {
  presets: [
    '@babel/env',
    '@babel/react'
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    'lodash',
    'styled-components',
  ],
  env: {
    'production-esm': {
      presets: [
        ['@babel/env', { 'modules': false }],
        '@babel/react'
      ]
    }
  },
  sourceMaps: true,
}
