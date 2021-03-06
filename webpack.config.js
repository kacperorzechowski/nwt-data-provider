const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app'),
    }
  },
  entry: {
    server: './app/server.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
