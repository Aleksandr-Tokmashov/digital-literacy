const ctx2 = document.getElementById('myChart2').getContext('2d');

const data = {  
    labels: [2018, 2019, 2020, 2021, 2022, 2023],
    datasets: [
      {
        label: 'Индекс цифровой грамотности',
        data: [52, 52, 58, 64, 71, 71],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255)',
        fill: false
      }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        elements: {
            point: {
                radius: 5, // Устанавливаем радиус точек в 0, чтобы скрыть их
                hitRadius: 0, // Радиус "попадания" точек тоже делаем 0
            }
        },
        scales: {
         
            y: {
                min: 40,
                max: 80,
                ticks: {
                    color: 'black',
                    font: {
                        size: 17,
                        weight: 'bold'
                    },
                    callback: function(value, index) {
          
                        if (index === 0) {
                            return '';
                        }
                        return value;
                    }
                },
                
            },
            x: {
               
                ticks: {
                    color: 'black',
                    font: {
                        size: 17,
                        weight: 'bold'
                    }
                }
            },
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
      plugins: {
        datalabels: {

            font: {

                size: 0
            },

        },
        legend: {
            display: false
        },
        filler: {
          propagate: false,
        },
        
      },
      interaction: {
        intersect: false,
      }
    },
};

const myChart = new Chart(ctx2, config);