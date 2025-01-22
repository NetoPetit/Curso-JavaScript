const form = document.querySelector('.form');

function recebeEvento(evento) {
    evento.preventDefault();
    const valorPeso = form.querySelector('#peso');
    const valorAltura = form.querySelector('#altura');
    const imprimeResultado = form.querySelector('.imprimeResultado');

    const peso = Number(valorPeso.value);
    const altura = Number(valorAltura.value);
    const resultado = peso / (altura * altura);
    console.log(resultado.toFixed(2));
    
    if (valorPeso.value == '' || valorAltura.value == '' || isNaN(resultado)) {
        imprimeResultado.innerHTML = `*Dados inválidos. Informe dados válidos*`
    } else {
    
        if (resultado < 18.5) {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Abaixo do peso!</p>`;
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Peso normal!</p>`;
        } else if (resultado >= 25 && resultado <= 29.9) {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Sobrepeso!</p>`;
        } else if (resultado >= 30 && resultado <= 34.9) {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Obesidade grau 1!</p>`;
        } else if (resultado >= 35 && resultado <= 39.9) {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Obesidade grau 2!</p>`;
        } else {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Obesidade grau 3!</p>`;
        }

    }

}

form.addEventListener('submit', recebeEvento);