const next = require('next');
const { config } = require('./config/index');
const routes = require('./router');
const app_express = next({dev: config.dev});
const handler = routes.getRequestHandler(app_express);
const router = require('./network/router-api');
const passport = require('passport');
const session = require('express-session');
const helmet = require('helmet');
// express
const express = require('express');
var app = express();

app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());

router(app);

app_express.prepare().then(() => {
  app.use(handler).listen(config.port)
  console.log('escuchando en el puerto '+ config.port);
});