const numero = Number(prompt('Digite seu número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const divTexto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
divTexto.innerHTML = `<p>Seu número -2 é ${numero - 2}</p>`,
divTexto.innerHTML += `<p>Raíz quadrada: ${Math.sqrt(numero)}</p>`;
divTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
divTexto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
divTexto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
divTexto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
divTexto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
