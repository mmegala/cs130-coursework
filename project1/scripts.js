let url = "https://api.thevirustracker.com/free-api?global=stats"
fetch(url)
        .then(response => response.json())
        .then(data =>  {
            console.log(data); 
});

// Ok! Now I've officially gotten the information for one API. 
// I plan to integrate a map into my page and include information 
// for certain states and counties, which isn't available in this API
