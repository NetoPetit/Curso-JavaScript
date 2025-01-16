//[Arrays]
//index          0       1          2
const alunos = ['Neto', 'Gabriel', 'Guilherme'];
console.log(alunos); //lista completa
console.log(alunos[0]); //neto
console.log(alunos[2]); //guilherme
alunos[0] = 'Petit'; //editando o valor de um index do array
console.log(alunos[0]); //petit
console.log(alunos); //lista com novo valor no index 0
alunos[3] = 'Emerson'; //adicionando o index 3 no array
console.log(alunos); //lista com index 3 e seu valor adicionado no array
console.log(alunos.length); //descobrindo quantos indíces tem no array
alunos[alunos.length] = 'Paulo'; //adicionando novo index e valor logo após o final do array
alunos[alunos.length] = 'Ricardo'; //adicionando novo index e valor logo após o final do array
alunos.push('Otávio'); //função para adicionar novo index e valor logo após o final do array
alunos.unshift('Fábio'); //função para adicionar novo valor no começo da array, e movendo os valores já existentes para os índices seguintes
const removido = alunos.pop(); // salva o valor que será removido do final da array
alunos.pop(); //remove o valor do final da array
const removidoInicio = alunos.shift(); //// salva o valor que será removido do começo da array
alunos.shift(); //remove o valor do começo da array
delete alunos[1]; //apaga o valor do indíce, mas não apaga o índice, seu valor se torna vazio
alunos.slice(0, 2); //pega um pedaço do array, passando os índices de aonde começa e aonde termina
console.log(typeof alunos); //mostra o tipo do array alunos, que é objeto
console.log(alunos instanceof Array); //perguntando se alunos é um instância de array


