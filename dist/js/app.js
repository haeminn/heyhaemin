angular.module('heyhaemin',['ui.router'])
.controller('mainController', [
	'$scope',
	'$location',
	'$state',
	'$window',
	function(
	$scope,
	$location,
	$state,
	$window){

	$scope.intro = false;
	$scope.doggoClick = false;
	$scope.namu_heart = false;

	$scope.funziesPageRoute = function()  {
	  
	  $state.go('funzies');
	  console.log("route to a new page");
	  //$window.location.reload();
	};

}]);
