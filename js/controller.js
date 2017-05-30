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
	$scope.default = true;

	$scope.funs = [
		{
			name: 'I love cooking', url: '#'
		},
		{
			name: 'Fitness', url: '#'
		}

		];

	$scope.funziesRoute = function()  {

      $state.go('funzies');
      console.log('routing to funzies page');
      $window.location.reload();
      
    };

}]);
