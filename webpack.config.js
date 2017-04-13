const path = require('path')
const webpack = require('webpack')

let plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
}
