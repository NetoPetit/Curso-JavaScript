const verdadeira = true;

//Let tem escopo de bloco {....bloco....}
//Var só tem escopo de função
let nome = 'Luiz'; //criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio'; //criando
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa'; //criando
        console.log(nome, nome2);
    }
}

//HOISTING:
//na hora que cria uma var, o javascript eleva a declaração pro começo
//do código, mas não terá valor atribuído, então será uma var vazia e 
//seu resultado será undefined, isso não acontece com let
console.log(sobrenome);

var sobrenome = 'Otávio';