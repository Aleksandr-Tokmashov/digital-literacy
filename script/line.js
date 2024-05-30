const ctx2 = document.getElementById('myChart2').getContext('2d');
const dif2 = [52 - 52, 58 - 52, 64 - 58, 71 - 64, 71 - 71]

const data1 = {  
    labels: [2018, 2019, 2020, 2021, 2022, 2023],
    datasets: [
      {
        label: 'Индекс цифровой грамотности',
        data: [52, 52, 58, 64, 71, 71],
        borderColor: 'rgb(24, 84, 216)',
        backgroundColor: 'rgb(24, 84, 216)',
        fill: false,

      }
    ]
};

const config2 = {
    type: 'line',
    data: data1,
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
        tooltip: {
            enabled: true,
            usePointStyle: true,
            callbacks: { 


              label: (data) => { 
                return `${data.dataset.label}: ${data.parsed.y}%`
              },
              afterLabel: (data) => { 
                if (data.parsed.x == 0) {
                    return ``}
                else {
                    const difVal = dif2[data.parsed.x-1];
                    if (difVal == 0) {return `
Не изменился по отношению к прошлому году`}
                    else if (difVal > 0) {return `
Увеличился на ${difVal}% потношению к прошлому году `}
                    else if (difVal < 0) {return `
Уменьшился на ${difVal * (-1)}% по отношению к прошлому году`}
                }
              },
            },
          },
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

const myChart = new Chart(ctx2, config2);