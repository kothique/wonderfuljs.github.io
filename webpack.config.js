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
      { from: './images/*', to: '.' }
    ])
  ],
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
          { loader: "html-loader", options: { attrs: false } },
          "pug-html-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, url: false } },
          'postcss-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    watchContentBase: true
  }
}