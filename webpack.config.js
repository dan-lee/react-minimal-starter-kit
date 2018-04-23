const path = require('path')

const STATIC_PATH = path.join(__dirname, 'static')

module.exports = {
  entry: './src/index.js',
  output: {
    path:  STATIC_PATH,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  devServer: {
    contentBase: STATIC_PATH,
    publicPath: '/',
    historyApiFallback: true,
  },
}
