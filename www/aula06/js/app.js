angular.module('AppModule', ['ngRoute'])

.controller('AppController', ['$scope', function($scope) {

}])

.config(['$routeProvider', function ($routeProvider) {        
    $routeProvider.
    	// CLIENTE
        when('/cliente-pesquisa', {
            templateUrl: 'partials/cliente-pesquisa.html',
            controller: 'AppController'
        }).
        when('/cliente-novo', {
            templateUrl: 'partials/cliente-novo.html',
            controller: 'AppController'
        }).
        when('/cliente-lista', {
            templateUrl: 'partials/cliente-lista.html',
            controller: 'AppController'
        }).
    	// PADRÃO
        when('/', {
            templateUrl: 'partials/saudacao.html',
            controller: 'AppController'
        }).
        otherwise({
            redirectTo: '/'
        });
}])

;       