const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const alias = require('./alias');
const rootPath = require('./path');

const config = ({
  env,
  isDev,
}) => ({
  entry: [
    'react-hot-loader/patch',
    path.join(rootPath, 'src/index.tsx'),
  ],
  output: {
    path: path.join(rootPath, 'dist'),
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            const package = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            const packageName = package.replace('@', '');
            return `npm.${packageName}`;
          },
        },
      },
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
      formatter: 'codeframe',
    }),
    new MiniCSSExtractPlugin({
      chunkFilename: isDev ? '[id].css' : '[id]-[contenthash].css',
      filename: isDev ? '[name].css' : '[name]-[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      favicon: path.join(rootPath, 'src/public/favicon.ico'),
      inject: true,
      template: path.join(rootPath, 'src/public/index.html'),
    }),
    new webpack.HashedModuleIdsPlugin(),
    new Dotenv({
      path: path.join(rootPath, `.env.${env}`),
      safe: false,
      systemvars: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: 'worker-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: { hmr: isDev },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ya?ml$/,
        use: [
          'json-loader',
          'yaml-loader',
        ],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              emitError: false,
              emitWarning: isDev,
              failOnError: true,
              failOnWarning: false,
            },
          },
        ],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: 'url-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    alias,
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
  },
});

module.exports = config;
