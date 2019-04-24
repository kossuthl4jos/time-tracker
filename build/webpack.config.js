const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.base.config');
const devServer = require('./dev-server.config');

const publicPath = process.env.PUBLIC_PATH || process.env.npm_package_config_default_public_path;
const distPath = path.resolve(__dirname, '../dist');

const plugins = process.env.ANALYZE ? [new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  generateStatsFile: true
})] : [];

module.exports = merge(baseConfig, {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: distPath,
    publicPath,
    filename: '[name]-[hash].js'
  },
  optimization: {
    splitChunks: { chunks: 'all' }
  },
  node: {
    fs: 'empty'
  },
  plugins: plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    // Allow client code to access publicPath via process.env.PUBLIC_PATH as a constant at build time
    new webpack.DefinePlugin({
      'process.env.PUBLIC_PATH': JSON.stringify(publicPath)
    })
  ]),
  devServer: merge(devServer, {
    historyApiFallback: {
      index: publicPath
    }
  })
});
