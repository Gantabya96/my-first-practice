//------------Chart.js----------------//

/*
Chart.js is an free JavaScript library for making HTML-based charts. It is one of the simplest visualization libraries for JavaScript, and comes with the many built-in chart types:

  Scatter Plot
  Line Chart
  Bar Chart
  Pie Chart
  Donut Chart
  Bubble Chart
  Area Chart
  Radar Chart
  Mixed Chart
*/

// How to Use Chart.js?

const xValues = ["বেগুনী", "নীল", "আসমানি", "সবুজ", "হলুদ", "কমলা", "লাল"];
const yValues = [55, 50, 45, 40, 35, 30, 25, 15];
const barColors = ["#7F00FF", "#0000FF","#00b9f7","#019516","#f7f700","#f64e00","#f70000"];

const myChart = new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
    // scales: {
    //   yAxes: [{
    //     ticks: {
    //       begainAtZero: true
    //     }
    //   }],
    // }
  }
});

const xValues1 = ["", "বেগুনী", "নীল", "আসমানি", "সবুজ", "হলুদ", "কমলা", "লাল"];
const yValues1 = [25, 30, 35, 40, 45, 50, 55, 60, 65];
const barColors1 = ["", "#7F00FF", "#0000FF","#00b9f7","#019516","#f7f700","#f64e00","#f70000"];

const myChart1 = new Chart("myChart1", {
  type: "horizontalBar",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: barColors1,
      data: yValues1
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
    // scales: {
    //   yAxes: [{
    //     ticks: {
    //       begainAtZero: true
    //     }
    //   }],
    // }
  }
});

const xValues2 = ["বেগুনী", "নীল", "আসমানি", "সবুজ", "হলুদ", "কমলা", "লাল"];
const yValues2 = [55, 50, 45, 40, 35, 30, 25];
const barColors2 = ["#7F00FF", "#0000FF","#00b9f7","#019516","#f7f700","#f64e00","#f70000"];

const myChart2 = new Chart("myChart2", {
  type: "pie",
  data: {
    labels: xValues2,
    datasets: [{
      backgroundColor: barColors2,
      data: yValues2
    }]
  },
  options: {
    legend: {display: true},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
    // scales: {
    //   yAxes: [{
    //     ticks: {
    //       begainAtZero: true
    //     }
    //   }],
    // }
  }
});

const xValues3 = ["বেগুনী", "নীল", "আসমানি", "সবুজ", "হলুদ", "কমলা", "লাল"];
const yValues3 = [25, 30, 35, 40, 45, 50, 55];
const barColors3 = ["#7F00FF", "#0000FF","#00b9f7","#019516","#f7f700","#f64e00","#f70000"];

const myChart3 = new Chart("myChart3", {
  type: "doughnut",
  data: {
    labels: xValues3,
    datasets: [{
      backgroundColor: barColors3,
      data: yValues3
    }]
  },
  options: {
    legend: {display: true},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
    // scales: {
    //   yAxes: [{
    //     ticks: {
    //       begainAtZero: true
    //     }
    //   }],
    // }
  }
});
const xyValues4 = [
  {x:50, y:13},
  {x:55, y:12},
  {x:85, y:13},
  {x:85, y:12.5},
  {x:65, y:12.5},
  {x:65, y:13.5},
  {x:65, y:14.5},
  {x:65.5, y:14.5},
  {x:66, y:14.5},
  {x:66.5, y:14.5},
  {x:67, y:14.5},
  {x:67.5, y:14.5},
  {x:68, y:14.5},
  {x:68.5, y:14.5},
  {x:69, y:14.5},
  {x:69.5, y:14.5},
  {x:73.5, y:14.5},
  {x:70.5, y:14.5},
  {x:71, y:14.5},
  {x:71.5, y:14.5},
  {x:72, y:14.5},
  {x:72.5, y:14.5},
  {x:73, y:14.5},
  {x:74, y:14.5},
  {x:74.5, y:14.5},
  {x:75.5, y:14.5},
  {x:76, y:14.5},
  {x:76.5, y:14.5},
  {x:77, y:14.5},
  {x:77.5, y:14.5},
  {x:78, y:14.5},
  {x:78.5, y:14.5},
  {x:79, y:14.5},
  {x:79.5, y:14.5},
  {x:80.5, y:14.5},
  {x:81, y:14.5},
  {x:81.5, y:14.5},
  {x:82, y:14.5},
  {x:82.5, y:14.5},
  {x:83, y:14.5},
  {x:83.5, y:14.5},
  {x:84, y:14.5},
  {x:84.5, y:14.5},

  {x:85, y:12.4},
  {x:82.5, y:9.85},
  {x:85, y:14.4},
  {x:85, y:14.3},
  {x:85, y:14.2},
  {x:85, y:14.1},
  {x:85, y:13.9},
  {x:85, y:13.8},
  {x:85, y:13.7},
  {x:85, y:13.6},
  {x:85, y:13.4},
  {x:85, y:13.3},
  {x:85, y:13.2},
  {x:85, y:13.1},
  {x:85, y:12.9},
  {x:85, y:12.8},
  {x:85, y:12.7},
  {x:85, y:12.6},
  {x:85, y:12.3},
  {x:85, y:12.2},
  {x:85, y:12.1},
  {x:85, y:11.9},
  {x:85, y:11.8},
  {x:85, y:11.7},
  {x:85, y:11.6},

  {x:85.5, y:14.5},
  {x:86, y:14.5},
  {x:86.5, y:14.5},
  {x:87, y:14.5},
  {x:88, y:14.5},
  {x:88.5, y:14.5},
  {x:89, y:14.5},
  {x:89.5, y:14.5},
  {x:90.5, y:14.5},
  {x:91, y:14.5},
  {x:91.5, y:14.5},
  {x:92, y:14.5},
  {x:92.5, y:14.5},
  {x:93, y:14.5},
  {x:93.5, y:14.5},
  {x:94, y:14.5},
  {x:94.5, y:14.5},
  {x:95.5, y:14.5},
  {x:96, y:14.5},
  {x:87.5, y:14.5},

  {x:96.5, y:14.5},
  {x:97, y:14.5},
  {x:97.5, y:14.5},
  {x:98, y:14.5},
  {x:98.5, y:14.5},
  {x:99, y:14.5},
  {x:99.5, y:14.5},
  {x:100.5, y:14.5},
  {x:101, y:14.5},
  {x:101.5, y:14.5},
  {x:102, y:14.5},
  {x:102.5, y:14.5},
  {x:103, y:14.5},
  {x:103.5, y:14.5},
  {x:104.5, y:14.5},
  {x:105.5, y:14.5},
  {x:105, y:14.5},
  {x:106, y:14.5},
  {x:106.5, y:14.5},
  {x:107, y:14.5},
  {x:107.5, y:14.5},
  {x:108, y:14.5},
  {x:108.5, y:14.5},
  {x:109, y:14.5},
  {x:109.5, y:14.5},
  {x:110.5, y:14.5},
  {x:111, y:14.5},
  {x:111.5, y:14.5},
  {x:112, y:14.5},
  {x:112.5, y:14.5},
  {x:113, y:14.5},
  {x:113.5, y:14.5},
  {x:114, y:14.5},
  {x:114.5, y:14.5},
  {x:115, y:14.5},
  {x:115.5, y:14.5},
  {x:116, y:14.5},
  {x:116.5, y:14.5},
  {x:117, y:14.5},
  {x:117.5, y:14.5},
  {x:118, y:14.5},
  {x:118.5, y:14.5},
  {x:119, y:14.5},
  {x:119.5, y:14.5},
  {x:120, y:14.5},

  {x:65, y:10.1},
  {x:65, y:10.2},
  {x:65, y:10.3},
  {x:65, y:10.4},
  {x:65, y:10.6},
  {x:65, y:10.7},
  {x:65, y:10.8},
  {x:65, y:10.9},
  {x:65, y:11.1},
  {x:65, y:11.2},
  {x:65, y:11.3},
  {x:65, y:11.4},
  {x:65, y:11.6},
  {x:65, y:11.7},
  {x:65, y:11.8},
  {x:65, y:11.9},
  {x:65, y:12.1},
  {x:65, y:12.2},
  {x:65, y:12.3},
  {x:65, y:12.4},
  {x:65, y:12.6},
  {x:65, y:12.7},
  {x:65, y:12.8},
  {x:65, y:12.9},
  {x:65, y:13.1},
  {x:65, y:13.2},
  {x:65, y:13.3},
  {x:65, y:13.4},
  {x:65, y:13.6},
  {x:65, y:13.7},
  {x:65, y:13.8},
  {x:65, y:13.9},
  {x:65, y:14.1},
  {x:65, y:14.2},
  {x:65, y:14.3},
  {x:65, y:14.4},
  {x:65, y:14.6},
  {x:65, y:14.7},
  {x:65, y:14.8},
  {x:65, y:14.9},
  {x:65, y:15},

  {x:65, y:11.5},
  {x:65, y:10.5},
  {x:65, y:10},
  {x:70, y:14.5},
  {x:75, y:14.5},
  {x:80, y:14.5},
  {x:85, y:14.5},
  {x:90, y:14.5},
  {x:95, y:14.5},
  {x:61.5, y:13.5},
  {x:85, y:12},
  {x:52.5, y:13.58},
  {x:52.5, y:12.5},
  {x:53.5, y:11.5},
  {x:52, y:11},
  {x:58, y:14},
  {x:55, y:13.8},
  {x:82, y:12.5},
  {x:65, y:13},
  {x:65, y:14},
  {x:80, y:13},
  {x:65, y:12},
  {x:65, y:11},
  {x:76, y:13.3},
  {x:72, y:13.2},
  {x:85, y:11.5},
  {x:72, y:12},
  {x:70, y:12.5},
  {x:75, y:12.5},
  {x:85, y:13.5},
  {x:76, y:10},
  {x:70, y:10.8},
  {x:73, y:10.35},
  {x:87, y:11},
  {x:80, y:9.8},
  {x:85, y:10},
  {x:87.5, y:10.5},
  {x:82, y:11.5},
  {x:80, y:11.1},
  {x:82, y:10.8},
  {x:84, y:11},
  {x:85, y:14},
  {x:100, y:14.5},
  {x:104, y:14.5},
  {x:90.5, y:12},
  {x:104, y:14},
  {x:104, y:13.5},
  {x:104, y:13},
  {x:104, y:12.5},
  {x:104, y:12},
  {x:104, y:11.5},
  {x:104, y:11},
  {x:104, y:10.5},
  
  {x:104, y:9.9},
  {x:104, y:10},
  {x:104, y:10.1},
  {x:104, y:10.2},
  {x:104, y:10.3},
  {x:104, y:10.4},
  {x:104, y:10.6},
  {x:104, y:10.7},
  {x:104, y:10.8},
  {x:104, y:10.9},
  {x:104, y:11.1},
  {x:104, y:11.2},
  {x:104, y:11.3},
  {x:104, y:11.4},
  {x:104, y:11.6},
  {x:104, y:11.7},
  {x:104, y:11.8},
  {x:104, y:11.9},
  {x:104, y:12.1},
  {x:104, y:12.2},
  {x:104, y:12.3},
  {x:104, y:12.4},
  {x:104, y:12.6},
  {x:104, y:12.7},
  {x:104, y:12.8},
  {x:104, y:12.9},
  {x:104, y:13.1},
  {x:104, y:13.2},
  {x:104, y:13.3},
  {x:104, y:13.4},
  {x:104, y:13.6},
  {x:104, y:13.7},
  {x:104, y:13.8},
  {x:104, y:13.9},
  {x:104, y:14.1},
  {x:104, y:14.2},
  {x:104, y:14.3},
  {x:104, y:14.4},

  {x:101.5, y:13.7},
  {x:96, y:12.9},
  {x:93, y:12.45},
  {x:98.5, y:10.75},
  {x:96, y:11.1},
  {x:93, y:11.6},
  {x:101.2, y:10.35},
  {x:99, y:13.3},
  {x:110, y:14.5},
  {x:115, y:14.5},
  {x:120, y:14.5},
  {x:110, y:9.9},
  {x:112, y:14},
  {x:110, y:13},
  {x:110, y:13.5},
  {x:113, y:11},
  {x:112, y:10.4},
  {x:111, y:12.5},
  {x:113, y:12},
  {x:113.2, y:11.5},
];

new Chart("myChart4", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 14,
      pointBackgroundColor: "#629985",
      data: xyValues4
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: 40, max:160}}],
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

const xValues5 = [50,60,70,80,90,100,110,120,130,140,150];
const yValues5 = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart5", {
  type: "line",
  data: {
    labels: xValues5,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues5
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

const xValues6 = [50,60,70,80,90,100,110,120,130,140,150];
const yValues6 = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart6", {
  type: "line",
  data: {
    labels: xValues6,
    datasets: [{
      fill: true,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues6
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
})


const xValues7 = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart7", {
  type: "line",
  data: {
    labels: xValues7,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

const xValues8 = [];
const yValues8 = [];
generateData("x * 2 + 7", 0, 10, 0.5);

new Chart("myChart8", {
  type: "line",
  data: {
    labels: xValues8,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "#019216",
      data: yValues8
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "y = x * 2 + 7",
      fontSize: 16
    }
  }
});
function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    xValues8.push(x);
    yValues8.push(eval(value));
  }
}

const xValues9 = [];
const yValues9 = [];
generaeData("Math.sin(x)", 0, 10, 0.5);

new Chart("myChart9", {
  type: "line",
  data: {
    labels: xValues9,
    datasets: [{
      fill: false,
      pointRadius: 2,
      borderColor: "rgba(0,0,255,0.5)",
      data: yValues9
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "y = sin(x)",
      fontSize: 16
    }
  }
});
function generaeData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues9.push(eval(value));
    xValues9.push(x);
  }
}

//Google Chart

/*
From simple line charts to complex hierarchical tree maps, the Google Chart gallery provides a large number of ready-to-use chart types:

  Scatter Chart
  Line Chart
  Bar / Column Chart
  Area Chart
  Pie Chart
  Donut Chart
  Org Chart
  Map / Geo Chart
*/

// D3.js

/*
D3.js is a JavaScript library for manipulating HTML data.

D3.js is easy to use.
*/

