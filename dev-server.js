// when using Webpack Dev Server with the Node.js API, don't put the dev server options on the webpack config object.
// instead, pass them as a second parameter upon creation.
// For example: new WebpackDevServer(compiler, options)

const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config.js')
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
}

WebpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, options)

server.listen(5000, 'localhost', () => {
  console.log('webpack dev server listening on port 5000...')
})