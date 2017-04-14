const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const chalk = require('chalk');
const livereload = require('livereload');
const Exercise = require('./exercise');

module.exports = function (opts) {
  var server = livereload.createServer({
    exts: ['scss', 'html']
  });
  let pth = path.join(__dirname, '..', 'exercises', opts.exercise, '**/*');
  server.watch(pth);

  let app = express();
  app.set('view engine', 'hbs');

  let sassMw = sassMiddleware({
    /* Options */
    src:  path.join(__dirname, '..', 'exercises', opts.exercise, 'src', 'sass'),
    dest: path.join(__dirname, '..', 'exercises', opts.exercise, 'public'),
    outputStyle: 'expanded'
  });

  // Note: you must place sass-middleware *before* `express.static` or else it will
  // not work.
  let publicPath = path.join(__dirname, '..', 'exercises', opts.exercise, 'public');
  let viewsPath = path.join(__dirname, '..', 'exercises', opts.exercise, 'views');
  
  let staticMw = express.static(publicPath);

  const enforceHTTPS = (req, res, next) => {
    // Header indicates edge server received request over HTTPS
    if (req.headers['x-forwarded-proto'] === 'https'){
      return next();
    } else {
      console.log('redirecting HTTP --> HTTPS');
      // Did not come over HTTPS. Fix that!
      return res.redirect(301, path.join(`https://${req.hostname}${req.url}`));
    }
  };

  // const hbsMw = (req, res, next) => {
  //   console.log(req.path);
  //   res.render('index');
  // };
  app.set('views', viewsPath);


  if (process.env.USE_HTTPS) {
    console.log('redirecting HTTP --> HTTPS');
    app.use(enforceHTTPS);
  }
  app.use(sassMw);
  app.use('/', staticMw);
  app.use('/js', express.static(path.join(__dirname, '..', 'public', 'js')));
  app.use('/css', express.static(path.join(__dirname, '..', 'public', 'css')));
  
  var router = null
  try {
    router = require('../exercises/' + opts.exercise + '/router.js');
  } catch(e) {
    app.get('/', (req, res) => {
      res.render('index');
    });
  }
  if (router) {
    router(app);
    console.log('router loaded for exercise ' + opts.exercise);
  }


  
  new Exercise(opts.exercise).load().begin();

  app.listen(process.env.PORT || opts.port);
  console.log(chalk.yellow('Running on http://localhost:' + opts.port + '. Press Ctrl + c to stop'));
  return app;
}