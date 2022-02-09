//              ARQUIVO.CSV
//Número de casos, óbitos e vacinas e mortes

const casos = document.getElementById('#casos');
const obitos = document.getElementById('#obitos');
const novos_casos = document.getElementById('#novos_casos');
const mortes = document.getElementById('#morte');


//---------------------------------------------------------------------------
//                         DADOS CSV

let url_arquivo_csv = "https://raw.githubusercontent.com/ThiagoAlmeida0/pweb/main/arquivos%20csv/arquivo_dashboard.csv";

Papa.parse(url_arquivo_csv, {
    download: true,
    header: true,
    complete: function (results) {
        dados(results.data);
    }
});

function dados(results){
    const dado = results;
    console.log(dado[0].last_available_confirmed);
    grafico1(dado[99].last_available_confirmed, dado[69].last_available_confirmed,dado[38].last_available_confirmed,dado[7].last_available_confirmed, dado[0].last_available_confirmed);
    grafico2(dado[99].last_available_deaths, dado[69].last_available_deaths,dado[38].last_available_deaths,dado[7].last_available_deaths, dado[0].last_available_deaths);
    grafico3(dado[99].new_confirmed, dado[69].new_confirmed,dado[38].new_confirmed,dado[7].new_confirmed, dado[0].new_confirmed);
    grafico4(dado[6].new_deaths, dado[5].new_deaths,dado[4].new_deaths,dado[3].new_deaths,dado[2].new_deaths,dado[1].new_deaths,dado[0].new_deaths);
};


//---------------------------------------------------------------------------
//                          GRÁFICOS DAS MÉTRICAS
//gráfico 1: Infecções covid-19 nos últimos 5 meses (02/10/2021 a 02/02/2022)

function grafico1(out, nov, dez, jan, fev){
    const grafico1 = document.getElementById('graf1');
    const graf1 = new Chart(grafico1, {
    type: 'line',
    data: {
        labels: ['Outubro (2021)', 'Novembro (2021)', 'Dezembro (2021)', 'Janeiro (2022)', 'Fevereiro (2022)'],
        datasets: [{
            label: 'Infecções',
            data: [out, nov, dez, jan, fev],
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
}

//gráfico 2: óbitos por covid-19 nos últimos 5 meses (02/10/2021 a 02/02/2022)

function grafico2(out, nov, dez, jan, fev){
    const grafico2 = document.getElementById('graf2');
    const graf2 = new Chart(grafico2, {
        type: 'bar',
        data: {
            labels: ['Outubro (2021)', 'Novembro (2021)', 'Dezembro (2021)', 'Janeiro (2022)', 'Fevereiro (2022)'],
            datasets: [{
                label: 'Óbitos',
                data: [out, nov, dez, jan, fev],
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
    
}

//gráfico 3: Novos casos confirmados nos últimos 5 meses (02/10/2021 a 02/02/2022)

function grafico3(out, nov, dez, jan, fev){
    const grafico3 = document.getElementById('graf3');
    const graf3 = new Chart(grafico3, {
        type: 'line',
        data: {
            labels: ['Outubro (2021)', 'Novembro (2021)', 'Dezembro (2021)', 'Janeiro (2022)', 'Fevereiro (2022)'],
            datasets: [{
                label: 'Novos casos',
                data: [out, nov, dez, jan, fev],
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
    
}

//-------------------------------------------------------------------
//                    ÓBITOS ÚLTIMOS 7 DIAS 

//gráfico 4: Mortes nos últimos 7 dias (25/02/2022 a 02/02/2022)

function grafico4(d1, d2, d3, d4, d5, d6, d7){
    const grafico4 = document.getElementById('graf4');
    const graf4 = new Chart(grafico4, {
        type: 'bar',
        data: {
            labels: ['01/02/2022', '02/02/2022', '03/02/2022', '04/02/2022', '05/02/2022', '06/02/2022', '07/02/2022'],
            datasets: [{
                label: 'Mortalidade últimos 7 dias',
                data: [d1, d2, d3, d4, d5, d6, d7],
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
    
}
