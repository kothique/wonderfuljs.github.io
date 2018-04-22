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
      {
        test: /\.pug$/,
        use: [
          "file-loader?name=[path][name].html",
          "extract-loader",
          "html-loader",
          "pug-html-loader"
        ]
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
}