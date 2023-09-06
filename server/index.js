const config = require('config');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const methodOverride = require('method-override');
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const jwt = require('./middleware/jwt');
const rtljs = require('rtljs');


const SERVER_PORT = config.get('server.port');
const SERVER_HOST = config.get('server.host');

var app = express();
app.use(express.static( "public" ));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// use JWT auth to secure the api
app.use(jwt());
app.use(session({
    secret: config.get('salt_secret'),
    resave: false,
    saveUninitialized: false
}));
app.use(methodOverride('_method'))

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

app.set('views', './views') // Define where Templates will live
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(logger);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // Add body-parser to app object
app.use(cookieParser()); // Activate use of cookies

// api routes
app.use('/api/users', require('./controllers/users.controller'));

// custom middleware logger
app.use(logger);

app.listen(SERVER_PORT, SERVER_HOST, function () {
    console.log(`Started application on ${SERVER_HOST}:${SERVER_PORT}`)
});