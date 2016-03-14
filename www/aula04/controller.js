angular.module('MeuApp', [])

.controller('MeuController', ['$scope', function($scope) {

	$scope.cpf = null;
	$scope.email = '';
	$scope.nome = '';
	$scope.data_nascimento = '';
	$scope.modalidade = '';
	$scope.pace = '';

	$scope.tempoMedioEstimado = '0';
	
	$scope.isVazio = function (obj) {
		if(obj===null || obj==='') {
			return 'invalido';
		}
	};

	$scope.atualizarPace = function () {
		$scope.tempoMedioEstimado = $scope.modalidade * $scope.pace;
	};

	$scope.inscrever = function () {
		console.log('Inscrição efetuada com sucesso!');
		alert('Inscrição efetuada com sucesso!');
	};
}])

;