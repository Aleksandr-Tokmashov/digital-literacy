const ctx6 = document.getElementById('myChart6');


Chart.register(ChartDataLabels);
new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['<10 лет', '10-13 лет', '14-17 лет', '18-25 лет', 
        '26-35 лет', '36-45 лет', '46-59 лет', '60+ лет'],
        datasets: [{
            label: 'Уровень цифровой грамотности',
            data: [60.6 , 62.4, 63.8, 64.1, 69.6, 67.3, 66.4, 61.9],
            backgroundColor: 'rgba(53, 0, 211, 0.7)',
            borderColor: 'rgb(53, 0, 211)',
            borderWidth: 1
        }]
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
              min: 45,
              max: 75,
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

              title: function(context) {
                return context[0].label
            },
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y+'%';
          },

            },
            enabled: true,
            usePointStyle: true,
          },
            legend: {
                display: false
            },

        }
    }
});



