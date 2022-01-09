const api_url = "https://data.covid19india.org/data.json";

// Defining async function
async function getapi(url) {
  // Storing response

  const response = await fetch(url);
  var data = await response.json();

  // Storing data in form of JSON

  //console.log(data);
  if (response) {
    show(data);
  } else {
  }
}
// Calling that async function
getapi(api_url);

function show(data) {
  //for (let r of data.statewise) {
  var total = data.statewise[0];
  var active = total.active;
  var confirmed = total.confirmed;
  var recovered = total.recovered;
  var deaths = total.deaths;

  document.getElementById("active").innerHTML = sep(active);
  document.getElementById("confirmed").innerHTML = sep(confirmed);
  document.getElementById("recovered").innerHTML = sep(recovered);
  document.getElementById("deaths").innerHTML = sep(deaths);

  // //note this is to trigger the slicker slider

  // document.getElementById("tactive").innerHTML = active;
  // document.getElementById("tconfirmed").innerHTML = confirmed;
  // document.getElementById("trecovered").innerHTML = recovered;
  // document.getElementById("tdeaths").innerHTML = deaths;

  //   var total = data.statewise.totalconfirmed;
  //   console.log(total);

  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Active Cases", "Confirmed Cases", "Recovered", "Deaths"],
      datasets: [
        {
          label: "Vaccination Reports",
          data: [active, confirmed, recovered, deaths],
          backgroundColor: [
            "rgba(54, 162, 235)",
            "rgba(255, 206, 86)",
            "rgba(102,255,153)",
            "rgba(255,0,0)",
          ],
        },
      ],
    },

    options: {
      responsive: false,

      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        title: {
          display: true,
          text: "TOTAL INDIA REPORT",
          fontSize: "40px",
        },
      },

      animation: {
        duration: 1000,
        easing: "bounce",
        loop: false,
      },
    },
  });
}
