
// Ok! Now I have an API that has all countries and global stats. 
// I plan to integrate a map into my page.

// Issue! :( I think requesting all countries is an issue, 
// since it says I have too many requests. For now, I'll make the templates
// and put them in this file but I'll hard-code info onto the html
// just so the front page looks like it has something.

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.covid19api.com/summary", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

data = response


// total recovered!
document.querySelector('.total-recovered').innerHTML = '';
template = `
<section class="total-recovered">
      <h2>${???}</h2>
      <h2>${???}</h2>
    </section> `


// {
//   "Global": {
//     "NewConfirmed": 103063,
//     "TotalConfirmed": 5780056,
//     "NewDeaths": 5299,
//     "TotalDeaths": 362488,
//     "NewRecovered": 63132,
//     "TotalRecovered": 2349437
//   },   
