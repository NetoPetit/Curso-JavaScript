const data = new Date('2019-04-24 12:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto, Date.now(), Date(8640000));

//criando uma funçao para usar switch sem o break por que quando acha o return 
//sai da funçao e não precisar ficar repetindo o código:

function getDiaSemanaTexto(dia) {
    let pegaDiaSemanaTexto;
    
    switch (diaSemana) {
        case 0:
            pegaDiaSemanaTexto = 'Domingo';
            return pegaDiaSemanaTexto;
        case 1:
            pegaDiaSemanaTexto = 'Segunda';
            return pegaDiaSemanaTexto;
        case 2:
            pegaDiaSemanaTexto = 'Terça';
            return pegaDiaSemanaTexto;
        case 3:
            pegaDiaSemanaTexto = 'Quarta';
            return pegaDiaSemanaTexto;
        case 4:
            pegaDiaSemanaTexto = 'Quinta';
            return pegaDiaSemanaTexto;
        case 5:
            pegaDiaSemanaTexto = 'Sexta';
            return pegaDiaSemanaTexto;
        case 6:
            pegaDiaSemanaTexto = 'Sábado';
            return pegaDiaSemanaTexto;   
        default:
            pegaDiaSemanaTexto = '';
            return pegaDiaSemanaTexto;
    }
}

/*
//usando switch case no lugar do if mostrado logo depois:

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;   
    default:
        break;
}
*/

/*
//usando o if:

if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
}else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
}else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça';
}else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
}else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
}else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
}else {
    diaSemanaTexto = 'Sabado';
}
*/