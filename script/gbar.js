const ctx3 = document.getElementById('myChart3');
const levels = ['Начальный уровень', 'Базовый уровень', 'Продвинутый уровень'];
const dif3 = {'Начальный уровень': [-4, -1], 'Базовый уровень': [4, -1], 'Продвинутый уровень': [0, 2]};
Chart.register(ChartDataLabels);
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: [2020, 2021, 2022],
        datasets: [
            {
                label: 'Начальный уровень',
                data: [7, 3, 2], 
                backgroundColor: 'rgba(20, 192, 235, 0.8)',
                borderWidth: 1
            },
            {
                label: 'Базовый уровень',
                data: [66,70,69],
                backgroundColor: 'rgba(9, 103, 174, 0.8)',
                borderWidth: 1
            },
            {
                label: 'Продвинутый уровень',
                backgroundColor: 'rgba(75, 29, 159, 0.8)',
                data: [27, 27, 29],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            x: {
                
                ticks: {
                    color: 'black',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                }
            },
            y: {
                
                max: 80,
                ticks: {
                    color: 'black',
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
                        return context.dataset.label + ': ' + context.parsed.y+'%';
                    },
                    afterLabel: (context) => { 
                        if (context.parsed.x == 0) {
                            return dif3[context.dataset.label][context.parsed.x - 1]}
                        else {
                            const difVal = dif3[context.dataset.label][context.parsed.x - 1];
                            if (difVal == 0) {return `
Не изменился по отношению к прошлому году`}
                            else if (difVal > 0) {return `
Увеличился на ${difVal}% потношению к прошлому году `}
                            else if (difVal < 0) {return `
Уменьшился на ${difVal * (-1)}% по отношению к прошлому году`}
                        }
                      },
                },
                    
                enabled: true,
                usePointStyle: true
            },
            legend: {
                display: true
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: 'blue',
                font: {
                    weight: 'bold',
                    size: 18
                },
                formatter: function (value, context) {
                    return value;
                }
            }
        }
    }
});
