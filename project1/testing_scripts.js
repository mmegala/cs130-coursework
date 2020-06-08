function initMap() {
    var center = {lat: 39.833333, lng: -98.583333};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: center});

  }

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://covid-19-testing.github.io/locations/new-york/complete.json", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    //     for (const id in result) {
    //         var marker = new google.maps.Marker({position: physical_address, map: map});
    //     }    
    // )
    .catch(error => console.log('error', error));