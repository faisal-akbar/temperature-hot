// Weather
class Weather {
  constructor(city) {
    // Place your api key from openweathermap here
    this.apiKey = process.env.API_KEY;
    this.city = city;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&&units=metric&appid=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  // Change Weather location
  changeLocation(city) {
    this.city = city;
  }
}

// use dotenv to hide api key
require('dotenv').config();
// console.log(process.env);