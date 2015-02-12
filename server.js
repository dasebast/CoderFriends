var express = require('express');
var session = require('express-session');
var firebase = require('firebase');
var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var GitHubApi = require('github');

var app = express();
var port = 9027;

var github = new GitHubApi({
	version: "3.0.0"
});

app.use(express.static(__dirname + '/public'));

app.use(session({secret: 'mysecret'}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

passport.use(new GithubStrategy({
	clientID: '7228cbed2bcdfdedf2d9',
	clientSecret: '1d55d43b3104189d79f43261e328b86a779647b4',
	callbackUrl: '/auth/github/callback'
}, function(token, refreshToken, profile, done) {
	return done(null, profile);
}));

var isAuthed = function(req, res, next) {
	if(!req.isAuthenticated()) {
		return res.redirect('/failure');
	} else {
		next();
	}
};



app.get('/auth/github',
		 passport.authenticate('github'));

app.get('/auth/github/callback', 
		passport.authenticate('github',
			 {
			 	successRedirect: '/#/home',
			 	failureRedirect: '/failure'
			 }));




app.get('/api/github/following', isAuthed, function(req, res) {


	github.user.getFollowingFromUser({
		user: "dasebast"
	}, function(err, response) {
		console.log(err);
		console.log(response);
		res.send(response);
	});

});


app.listen(port, function() {
	console.log("Now listening on port: " + port);
});