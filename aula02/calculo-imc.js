var prompt = require('prompt');

prompt.start();

prompt.get(['altura', 'peso'], function (err, result) {

	var imc = result.peso / (result.altura * result.altura);

	console.log('Seu IMC é: ' + imc.toFixed(2));

	if(imc<=18.5) {
		console.log('Abaixo do peso');
	} else if(imc>=18.6 && imc<=24.9) {
		console.log('Peso ideal, parabéns!');
	} else if(imc>=25.0 && imc<=29.9) {
		console.log('Levemente acima do peso');
	} else if(imc>=30.0 && imc<=34.9) {
		console.log('Obesidade I');
	} else if(imc>=35.0 && imc<=39.9) {
		console.log('Obesidade II');
	} else if(imc>=40.0) {
		console.log('Obesidade III');
	}

});
