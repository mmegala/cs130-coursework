const photosURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/flowers.json';
const bikesURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/bikes.json';
const carsURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/cars.json';


const loadCards = (photos) => {
    document.querySelector('.cards').innerHTML = ''; //empties out the .cards element so they dont all add together//
    for (photo of photos) { //for every photo in the list of photos and changing the url of the photo everytime//
        const template = `
            <div class="card" style="background-image:url('${photo}')"></div>`;
        document.querySelector('.cards').innerHTML += template; //appends photo everytime, giving us a gallery //
    }
    initCarousel();
};

// query the data from the server:
fetch(bikesURL)
    // convert the data to json //
    .then((response) => {
        return response.json();
    })
    .then(loadCards); // invokes a function to process the data
