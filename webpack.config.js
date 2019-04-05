const webpack = require('webpack');
const path = require('path');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

module.exports = {
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'imports'),
          path.resolve(__dirname, 'lib'),
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'preferences')
        ],
        loader: 'babel-loader',
        options: {
          babelrc: true
        },
        test: /\.js$/
      }
    ]
  },
  entry: {
    extension: './src/index.js',
    prefs: './preferences/index'
  },

  output: {
    filename: '[name].js'
  },

  node: {
    global: false
  },

  mode: 'production',

  optimization: {
    minimize: false
  }
};
