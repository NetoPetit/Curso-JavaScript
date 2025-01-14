//strings são indexadas: 
//nº da posição  01234567
let umaString = 'Um texto';
//exibe o caracter da posição indexada 4 da string:
console.log(umaString[4]); 
//concatenar:
console.log(umaString.concat(' concatenado.'))
//saber o ídice aonde começa a palavra:
console.log(umaString.indexOf('texto'));
//procura o índice de trás pra frente:
console.log(umaString.lastIndexOf('x'));
//procura o índice de trás pra frente, a partir da posição do indice definido:
console.log(umaString.lastIndexOf('m', 4));
//expressão regular, mostra os caracteres minúsculos entre a-z que tem na string:
console.log(umaString.match(/[a-z]/g));
//substituindo trechos de um texto na string, substitui o primeiro atributo pelo segundo:
console.log(umaString.replace('Um', 'Outro'));
//substituindo todas as letras r por #:
console.log(umaString.replace(/t/g, '#'));
//saber o tamanho da string:
console.log(umaString.length);
//pegando pedaços de uma string pelo indíce:
console.log(umaString.slice(1, 6));
//dividindo a string passando um caracter e uma quantidade como referência:
console.log(umaString.split('t', 2));
//transformndo tudo em maiúscula:
console.log(umaString.toUpperCase());
//transformndo tudo em minúscula:
console.log(umaString.toLowerCase());
//usando template string:
console.log(`${umaString} com a variável concatenada usando template string!`)