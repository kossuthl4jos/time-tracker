const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      { test: /\.css$/, loader: 'null-loader' },
      { test: /\.less$/, loader: 'null-loader' }
    ]
  },
  devtool: '#inline-source-map'
});
