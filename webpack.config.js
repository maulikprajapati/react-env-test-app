const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { dependencies } = require('./package.json');
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sharedDependencies = {};

Object.keys(dependencies).forEach((element) => {
  sharedDependencies[element] = {
    requiredVersion: dependencies[element],
    eager: false,
    singleton: true,
  };
});

const federationConfig = {
  name: 'marketplace',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/index',
  },
  // remotes: {
  //   @Shared: 'sharedlib@http://localhost:3002/remoteEntry.js',
  // },
};

module.exports = {
  entry: './src/index',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.[chunkhash].js',
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3001,
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: false,
                noEmit: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new FederatedTypesPlugin({ federationConfig, disableDownloadingRemoteTypes: false }),
    new Dotenv({
      systemvars: true,
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      assets: './public/assets',
      hash: true,
      publicPath: '/',
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    preferAbsolute: true,
    alias: {
      lib: path.resolve(__dirname, 'src/lib/'),
      ui: path.resolve(__dirname, 'src/ui/'),
      providers: path.resolve(__dirname, 'src/providers/'),
      helpers: path.resolve(__dirname, 'src/helpers/'),
      'graphql-client': path.resolve(__dirname, 'src/graphql-client/'),
    },
    roots: [path.resolve(__dirname, 'src')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fallback: {
      'SharedLib/*': [path.resolve(__dirname, '@mf-types/SharedLib/_types/')],
    },
  },
  target: 'web',
};
