angular.module('AppModule', ['ngRoute', 'RandomUserModule'])

.controller('AppController', ['$scope', function($scope) {

}])

.config(['$routeProvider', function ($routeProvider) {        
    $routeProvider.
    	// PADRÃO
        when('/', {
            templateUrl: 'partials/randomuser.me.html',
            controller: 'RandomUserController'
        }).
        // PÁGINA NÃO PREVISTA
        when('/nao-achei', {
            templateUrl: 'partials/nao-achei.html'
        }).
        otherwise({
            redirectTo: '/nao-achei'
        });
}])

;       