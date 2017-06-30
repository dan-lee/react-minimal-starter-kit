const path = require('path')
const webpack = require('webpack')
const ENV = process.env.NODE_ENV || 'development'
const appendIf = (cond, ...items) => cond ? items : []

const plugins = [
  ...appendIf(ENV !== 'production', new webpack.HotModuleReplacementPlugin())
]

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: plugins,
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [
        'react-hot-loader/webpack',
        'babel-loader'
      ],
    }]
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'static'),
    publicPath: '/'
  }
}
