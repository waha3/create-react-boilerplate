const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
// const webpackMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);

// app.use(webpackMiddleware(compiler({
//   noInfo: false,
//   quiet: false,
//   lazy: true,
//   publicPath: config.output.publicPath
// })));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('listening at http://localhost:3000');
});
