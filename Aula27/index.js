
// operação ternária ? :
//(condição) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);
/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário vip');
}else {
    console.log('Usuário normal');
}
*/