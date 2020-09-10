// init storage
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();
// init weather object
const weather =  new Weather (weatherLocation);
// init ui
const ui = new UI();


document.addEventListener("DOMContentLoaded",getWeather);

document.getElementById("w-change-btn").addEventListener("click",()=>{
  const city = document.getElementById("city").value;
  weather.changeLocation(city);
  storage.setLocationData(city);
  getWeather();
  $("#locModal").modal("hide");
})


//gets weather from api
function getWeather(){
weather.getWeather()
.then(res=> ui.paint(res))
.catch(err=> console.log(err));
}