var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./dotenv");
require("./connection/conn");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var restoRoute = require('./routes/resto');

var app = express();

var corsOptions = {
  origin: '*',
  methods: "*"
}
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/resto', restoRoute);


var test = __dirname.replace("\api","");

var distDir =  test+ "/dist/notus-angular";
app.use(express.static(distDir));

app.get("*", function(req, res) {
    res.sendFile(path.join(distDir, "index.html"))
});


module.exports = app;
