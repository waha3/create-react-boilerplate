const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/main.js',
  ],
  output: {
    path: path.resovle(__dirname, 'dist'),
    filename: `bundle.${hash}.js`
  },
  // dev
  devtool: 'source-map'
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resovle(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
