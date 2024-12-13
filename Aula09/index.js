const nome = 'Alcides';
const sobrenome = 'Petit Neto';
const peso = 95;
const altura = 1.93;
let imc = peso / (altura * altura);
let anoAtual = 2024;
let anoNascimento = 1988;
const idade = anoAtual - anoNascimento;
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem`);
console.log(`${altura} de altura e seu IMC é ${imc}. ${nome} ${sobrenome}`);
console.log(`nasceu em ${anoNascimento}.`);

//Diferenças de let e var = let não deixa redeclarar a variável,
//já com o var é possível redeclarar a variável.