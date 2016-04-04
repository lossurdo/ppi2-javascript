angular.module('RandomUserModule', []).

controller('RandomUserController', ['$scope', '$http', function($scope, $http) {
	
	$scope.isOnline = false;	
	$scope.listaUsuarios = {
		results: []
	};
	$scope.pesquisa = '';

	/*
		Lendo arquivo LOCAL
	*/
	var tentativaOffline = function () {
		$http({
			method: 'GET',
			url: 'json/randomuser.me.json'
		}).
		then(function (response) {			
			$scope.listaUsuarios = response.data;
		}, function (response) {
			alert('Tentativa online e offline falharam!');
		});
	};

	/*
		Lendo API na internet
	*/
	$scope.init = function () {
		$http({
			method: 'GET',
			url: 'https://randomuser.me/api/?results=20'
		}).
		then(function (response) {			
			$scope.listaUsuarios = response.data;
			$scope.isOnline = true;
		}, function (response) {
			tentativaOffline();
		});
	};

}]);