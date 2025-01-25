//https://developer.mozilla.org.pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); //01/01/1970 Timestamp unix ou época unix
console.log(data.toString());
*/
/*
const data = new Date(2019, 3, 20, 15, 14, 27, 500); //ano, mes, dia, hora, min., seg., mil.seg.
console.log(data.toString());
*/
/*
const data = new Date('2024-01-23 23:49:59');
const dataAtual = new Date(1737688179866);
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); // mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milisegundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 = domingo, 6 = sabado
console.log(data.toString());
console.log(dataAtual.toString());
console.log(Date.now()); // mostra a data atual em milisegundos
*/

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()) + 1; // mês começa do zero
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}/ ${hora}:${minuto}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);