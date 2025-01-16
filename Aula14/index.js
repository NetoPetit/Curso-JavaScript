//padrão do JavaScript para números: IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5
num1 += num2; //1.6
num1 += num2; //1.7
num1 += num2; //1.8
num1 += num2; //1.9
num1 += num2; //2.0

/*
//Outra resolução:
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100;// 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100;// 1.0
*/
num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

//convertendo number em string:
console.log(num1.toString() + num2);
//convertendo o valor da variável para string:
num1 = num1.toString();
//mostrando o valor da variável em binário:
console.log(num1.toString(2));
//mostrando o tipo da variável:
console.log(typeof num1);
//escolhendo quantas casas decimais vai aparecer depois da vírgula:
console.log(num1.toFixed(2));
//checando se o tipo é inteiro:
console.log(Number.isInteger(num1));
//confirmando se uma conta é invalida:
let temp = num1 * 'olá';
console.log(Number.isNaN(temp));