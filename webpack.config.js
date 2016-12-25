const BabiliPlugin = require('babili-webpack-plugin')

let plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(new BabiliPlugin())
}

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: 'static/js',
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
