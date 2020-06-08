
fetch("https://api.covid19api.com/summary")
  .then(response => response.json())
  .then(myJson =>  {
    console.log(myJson);
    // total recovered 
    template = `
    <section class="total-recovered">
    <h2>${myJson.Global.TotalRecovered}</h2>
    <h3>Total # Recovered</h3>
    </section>`
    console.log('THIS WORKS!');
    document.querySelector('.total-recovered').innerHTML = template;
    // total cases
    template2 = 
    `<div class = "total-cases">
      <h2>${myJson.Global.TotalConfirmed}</h2>
      <h4>Total Cases Globally</h4>
    </div>`
    document.querySelector('.total-cases').innerHTML = template2;
    // new deaths today
    template3 = 
    `<div class = "deaths-today">
      <h2>${myJson.Global.NewDeaths}</h2>
      <h4>New Deaths Today</h4>
    </div>`
    document.querySelector('.deaths-today').innerHTML = template3;
    // new cases today
    template4 = 
    `<div class = "new-today">
      <h2>${myJson.Global.NewConfirmed}</h2>
      <h4>New Cases Today</h4>
    </div>`
    document.querySelector('.new-today').innerHTML = template4; 
    template5 = 
    `<div class="top-country">
      <h2>${myJson.Countries[177].TotalConfirmed}</h2>
      <h4>Total Cases in United States</h4>
    </div>`
    document.querySelector('.top-country').innerHTML = template5
  });
  
