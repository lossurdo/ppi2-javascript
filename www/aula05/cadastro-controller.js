angular.module('CadastroApp', [])

.controller('CadastroController', ['$scope', function($scope){
	
	$scope.produto = {};

	// conteúdo inicial
	$scope.listaCompras = [
		{
			nome:'Margarina',
			quantidade: 2,
			unidade: 'Pt.',
			vlrUnitario: 3.80
		},
		{
			nome:'Arroz',
			quantidade: 3,
			unidade: 'Kg',
			vlrUnitario: 5.30
		}
	];

	$scope.salvar = function () {
		console.log('Salvando: ' + $scope.produto);
		$scope.listaCompras.push($scope.produto);
		$scope.produto = {};
	};

	$scope.excluir= function (idx) {
		console.log('Excluindo índice: ' + idx);
		$scope.listaCompras.splice(idx, 1);
	};

	$scope.selecionar = function (idx) {						
		$scope.produto = angular.copy($scope.listaCompras[idx]);
	};

	$scope.valorTotal = function () {
		var tot = 0.0;
		for(var i=0; i<$scope.listaCompras.length; i++) {
			tot += ($scope.listaCompras[i].vlrUnitario 
					* $scope.listaCompras[i].quantidade);
		}
		return tot;
	};

}])