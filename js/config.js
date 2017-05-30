angular.module('heyhaemin')
.config(['$stateProvider',  
	'$urlRouterProvider', 
	'$locationProvider', 
	function($stateProvider,
		$urlRouterProvider,
		$locationProvider) {

		$locationProvider.html5Mode({
		    enabled: true,
		    requireBase: false
		});

		$stateProvider
		.state('funzies', {
		    url:'/funzies.html',
		    controller: 'mainController'
		});
  		$urlRouterProvider.otherwise('/');
}]);