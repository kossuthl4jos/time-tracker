const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');

const lintLoader = 'eslint-loader?failOnError=true';
const cssLoaders = ['vue-style-loader', CssExtractPlugin.loader, 'css-loader', 'postcss-loader'];

module.exports = {
  resolve: {
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'test': path.resolve(__dirname, '../test')
    }
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'app'), 'node_modules']
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: lintLoader, enforce: 'pre', exclude: /node_modules/ }, // Lint local .vue files first
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, use: ['babel-loader', lintLoader], exclude: /node_modules/ },
      { test: /\.less$/, use: cssLoaders.concat('less-loader') },
      { test: /\.css$/, use: cssLoaders },
      { test: /\.woff(2)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]' },
      { test: /\.(ttf|eot|svg)$/, loader: 'file-loader?name=fonts/[hash].[ext]' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png&name=images/[hash].[ext]' }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' }),
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  devtool: '#source-map'
};
