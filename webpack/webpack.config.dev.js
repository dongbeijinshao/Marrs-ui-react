const path = require('path');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config.base');

const baseDir = path.resolve(__dirname, '..');

const output = merge(base, {
  entry: [path.resolve(baseDir, './src/index.jsx')],
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: path.resolve(baseDir, './dist/index.html'),
      template: path.resolve(baseDir, './src/index.html')
    })
  ],
  target: 'web',
  devServer: {
    // contentBase: path.join(__dirname, 'public')
    host: '0.0.0.0',
    port: '8080',
    hot: true,
    historyApiFallback: true
  }
});

module.exports = output;
