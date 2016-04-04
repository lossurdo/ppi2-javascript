angular.module('RandomUserModule', ['ExemploModule']).

controller('RandomUserController', ['$scope', '$http', 'ExemploService', function($scope, $http, ExemploService) {
	
	$scope.isOnline = false;	
	$scope.listaUsuarios = {
		results: []
	};
	$scope.pesquisa = '';

	$scope.init = function () {
		ExemploService.get(function ok(data) {
			$scope.listaUsuarios = data;
			$scope.isOnline = true;
		}, function nok(erro) {
			if(erro) {
				alert('Não consegui coletar os dados de usuários!');
			}
		});
	};

}]);