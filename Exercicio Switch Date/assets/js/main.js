const form = document.querySelector('.form');
const data = new Date();
const diaSemana = data.getDay();
const mesAno = data.getFullYear();
console.log(diaSemana);
const texto = form.querySelector('.data');
const dia = retornaDiaTexto(diaSemana);

texto.innerHTML = `${diaSemana}...${dia}`;

function retornaDiaTexto(dia) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function retornaMesTexto(mes) {

    let mesAnoTexto;
    switch (mesAno) {
        case 0:
            mesAnoTexto = 'Janeiro';
            return mesAnoTexto;
        case 1:
            mesAnoTexto = 'Fevereiro';
            return mesAnoTexto;
        case 2:
            mesAnoTexto = 'Março';
            return mesAnoTexto;
        case 3:
            mesAnoTexto = 'Abril';
            return mesAnoTexto;
        case 4:
            mesAnoTexto = 'Maio';
            return mesAnoTexto;
        case 5:
            mesAnoTexto = 'Junho';
            return mesAnoTexto;
        case 6:
            mesAnoTexto = 'Julho';
            return mesAnoTexto;
        case 7:
            mesAnoTexto = 'Agosto';
            return mesAnoTexto;
        case 8:
            mesAnoTexto = 'Setembro';
            return mesAnoTexto;
        case 9:
            mesAnoTexto = 'Outubro';
            return mesAnoTexto;
        case 10:
            mesAnoTexto = 'Novembro';
            return mesAnoTexto;
        case 11:
            mesAnoTexto = 'Dezembro';
            return mesAnoTexto;
        default:
            mesAnoTexto = '';
            return mesAnoTexto;
    }
}