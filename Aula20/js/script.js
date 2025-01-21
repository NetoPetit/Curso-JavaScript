function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function criarPessoas(nome, sobrenome, peso, altura){
        return {
            nome : nome,
            sobrenome : sobrenome,
            peso : peso,
            altura : altura
        }
    };
    
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        const objetoPessoa = criarPessoas(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(objetoPessoa);//adicionando o objeto com valores dentro do array
        
        //Outra maneira de adicionar o objeto dentro do array
        //é criar a estrutura do objeto que vai receber os valores
        //direto dentro do método de push do array:
        /*
        pessoas.push({
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value
        });
        */

        console.log(pessoas);

        resultado.innerHTML += `<p><h2><bold>${nome.value} ${sobrenome.value} ${peso.value}Kg ${altura.value}m.</bold></h2></p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
    
    /*
    form.onsubmit = function(evento) {
        evento.preventDefault();
        alert(1);
        
    };
    */
}

meuEscopo();