const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const chalk = require('chalk');

const fs = require('fs');

const app = express();
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  index: './app/index.html'
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  // console.log(middleware);
  res.sendFile(path.join(__dirname, 'src/index.html'));
  // fs.readFileSync(middleware.fileSystem)

  // res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
  // res.end();
});

app.listen(3000, (err) => {
  if (err) {
    console.error(chalk.red(err));
  }
  console.log(`listening at ${chalk.blue('http://localhost:3000')}`);
});
