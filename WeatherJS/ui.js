class UI{
  constructor(){
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather){
    this.location.textContent = weather.name;
    this.location.style.color = "yellow"
    this.desc.textContent = this.capitalize(weather.weather[0].description);
    this.string.textContent = `${(weather.main.temp - 273).toFixed(2)} °C`;
    this.icon.setAttribute("src",`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels like ${weather.main.feels_like}`;
    this.wind.textContent = `Wind ${weather.wind.speed} knots`;
  }
  capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}