/*
	Array de objetos
*/
var veiculos = [
	{
		marca: "GM",
		modelo: "Cruze",
		preco: 69000
	},
	{
		marca: "Ford",
		modelo: "Focus",
		preco: 72000
	},
	{
		marca: "VW",
		modelo: "Jetta",
		preco: 74000
	}
];

var novo = {
	marca: "Peugeout",
	modelo: "308",
	preco: 71000
};

console.log('Antes ' + veiculos.length);
veiculos.push(novo); // incluindo
console.log('Depois ' + veiculos.length);

console.log(veiculos[3].marca.substr(0,3).toUpperCase());

/*
	Variável contendo objeto
	com várias funções
*/
var calculadora = {
	soma: function(arr) {
		var total = 0;
		for(var i=0; i<arr.length; i++) {
			total += arr[i].preco;
		}
		return total;
	},

	menorPreco: function(arr) {
		var mp;
		for(var i=0; i<arr.length; i++) {
			if(!mp || mp > arr[i].preco) {
				mp = arr[i].preco;
			}
		}
		return mp;
	},

	maiorPreco: function(arr) {
		var mp;
		for(var i=0; i<arr.length; i++) {
			if(!mp || mp < arr[i].preco) {
				mp = arr[i].preco;
			}
		}
		return mp;
	}
};

/*
	Variável contendo apenas uma função
*/
var somaPreco = function somaPreco(arr) {
	var total = 0;
	for(var i=0; i<arr.length; i++) {
		total += arr[i].preco;
	}
	return total;
}

console.log('Preço total: ' + somaPreco(veiculos).toFixed(2));
console.log('Preço total: ' + calculadora.soma(veiculos));
console.log('Menor preço: ' + calculadora.menorPreco(veiculos));
console.log('Maior preço: ' + calculadora.maiorPreco(veiculos));
