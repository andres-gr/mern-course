const alias = require('./webpack/alias');

module.exports = {
  presets: [
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
    [
      '@babel/preset-env',
      {
        corejs: {
          proposals: true,
          version: 3,
        },
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-proposal-decorators',
      { legacy: true },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      { loose: true },
    ],
    [
      'module-resolver',
      {
        alias,
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ],
      },
    ],
    'emotion',
    'react-hot-loader/babel',
  ],
};
