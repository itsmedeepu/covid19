var tstates = [],
  tactive = [],
  trecovered = [],
  tdeaths = [];

const api4 = "https://data.covid19india.org/data.json";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var barchartdata = await response.json();
  //console.log(data);
  if (response) {
    //hideloader();
  }
  me(barchartdata);

  console.log(barchartdata);
}
// Calling that async function
getapi(api4);

function me(barchartdata) {
  const states = barchartdata.statewise.slice(1, 31).map((x) => x.state);
  const active = barchartdata.statewise.slice(1, 31).map((x) => x.active);
  const recovered = barchartdata.statewise.slice(1, 31).map((x) => x.recovered);
  const deaths = barchartdata.statewise.slice(1, 31).map((x) => x.deaths);
  tstates = states;
  tactive = active;
  trecovered = recovered;
  tdeaths = deaths;
  var ctx = document.getElementById("myChart4");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: tstates,
      datasets: [
        {
          label: "Active Cases",
          data: tactive,
          borderColor: "rgba(54, 162, 235)",
          backgroundColor: "rgba(54, 162, 235)",
          fill: false,
          tension: 0.6,
        },
        {
          label: "Recovered Cases",
          data: trecovered,
          borderColor: "rgba(102,255,153)",
          backgroundColor: "rgba(102,255,153)",
          fill: false,
          tension: 0.6,
        },
        {
          label: "Deaths",
          data: tdeaths,
          borderColor: "rgba(255,0,0)",
          backgroundColor: "rgba(255,0,0)",
          fill: false,
          tension: 0.6,
        },
      ],
    },
    options: {
      legend: { display: true },
      plugins: {
        title: {
          display: true,
          text: "INDIA STATE WISE REPORTS ",
          fontSize: "50px",
        },
      },
      animation: {
        duration: 3000,
        easing: "easeOutQuart",
        loop: false,
      },
    },
  });
}
