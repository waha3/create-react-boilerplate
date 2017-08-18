// const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const chalk = require('chalk');

const app = express();
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'src/index.html'));
  res.end('hello world');
});

app.listen(3000, (err) => {
  if (err) {
    global.console.error(chalk.red(err));
  }
  global.console.log(`listening at ${chalk.blue('http://localhost:3000')}`);
});
