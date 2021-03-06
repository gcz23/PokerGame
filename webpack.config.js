const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './client/src/main.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'webpack-bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.png/,
        loader: 'url-loader'
      }
    ]
  },
}
