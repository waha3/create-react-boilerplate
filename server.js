const path = require('path');
const express = require('express');
const webpack = require('webpack');
const chalk = require('chalk');
const config = require('./webpack.config');
const webpackMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
});

app.use(middleware);

app.get('/', (req, res) => {
  middleware.fileSystem.readFile(path.join(compiler.outputPath, './src/index.html'), (err, file) => {
    if (err) {
      res.send(err);
    } else {
      res.send(file.toString());
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    global.console.error(chalk.red(err));
  }
  global.console.log(`listening at ${chalk.yellow('http://localhost:3000')}`);
});
