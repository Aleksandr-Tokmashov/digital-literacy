const ctx4 = document.getElementById('myChart4').getContext('2d');
const dif4 = [52 - 52, 58 - 52, 64 - 58, 71 - 64, 71 - 71]

const data4 = {  
  
    labels: [2019, 2020, 2021,2022, 2023],
    datasets: [
      {tension: 0.2,
        label: 'Цифровое потребление',
        data: [7.81, 6.86, 7.37, 6.98, 6.46],
        borderColor: 'rgba(20, 192, 235, 0.9)',
        backgroundColor:'rgba(20, 192, 235, 0.9)',
        fill: false
      },
      {tension: 0.2,
        label: 'Цифровая безопасность',
        data: [6.7, 7.47, 6.87, 6.8, 6.84],
        borderColor: 'rgba(9, 103, 174, 0.9)',
        backgroundColor: 'rgba(9, 103, 174, 0.9)',
        fill: false
      },
      {tension: 0.2,
        label: 'Цифровые компетенции',
        data: [7.06, 7.2, 6.45, 6.3, 6.0],
        borderColor: 'rgba(75, 29, 159, 0.9)',
        backgroundColor: 'rgba(75, 29, 159, 0.9)',
        fill: false
      },
    ]
};

const config4 = {
    type: 'line',
    data: data4,
    options: {
        elements: {
            point: {
                radius: 5, // Устанавливаем радиус точек в 0, чтобы скрыть их
                hitRadius: 0, // Радиус "попадания" точек тоже делаем 0
            }
        },
        scales: {
         
            y: {
                min: 5.5,
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
                    const difVal = dif4[data.parsed.x-1];
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

        filler: {
          propagate: false,
        },
        
      },
      interaction: {
        intersect: false,
      }
    },
};

const myChart4 = new Chart(ctx4, config4);