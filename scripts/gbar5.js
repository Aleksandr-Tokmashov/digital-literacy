const ctx5 = document.getElementById('myChart5');

const dif5 = {'Навыки решения проблем в цифровой среде': [7, 7, 0], 
'Информационная безопасность': [8, 7, -1], 
'Коммуникативная грамотность': [5, 5, 0]};
Chart.register(ChartDataLabels);
new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: [2020, 2021, 2022, 2023],
        
        datasets: [
            
            {
                label: 'Навыки решения проблем в цифровой среде',
                data: [58, 65, 72, 72],
                backgroundColor: 'rgba(20, 192, 235, 0.9)',
                borderWidth: 1,
                
            },
            {
                label: 'Информационная безопасность',
                data: [59, 67, 74, 73], 
                backgroundColor: 'rgba(24, 84, 216, 0.9)',
                borderWidth: 1
            },
            {
                label: 'Коммуникативная грамотность',
                backgroundColor: 'rgba(75, 29, 159, 0.9)',
                data: [62, 67, 72, 72],
                borderWidth: 1
            },

        ]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                min: 30,
                grid: {
                    color: gridc },
                ticks: {
                    color: xy,
                    font: {
                        size: 18,
                        weight: 'bold'
                    },

                }
            },
            y: {
                grid: {
                    color: gridc },
                max: 80,
                ticks: {
                    color: xy,
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: { 

              
                    label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.x+' баллов';
                    },
                    afterLabel: (context) => { 
                        if (context.parsed.y == 0) {
                            return dif5[context.dataset.label][context.parsed.y - 1]}
                        else {
                            const difVal = dif5[context.dataset.label][context.parsed.y - 1];
                            if (difVal == 0) {return `
Не изменился по отношению к прошлому году`}
                            else if (difVal > 0) {return `
Увеличился на ${difVal} баллов потношению к прошлому году `}
                            else if (difVal < 0) {return `
Уменьшился на ${difVal * (-1)} баллов по отношению к прошлому году`}
                        }
                      },
                },
                    
                enabled: true,
                usePointStyle: true
            },
            legend: {
                labels: {
                    font: {
                        size: 14
                    },
                  color: legendc
              }
              },
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: 'blue',
                font: {
                    weight: 'bold',
                    size: 0
                },
                formatter: function (value, context) {
                    return value;
                }
            }
        }
    }
});
