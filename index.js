//              ARQUIVO.CSV
//Número de casos, óbitos e vacinas e mortes

const casos = document.getElementById('#casos');
const obitos = document.getElementById('#obitos');
const vacinados = document.getElementById('#vacinados');
const mortes = document.getElementById('#morte');


//---------------------------------------------------------------------------
//                         DADOS CSV

let url_caso_full = "https://github.com/ThiagoAlmeida0/pweb/blob/720c26bbb925164c1effb49ff66efaaddce89472/arquivos%20csv/caso_full.csv";
let url_caso = "https://github.com/ThiagoAlmeida0/pweb/blob/720c26bbb925164c1effb49ff66efaaddce89472/arquivos%20csv/caso.csv";
let url_obito = "https://github.com/ThiagoAlmeida0/pweb/blob/720c26bbb925164c1effb49ff66efaaddce89472/arquivos%20csv/obito_cartorio.csv";

//caso_full
Papa.parse(url_caso_full, {
    download: true,
    header: true,
    complete: function (results) {
        results_caso_full(results.data);
        console.log(results.data);
    }
});

function results_caso_full(results){
    var dados_caso_full = results;
}

//caso
Papa.parse(url_caso_full, {
    download: true,
    header: true,
    complete: function (results) {
        results_caso_full(results.data);
    }
});

function results_caso(results){
    var dados_caso = results;
}

//obitos
Papa.parse(url_caso_full, {
    download: true,
    header: true,
    complete: function (results) {
        results_caso_full(results.data);
    }
});

function results_obito(results){
    var dados_obito = results;
}


//---------------------------------------------------------------------------
//                          GRÁFICOS DAS MÉTRICAS
//gráfico 1: Infecções covid-19 nos últimos 5 meses (02/10/2021 a 02/02/2022)

const grafico1 = document.getElementById('graf1');
const graf1 = new Chart(grafico1, {
    type: 'line',
    data: {
        labels: ['Outubro (2021)', 'Novembro (2021)', 'Dezembro (2021)', 'Janeiro (2022)', 'Fevereiro (2022)'],
        datasets: [{
            label: 'Infecções',
            data: [6, 8, 10, 12, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgbanpm i chart.js(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgbanpm i chart.js(255, 159, 64, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        },

        title: {
            display: true,
            text: 'Novos casos confirmados',
            fontSize: 20
        },

        legend: {
            display: true,

        },

        scales: {
            y: {
                beginAtZero: true
            }
        },

        layout: {
            padding: {
                left: 20,
                right: 20,
                bottom: 20,
                top: 20
            }
        },

    }
});

//gráfico 2: óbitos por covid-19 nos últimos 5 meses (02/10/2021 a 02/02/2022)

const grafico2 = document.getElementById('graf2');
const graf2 = new Chart(grafico2, {
    type: 'bar',
    data: {
        labels: ['Outubro (2021)', 'Novembro (2021)', 'Dezembro (2021)', 'Janeiro (2022)', 'Fevereiro (2022)'],
        datasets: [{
            label: 'Óbitos',
            data: [6, 8, 10, 12, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgbanpm i chart.js(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgbanpm i chart.js(255, 159, 64, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        },

        title: {
            display: true,
            text: 'Novos casos de óbitos por COVID-19',
            fontSize: 20
        },

        legend: {
            display: true,

        },

        scales: {
            y: {
                beginAtZero: true
            }
        },

        layout: {
            padding: {
                left: 20,
                right: 20,
                bottom: 20,
                top: 20
            }
        },

    }
});

//gráfico 3: Vacinação covid-19 nos últimos 5 meses (02/10/2021 a 02/02/2022)

const grafico3 = document.getElementById('graf3');
const graf3 = new Chart(grafico3, {
    type: 'line',
    data: {
        labels: ['Outubro (2021)', 'Novembro (2021)', 'Dezembro (2021)', 'Janeiro (2022)', 'Fevereiro (2022)'],
        datasets: [{
            label: 'Progresso da vacinação COVID-19',
            data: [6, 8, 10, 12, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgbanpm i chart.js(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgbanpm i chart.js(255, 159, 64, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        },

        title: {
            display: true,
            text: 'Vacinação',
            fontSize: 20
        },

        legend: {
            display: true,

        },

        scales: {
            y: {
                beginAtZero: true
            }
        },

        layout: {
            padding: {
                left: 20,
                right: 20,
                bottom: 20,
                top: 20
            }
        },

    }
});

//-------------------------------------------------------------------
//                    ÓBITOS ÚLTIMOS 7 DIAS 

//gráfico 4: Mortes nos últimos 7 dias (25/02/2022 a 02/02/2022)

const grafico4 = document.getElementById('graf4');
const graf4 = new Chart(grafico4, {
    type: 'bar',
    data: {
        labels: ['25/02/2022', '26/02/2022', '27/02/2022', '28/02/2022', '29/02/2022', '30/02/2022', '01/02/2022', '02/02/2022'],
        datasets: [{
            label: 'Mortalidade últimos 7 dias',
            data: [6, 8, 10, 12, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgbanpm i chart.js(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgbanpm i chart.js(255, 159, 64, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        },

        title: {
            display: true,
            text: 'Mortes nos últimos 7 dias',
            fontSize: 20
        },

        legend: {
            display: true,

        },

        scales: {
            y: {
                beginAtZero: true
            }
        },

        layout: {
            padding: {
                left: 20,
                right: 20,
                bottom: 20,
                top: 20
            }
        },

    }
});