'use strict';
//var debug = require('debug');
import * as express from 'express';
import { AddressInfo } from 'net';
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./index');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

console.log(" starting,");

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('public/'));
//app.use(express.static(path.join(__dirname, 'public/')));
//app.use("/mls", express.static(path.join(__dirname, 'public/mls')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: any) {
    var err : any = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err: any, req: express.Request, res: express.Response, next: any) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err: any, req: express.Request, res: express.Response, next: any) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 5015);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' , server.address() ? (<AddressInfo>server.address()).port : "?");
});
