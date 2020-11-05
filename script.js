let now = new Date();
let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

let month = months[now.getMonth()];

h2.innerHTML = `${day} ${month} ${date}, ${year} ${hours}:${minutes}`;

function findCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let findCity = document.querySelector("h1");
  findCity.innerHTML = searchInput.value;
}

let temperature = 30;
let faherenheitTemperature = Math.round((temperature * 9) / 5 + 32);
let celsiusTemperature = Math.round(temperature);

function changeF(event) {
  event.preventDefault();
  let currentTemp = document.querySelector(".temperature-current");
  currentTemp.innerHTML = faherenheitTemperature;
}
function changeC(event) {
  event.preventDefault();
  let currentTemp = document.querySelector(".temperature-current");
  currentTemp.innerHTML = celsiusTemperature;
}

let faherenheittemperature = document.querySelector("#faherenheitTemperature");
faherenheittemperature.addEventListener = ("click", changeF);

let celsiustemperature = document.querySelector("#celsiusTemperature");
celsiustemperature.addEventListener = ("click", changeC);

//current city and current temperature

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#feelsLike").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
}
function searchCity(city) {
  let apiKey = "9e561b29043530ea13bc0b5afe781a8a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}
let form = document.querySelector("#search-from");
form.addEventListener("submit", handleSubmit);

function dailyTemperature(response){
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humdity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate (response.data.dt. * 1000);
iconElement.innerHTML = "http://openweathermap.org/img/wn/10d@2x.png"
}

function currentPosition(position) {
  let apiKey = "9e561b29043530ea13bc0b5afe781a8a";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&unit=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}
let currentButton = docuement.Selector("#current-button");
currentButton.addEventListener("click", currentPosition);

