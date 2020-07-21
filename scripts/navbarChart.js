// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',
//
//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },
//
//     // Configuration options go here
//     options: {}
// });

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    data: {
        labels: ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'Bootstrap' , 'Wordpress'],

        datasets: [{
          label: 'Web Development',
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          borderColor: '#000000',
          borderWidth: 0.5,
          borderAlign: 'inner',
          hoverBackgroundColor:'rgba(255, 255, 0, 0.1)',
          hoverBorderColor: '#AAAAAA',
          hoverBorderWidth: 2,
          data: [50, 50, 40, 30, 45, 20],
          backgroundColor: [
            'rgba(27, 148, 221, 1)',
            'rgba(141, 44, 153, 1)',
            'rgba(41, 44, 153, 1)',
            'rgba(91, 24, 83, 1)',
            'rgba(81, 81, 103, 1)',
            'rgba(67, 27, 107, 1)'

          ]
        }]
    },

    type: 'polarArea',

    options: {
        maintainAspectRatio: false,
        // devicePixelRatio: 5,
        title:{
          display: true,
          text: 'Web Development',
          fontSize: 26,
          fontColor:'#0b1853',
          padding: 10,
          },
        scales:{
          yAxes: {
            display:false
          }
        },
        legend:{
          display: true,
          position: 'bottom',
          align: 'end',
          labels: {
            boxWidth: 10,
            fontSize: 15,
            fontColor: '#0b1853',
            padding: 10
          }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        // tooltips: {
        //     callbacks: {
        //         labelColor: function(tooltipItem, chart) {
        //             return {
        //                 borderColor: 'rgb(255, 0, 0)',
        //                 backgroundColor: 'rgb(255, 0, 0)'
        //             };
        //         },
        //         labelTextColor: function(tooltipItem, chart) {
        //             return '#543453';
        //         }
        //     }
        // }
    }
});
// chart.canvas.parentNode.style.height = '228px';
// chart.canvas.parentNode.style.width = '528px';

var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx2, {
  data: {
      labels: ['C++', 'Python', 'Java', 'VB.NET'],

      datasets: [{
        label: 'Web Development',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: '#000000',
        borderWidth: 0.5,
        borderAlign: 'inner',
        hoverBackgroundColor:'rgba(255, 255, 0, 0.1)',
        hoverBorderColor: '#AAAAAA',
        hoverBorderWidth: 2,
        data: [50, 50, 20, 50],
        backgroundColor: [
          'rgba(27, 148, 221, 1)',
          'rgba(141, 44, 153, 1)',
          'rgba(41, 44, 153, 1)',
          'rgba(91, 24, 83, 1)',
          'rgba(81, 81, 103, 1)',
          'rgba(67, 27, 107, 1)'

        ]
      }]
  },

    type: 'polarArea',

    options: {
        maintainAspectRatio: false,

        title:{
          display: true,
          text: 'Programming Languages',
          fontSize: 26,
          fontColor:'#0b1853',
          padding: 10,
          },
        legend:{
          display: true,
          position: 'bottom',
          align: 'end',
          labels: {
            boxWidth: 10,
            fontSize: 15,
            fontColor: '#0b1853',
            padding: 10
          }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
    }
});

var ctx3 = document.getElementById('myChart3').getContext('2d');
var chart3 = new Chart(ctx3, {
  data: {
      labels: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Adobe XD'],

      datasets: [{
        label: 'Web Development',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: '#000000',
        borderWidth: 0.5,
        borderAlign: 'inner',
        hoverBackgroundColor:'rgba(255, 255, 0, 0.1)',
        hoverBorderColor: '#AAAAAA',
        hoverBorderWidth: 2,
        data: [50, 50, 40, 30, 45],
        backgroundColor: [
          'rgba(27, 148, 221, 1)',
          'rgba(141, 44, 153, 1)',
          'rgba(41, 44, 153, 1)',
          'rgba(91, 24, 83, 1)',
          'rgba(81, 81, 103, 1)',
          'rgba(67, 27, 107, 1)'

        ]
      }]
  },

    type: 'polarArea',

    options: {
        maintainAspectRatio: false,

        title:{
          display: true,
          text: 'Adobe Softwares',
          fontSize: 26,
          fontColor:'#0b1853',
          padding: 10,
          },
        legend:{
          display: true,
          position: 'bottom',
          align: 'end',
          labels: {
            boxWidth: 10,
            fontSize: 15,
            fontColor: '#0b1853',
            padding: 10
          }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
    }
});

var ctx4 = document.getElementById('myChart4').getContext('2d');
var chart4 = new Chart(ctx4, {
  data: {
      labels: ['Audacity', 'Processing', 'Microsoft Office'],

      datasets: [{
        label: 'Web Development',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: '#000000',
        borderWidth: 0.5,
        borderAlign: 'inner',
        hoverBackgroundColor:'rgba(255, 255, 0, 0.1)',
        hoverBorderColor: '#AAAAAA',
        hoverBorderWidth: 2,
        data: [50, 50, 50],
        backgroundColor: [
          'rgba(27, 148, 221, 1)',
          'rgba(141, 44, 153, 1)',
          'rgba(41, 44, 153, 1)',
          'rgba(91, 24, 83, 1)',
          'rgba(81, 81, 103, 1)',
          'rgba(67, 27, 107, 1)'

        ]
      }]
  },

    type: 'polarArea',

    options: {
        maintainAspectRatio: false,

        title:{
          display: true,
          text: 'Others',
          fontSize: 26,
          fontColor:'#0b1853',
          padding: 10,
          },
        legend:{
          display: true,
          position: 'bottom',
          align: 'end',
          labels: {
            boxWidth: 10,
            fontSize: 15,
            fontColor: '#0b1853',
            padding: 10
          }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
    }
});
