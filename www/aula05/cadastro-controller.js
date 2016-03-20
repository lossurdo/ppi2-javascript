angular.module('CadastroApp', [])

.controller('CadastroController', ['$scope', function($scope){
	
	$scope.produto = {};

	// conteúdo inicial
	$scope.listaCompras = [];

	/*
		À exemplo de um CRUD, este método
		faz o papel do CONSULTAR
	*/
	$scope.listar = function () {
		$scope.listaCompras.push({
			nome:'Margarina',
			quantidade: 2,
			unidade: 'Pt.',
			vlrUnitario: 3.80
			}
		);

		$scope.listaCompras.push({
			nome:'Arroz',
			quantidade: 3,
			unidade: 'Kg',
			vlrUnitario: 5.30
			}
		);		

		$scope.listaCompras.push({
			nome:'Feijão',
			quantidade: 1,
			unidade: 'Kg',
			vlrUnitario: 3.99
			}
		);		
	};

	/*
		À exemplo de um CRUD, este método
		faz o papel do CADASTRAR/ALTERAR
	*/
	$scope.salvar = function () {
		console.log('Salvando: ' + $scope.produto);
		$scope.listaCompras.push($scope.produto);
		$scope.produto = {};
	};

	/*
		À exemplo de um CRUD, este método
		faz o papel do EXCLUIR
	*/
	$scope.excluir= function (idx) {
		console.log('Excluindo índice: ' + idx);
		$scope.listaCompras.splice(idx, 1);
	};

	/*
		Os métodos abaixo servem para
		controlar as regras de negócio da
		interface com o usuário.
	*/
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