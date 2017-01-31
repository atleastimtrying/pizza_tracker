var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = module.exports = {
  debug: true,
  context: __dirname,
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  entry: './app/javascripts/entry.js',
  output:{
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {

    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],

    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader?{presets:["es2015"]}']
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }
    ]

  },
  plugins: [
    new WebpackNotifierPlugin(),
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ],
  
  eslint: {
    configFile: './.eslintrc'
  }
};
