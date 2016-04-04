angular.module('ExemploModule', [])

.service('ExemploService', ['$http', function ($http) {
	
	/*
		Para permitir função chamar função
	*/
	var service = this;

	this.get = function (fnOk, fnNOK) {
		service.getOnline(fnOk, fnNOK);	
	};

	/*
		Lendo API na internet
	*/
	this.getOnline = function (fnOK, fnNOK) {
		$http({
			method: 'GET',
			url: 'https://randomuser.me/api/?results=20'
		}).
		then(function (response) {	
			fnOK(response.data);
		}, function (response) {
			service.getOffline(fnOK, fnNOK);			
		});
	};

	/*
		Lendo arquivo LOCAL
	*/
	this.getOffline = function (fnOK, fnNOK) {
		$http({
			method: 'GET',
			url: 'json/randomuser.me.json'
		}).
		then(function (response) {			
			fnOK(response.data);
		}, function (response) {
			fnNOK(true);
		});	 
	};

}])

;