var app = angular.module('coderFriends');

app.controller('homeCtrl', function($scope, githubService) {

	$scope.showFollowers = githubService.getFollowers();

	
	// DONT NEED
	// $scope.goToGit = function() {
	// 	console.log('hello');
	// 	githubService.gitLogin();
	// };

});