var ctx9 = document.getElementById('myChart9').getContext('2d');

var myChart9 = new Chart(ctx9, {
    type: 'doughnut',
    data: {
        labels: ['Не смогли назвать ни одну киберугрозу', 'Назвали 1-2 угрозы', 'Назвали 3-4 угрозы', 'Назвали 5-6 угроз', 'Смогли назвать более 6 угроз'],
        datasets: [{
            label: '# of Votes',
            data: [41, 20, 19, 16, 4],
            backgroundColor: [
                'rgb(12, 34, 81)',
                'rgb(11, 49, 131)',
              'rgb(56, 100, 196)',

              'rgb(66,146,198)',
              'rgb(107,174,214)',

            ]
        }]
    },
    options: {
      aspectRatio: 2,
        plugins: {
            tooltip: {
                enabled: true,
                usePointStyle: true,
                callbacks: { 
    
    
                  label: function(context) {
                   
                         
                    return context.parsed+'% опрошенных'
                },
              }},
          legend: {
            display: true,
            position: 'right',
            labels: {
                font: {
                    size: 20,
                    color: 'black'
                }
            }
        },
            datalabels: {
                color: 'white',
                font: {
                    size: 22
                },
                formatter: (value, ctx) => {
                  let sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                  let percentage = (value*100 / sum).toFixed(0)+ "%";
                  return percentage;
              }
            }
        }
    }
});
