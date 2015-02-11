var app = angular.module('coderFriends', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'home.html',
		controller: 'homeCtrl'
	})
	.when('friend', {
		templateUrl: 'friend.html',
		controller: 'friendCtrl'
	})
	.otherwise('/home')
});