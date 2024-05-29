var ctx9 = document.getElementById('myChart9').getContext('2d');
var myChart9 = new Chart(ctx9, {
    type: 'doughnut',
    data: {
        labels: ['Не смогли назвать ни одну киберугрозу', 'Компьютерные вирусы', 'Взлом аккаунтов', 'Телефонное мошнничество', 'Другое'],
        datasets: [{
            label: '# of Votes',
            data: [41, 20, 19, 16, 4],
            backgroundColor: [
              '#4E1ADF',
              '#0042A9',
              '#0056D6',
              '#3A87FE',
              '#74A7FF',

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
