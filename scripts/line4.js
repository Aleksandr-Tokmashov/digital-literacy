const ctx4 = document.getElementById('myChart4').getContext('2d');
const dif4 = {'Цифровое потребление': [6.86-7.81, 7.37-6.86, 6.98-7.37, 6.46-6.96], 
              'Цифровая безопасность': [7.47-6.7, 6.87-7.47, 6.8-6.87, 6.84-6.8], 
              'Цифровые компетенции': [7.2-7.06, 6.45-7.2, 6.3-6.45, 6.0-6.3],};

const dif42 = {'Цифровое потребление': [6.86-7.81, 7.37-7.81, 6.98-7.81, 6.46-7.81], 
              'Цифровая безопасность': [7.47-6.7, 6.87-6.7, 6.8-6.7, 6.84-6.7], 
              'Цифровые компетенции': [7.2-6.7, 6.45-6.7, 6.3-6.7, 6.0-6.7],};
              
const data4 = {  
  
    labels: [2019, 2020, 2021,2022, 2023],
    datasets: [
      {tension: 0.2,
        label: 'Цифровое потребление',
        data: [7.81, 6.86, 7.37, 6.98, 6.46],
        borderColor: 'rgba(20, 192, 235)',
        backgroundColor:'rgba(20, 192, 235)',
        fill: false
      },
      {tension: 0.2,
        label: 'Цифровая безопасность',
        data: [6.7, 7.47, 6.87, 6.8, 6.84],
        borderColor: 'rgba(24, 84, 216)',
        backgroundColor: 'rgba(24, 84, 216)',
        fill: false
      },
      {tension: 0.2,
        label: 'Цифровые компетенции',
        data: [7.06, 7.2, 6.45, 6.3, 6.0],
        borderColor: 'rgba(75, 29, 159)',
        backgroundColor: 'rgba(75, 29, 159)',
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
                grid: {
                  color: gridc },
                ticks: {
                    color: xy,
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
              grid: {
                color: gridc },
                ticks: {
                    color: xy,
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
        legend: {
          labels: {
            font: {
              size: 15
          },
            color: legendc
        }
        },
        tooltip: {
          
            enabled: true,
            usePointStyle: true,
            callbacks: { 

              label: function(context) {
                return context.dataset.label + ': ' + context.parsed.y;
            },
            afterLabel: (context) => { 
              if (context.parsed.x == 0) {
                return dif4[context.dataset.label][context.parsed.x - 1]}
            else {
              var t1 = '';
              var t2= '';
              const difVal = dif4[context.dataset.label][context.parsed.x - 1].toFixed(2);
              const difVal2 = dif42[context.dataset.label][context.parsed.x - 1].toFixed(2);
              if (difVal == 0) {t1= `
Не изменился по отношению к прошлому году`}
              else if (difVal > 0) {t1= `
Увеличился на ${difVal} потношению к прошлому году `}
              else if (difVal < 0) {t1= `
Уменьшился на ${difVal * (-1)} по отношению к прошлому году`}


              if (difVal2 == 0) {t2 = `
Остался на уровне 2019 года`}
                                  else if (difVal2 > 0) {t2 = `
С 2019 года увеличился на ${difVal2}`}
                                  else if (difVal2 < 0) {t2 = `
С 2019 года уменьшился на ${difVal2 * (-1)} `}
              return t1+t2;
              }
            
             
            }
            
              
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