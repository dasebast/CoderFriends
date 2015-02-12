var app = angular.module('coderFriends');

app.service('githubService', function($http, $q) {

	this.getFollowers = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/github/following'
		})
		.then(function(res) {
			dfd.resolve(res.data);
		},
		function(err) {
			console.log('err', err);
		})
		return dfd.promise;
	};

	// DONT NEED
	// this.gitLogin = function() {
	// 	return $http.get('/api/gith');
	// };


});