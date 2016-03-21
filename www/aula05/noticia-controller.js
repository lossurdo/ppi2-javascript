angular.module('NoticiaApp', [])

.controller('NoticiaController', ['$scope', function($scope) {
	
	$scope.mostrar = false;

	$scope.selecionado = {};
	$scope.indiceSelecionado = -1;

	$scope.noticias = [];

	$scope.inicializar = function () {
		 $scope.noticias.push({
		 	data:'2016-02-21T21:13:54.064Z',
		 	titulo:'Lorem ipsum dolor sit amet',
		 	texto:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		 });
		 $scope.noticias.push({
		 	data:'2016-03-11T21:13:54.064Z',
		 	titulo:'Duis aute irure dolor in reprehenderit',
		 	texto:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		 });
		 $scope.noticias.push({
		 	data:'2016-01-21T21:13:54.064Z',
		 	titulo:'Suco de cevadiss, é um leite divinis',
		 	texto:'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.'
		 });
		 $scope.noticias.push({
		 	data:'2016-03-18T08:13:54.064Z',
		 	titulo:'Casamentiss faiz malandris se pirulitá',
		 	texto:'Casamentiss faiz malandris se pirulitá, Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer Ispecialista im mé intende tudis nuam golada, vinho, uiski, carirí, rum da jamaikis, só num pode ser mijis. Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
		 });		 
	 	$scope.indiceSelecionado = -1;
	};

	$scope.alterarMostrar = function () {
		$scope.mostrar = !$scope.mostrar;	 	 
	};

	$scope.excluir = function (k) {
		 $scope.noticias.splice(k, 1);
	};

	$scope.selecionar = function (k) {		
		 $scope.selecionado = angular.copy($scope.noticias[k]);
		 $scope.indiceSelecionado = k;
	};

	$scope.salvar = function () {
		 if($scope.indiceSelecionado==-1) { // adicionar
		 	$scope.selecionado.data = new Date();
		 	$scope.noticias.push($scope.selecionado);
		 } else { // alterar
		 	$scope.noticias.splice($scope.indiceSelecionado, 1, $scope.selecionado);
		 }
		 $scope.alterarMostrar();
	};

}])