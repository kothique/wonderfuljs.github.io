const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './index.html', to: '.' }
    ])
  ],
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