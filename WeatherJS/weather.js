class Weather {
  constructor(city){
    this.apiKey = "8b4008496cf476c79c2871917f518dcc";
    this.city = city;
  }
// Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
    const responseData = await response.json();
    return responseData;
  }
  // change Weather location
  changeLocation(city){
    this.city = city;
  }
}