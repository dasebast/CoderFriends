var app = angular.module('coderFriends', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})
	.when('/friend', {
		templateUrl: 'friend.html',
		controller: 'friendCtrl'
	})
	// .when('/friend/:github_username', {
	// 	templateUrl
	// })
	.otherwise('/home')
});	