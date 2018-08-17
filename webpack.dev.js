const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // good for illustrative purposes(though not for production)
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
})