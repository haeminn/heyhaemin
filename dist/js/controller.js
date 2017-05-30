angular.module('heyhaemin')
.controller('mainController', [
	'$scope',
	'$location',
	'$window',
	'$state',
	function(
	$scope,
	$location,
	$window,
	$state){

	$scope.intro = false;
	$scope.doggoClick = false;
	$scope.namu_heart = false;

	$scope.funziesRoute = function()  {

      $state.go('funzies');
      console.log('routing to funzies page');
      $window.location.reload();
      
    };

}]);
