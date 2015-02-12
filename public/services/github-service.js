var app = angular.module('coderFriends');

app.service('githubService', function($http) {

	this.getFollowers = function() {
		return $http.get('/api/github/following');
	};


	// DONT NEED
	// this.gitLogin = function() {
	// 	return $http.get('/auth/github/callback');
	// };


});