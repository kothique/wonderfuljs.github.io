const { resolve } = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: resolve(__dirname, 'node_modules'),
        use: 'babel-loader'
      },
    ]
  },
  devtool: 'source-map',
  mode: 'development'
}