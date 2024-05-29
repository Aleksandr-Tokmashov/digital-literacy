const data7 = {
  labels: ['7-13 лет', '14-17 лет', '18-25 лет', 
  '26-35 лет', '36-45 лет', '46-59 лет', '60+ лет'],
  datasets: [
    {
      label: 'Мужчины',
      data: [61.3, 60.8, 62.1, 74.6, 73.2, 70.7, 62.8],
      backgroundColor: '#4E1ADF',
    },
    {
      label: 'Женщины',
      data: [-63.3, -66.6, -66, -68.8, -66.5, -65.9, -64.2],
      backgroundColor: '#E65FFB',
    }
  ]
};


const options7 = {
  plugins: {
    
    datalabels: {
      color: 'white',
      font: {
          size: 18
      },
      formatter: (value, ctx) => {
        
        return Math.abs(value);
    }},
    tooltip: {
      intersect: true,
      callbacks: { 

        title: function(context) {
          return context[0].label;
      },
      label: function(context) {
        return context.dataset.label + ': ' + Math.abs(context.parsed.x)+'%';
    },

      },
  
     },
    legend: {
      position: "bottom",
    },
  },
  responsive: true,
  scales: {
     x: {

      stacked: false,
      ticks: {
        color: 'black',
                  font: {
                      size: 16,
                      weight: 'bold'
                  },
        beginAtZero: true,
        callback: (v) => {
          return v < 0 ? -v : v;
        },
      },
     },
    y: {
      
       stacked: true,
      ticks: {
        color: 'black',
                  font: {
                      size: 16,
                      weight: 'bold'
                  },
        beginAtZero: true,
      },
      position: "left",
    },
   },
   indexAxis: 'y'
 }

// Создание вертикальной демографической пирамиды с помощью Chart.js
const ctx7 = document.getElementById('myChart7').getContext('2d');
const verticalPyramid = new Chart(ctx7, {
  type: 'bar',
  data: data7,
  options: options7
});
