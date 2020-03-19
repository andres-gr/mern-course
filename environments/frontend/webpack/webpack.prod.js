const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash:8].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: { ecma: 6 },
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
};

module.exports = config;
