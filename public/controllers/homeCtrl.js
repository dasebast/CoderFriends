var app = angular.module('coderFriends');

app.controller('homeCtrl', function($scope, githubService) {

	githubService.getFollowers().then(function(res) {
		console.log(res);
		$scope.friends = res;
	});


	// DONT NEED
	$scope.goToGit = function() {
		console.log('hello');
		githubService.gitLogin();
	};

});