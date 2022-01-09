const api = "https://data.covid19india.org/v4/min/data.min.json";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  //console.log(data);
  if (response) {
    //hideloader();
  }
  my(data);
}
// Calling that async function
getapi(api);

function my(data) {
  //fetching all states
  var karnataka = data.KA;
  var katotal = karnataka.total;
  var kaconfirmed = katotal.confirmed;
  var kadeceased = katotal.deceased;
  var karecovered = katotal.recovered;
  var kaother = katotal.other;
  var kavaccinated1 = katotal.vaccinated1;
  var kavaccinated2 = katotal.vaccinated2;
  //==========================================chart for total
  var ctx = document.getElementById("myChart2").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Confirmed Cases", "Recovered", "Deceased Cases", "Other"],
      datasets: [
        {
          data: [kaconfirmed, kadeceased, karecovered, kaother],
          backgroundColor: [
            "rgba(54, 162, 235)",
            "rgba(255,0,0)",
            "rgba(102,255,153)",
            "rgba(255, 206, 86)",
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
          text: "KARNATAKA TOTAL REPORTS",
          fontSize: "50px",
        },
      },

      animation: {
        duration: 2000,
        easing: "bounce",
        loop: false,
      },
    },
  });

  //chart for vacinated

  var ctx1 = document.getElementById("myChart3").getContext("2d");
  var myChart3 = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["1st dose", " 2nd Dose"],
      datasets: [
        {
          data: [kavaccinated1, kavaccinated2],
          backgroundColor: ["rgba(54, 162, 235)", "rgba(102,255,153)"],
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
          text: "KARNATAKA TOTAL VACCINATION REPORTS",
          fontSize: 30,
        },
      },

      animation: {
        duration: 6000,
        easing: "easeInOutBounce",
        loop: false,
      },
    },
  });
}
