const form = document.querySelector('.form');

function recebeEvento(evento) {
    evento.preventDefault();
    const valorPeso = form.querySelector('#peso');
    const valorAltura = form.querySelector('#altura');
    const imprimeResultado = form.querySelector('.imprimeResultado');

    const peso = Number(valorPeso.value);
    const altura = Number(valorAltura.value);
    const resultado = peso / (altura * altura);
    
    if (valorPeso.value == '' || valorAltura.value == '' || isNaN(resultado)) {
        imprimeResultado.innerHTML = `<p>*Dados inválidos. Informe dados válidos*</p>`;
        imprimeResultado.style.backgroundColor = 'salmon';
    } else {
    
        if (resultado < 18.5) {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Abaixo do peso!</p>`;
            imprimeResultado.style.backgroundColor = 'lightgreen';
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Peso normal!</p>`;
            imprimeResultado.style.backgroundColor = 'lightgreen';
        } else if (resultado >= 25 && resultado <= 29.9) {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Sobrepeso!</p>`;
            imprimeResultado.style.backgroundColor = 'lightgreen';
        } else if (resultado >= 30 && resultado <= 34.9) {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Obesidade grau 1!</p>`;
            imprimeResultado.style.backgroundColor = 'lightgreen';
        } else if (resultado >= 35 && resultado <= 39.9) {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Obesidade grau 2!</p>`;
            imprimeResultado.style.backgroundColor = 'lightgreen';
        } else {
            imprimeResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}.`
            + ` Obesidade grau 3!</p>`;
            imprimeResultado.style.backgroundColor = 'lightgreen';
        }

    }

}

form.addEventListener('submit', recebeEvento);