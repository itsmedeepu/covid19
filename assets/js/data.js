const api3 = "https://data.covid19india.org/data.json";

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
  go(data);

  console.log(data);
}
// Calling that async function
getapi(api3);

function go(data) {
  let tab = `
  <thead>
    <tr>
        <th >STATE NAME</th>
        <th >ACTIVE</th>
        <th >CONFIRMED</th>
        <th >RECOVERED</th>
        <th >DEATHS</th>
    </tr>
 </thead>`;

  for (let r of data.statewise) {
    tab += `
    <tr>
    <th  >${r.state}</th>
    <td>${r.active}</td>
    <td>${r.confirmed}</td>
    <td>${r.recovered}</td>
    <td>${r.deaths}</td>

</tr>`;
  }
  document.getElementById("statewise").innerHTML = tab;
}
