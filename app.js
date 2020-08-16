// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather
const weather = new Weather(weatherLocation.city);

// Init ui
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city').value;

    // Change location
    weather.changeLocation(city);

    // Set location in Local Storage
    storage.setLocationData(city);

    // get and display weather
    getWeather();

});

function getWeather() {
    weather.getWeather()
        .then(data => ui.paint(data))
        .catch(err => console.log(err));
}