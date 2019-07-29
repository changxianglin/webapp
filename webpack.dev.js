const path = require('path')
const srcRoot = path.resolve(__dirname, './src')
const devPath = path.resolve(__dirname, 'dev')
const pageDir = path.resolve(__dirname, 'page')

module.exports = {
  entry: {},
  output: {},
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot},
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: srcRoot},
    ]
  }
}