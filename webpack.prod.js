const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.HashedModuleIdsPlugin(), // cause hashes to be based on the relative path of the module, generating a four character string as the module id.
    new MiniCssExtractPlugin({
      // options sinilar to the same options in webpackOptions.output, both options are options
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css'
    })
  ]
})