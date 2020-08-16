class UI {
    constructor() {
        this.icon = document.getElementById('w-icon');
        this.location = document.getElementById('w-location');
        this.temp = document.getElementById('w-temp');
        this.desc = document.getElementById('w-desc');

    }

    paint(weather) {
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.temp.textContent = `${weather.main.temp}`;
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;

    }
}