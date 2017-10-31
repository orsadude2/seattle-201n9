'use strict';
//this holds the value for the votes of each product image
var data = [12, 19, 3, 5, 2, 3];
//this is the name for each product
var labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

var ctx = document.getElementById('chart').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelColors,
    datasets: [{
      label: '# of Votes',
      data: data,
      backgroundColor: labelColors
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
