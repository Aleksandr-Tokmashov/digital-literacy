const ctx3 = document.getElementById('myChart3');



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
                backgroundColor: 'rgba(20, 192, 235, 0.9)',
                borderWidth: 1
            },
            {
                label: 'Базовый уровень',
                data: [66,70,69],
                backgroundColor: 'rgba(24, 84, 216, 0.9)',
                borderWidth: 1
            },
            {
                label: 'Продвинутый уровень',
                backgroundColor: 'rgba(75, 29, 159, 0.9)',
                data: [27, 27, 29],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    color: gridc },
                ticks: {
                    color: xy,
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
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
                
                display: true,
                labels: {
                    font: {
                        size: 15
                    },
                    color: legendc
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'end',
                color: dlabel,
                font: {
                    weight: 'bold',
            
                    size: 16
                },
                formatter: function (value, context) {
                    return value;
                }
            }
        }
    }
});
