var faixas = {
    f1: 0,
    f2: 0,
    f3: 0,
    f4: 0,
    f5: 0,
    somarSalario: function() {
        return this.f1+this.f2+this.f3+this.f4+this.f5;
    },
    somarImposto: function() {
        return this.f2 * 0.075
            + this.f3 * 0.15
            + this.f4 * 0.225
            + this.f5 * 0.275;
    },
    impostoFaixa: function(x) {
        if(x===2) {
            return this.f2 * 0.075;
        } else if(x===3) {
            return this.f3 * 0.15;
        } else if(x===4) {
            return this.f4 * 0.225;
        } else if(x===5) {
            return this.f5 * 0.275;
        }
    }
};

var atualizaValores = function() {
    var rendimentosTributaveis = $('#rendimentosTributaveis').val();
    var totalDeducoes = $('#totalDeducoes').val();
    var valorCalculo = rendimentosTributaveis - totalDeducoes;

    if(valorCalculo<=1903.98) {
        faixas.f1 = valorCalculo;
    } else if(valorCalculo>=1903.99 && valorCalculo<=2826.65) {
        faixas.f1 = 1903.98;
        faixas.f2 = valorCalculo - 1903.98;
    } else if(valorCalculo>=2826.66 && valorCalculo<=3751.05) {
        faixas.f1 = 1903.98;
        faixas.f2 = 2826.65 - 1903.98;
        faixas.f3 = valorCalculo - 2826.65;
    } else if(valorCalculo>=3751.05 && valorCalculo<=4664.68) {
        faixas.f1 = 1903.98;
        faixas.f2 = 2826.65 - 1903.98;
        faixas.f3 = 3751.05 - 2826.65;
        faixas.f4 = valorCalculo - 3751.05;
    } else if(valorCalculo>4664.69) {
        faixas.f1 = 1903.98;
        faixas.f2 = 2826.65 - 1903.98;
        faixas.f3 = 3751.05 - 2826.65;
        faixas.f4 = 4664.68 - 3751.05;
        faixas.f5 = valorCalculo - 4664.68;
    }

    $('#f1').text(faixas.f1.toFixed(2));
    $('#f2').text(faixas.f2.toFixed(2));
    $('#f3').text(faixas.f3.toFixed(2));
    $('#f4').text(faixas.f4.toFixed(2));
    $('#f5').text(faixas.f5.toFixed(2));
    
    $('#i2').text(faixas.impostoFaixa(2).toFixed(2));
    $('#i3').text(faixas.impostoFaixa(3).toFixed(2));
    $('#i4').text(faixas.impostoFaixa(4).toFixed(2));
    $('#i5').text(faixas.impostoFaixa(5).toFixed(2));
        
    $('#somatorioSalario').text(faixas.somarSalario().toFixed(2));
    $('#somatorioImposto').text(faixas.somarImposto().toFixed(2));
};

var init = function() {
    $('#rendimentosTributaveis').blur(atualizaValores);
    $('#totalDeducoes').blur(atualizaValores);
    $('#rendimentosTributaveis').focus();
};
