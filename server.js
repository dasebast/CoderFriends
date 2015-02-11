var express = require('express');
var session = require('express-session');
var firebase = require('firebase');
var passport = require('passport');
var github = require('passport-github');

var app = express();
var port = 9027;

app.use(express.static(__dirname + '/public'));






app.listen(port, function() {
	console.log("Now listening on port: " + port);
});