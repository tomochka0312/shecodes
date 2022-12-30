function formatDate(date) {
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  let minutes = date.getDay();
  if (minutes < 10) minutes = `0${minutes}`;
  let hours = date.getHours();
  if (hours < 10) hours = `0${hours}`;
  return `${day}, ${hours} : ${minutes}`;
}
function displayWeatherDetails(response) {
  console.log(response);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
}

function search(city) {
  let apiKey = "7f0fdd5479dc5dd487ee8983ebd8f172";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiURL).then(displayWeatherDetails);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);

  let button = document.querySelector("#current-location-button");
  button.addEventListener("click", getCurrentPosition);

  function showTemperature(response) {
    let currentCity = document.querySelector("#city");
    currentCity.innerHTML = response.data.name;
    let currentTemperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = currentTemperature;

    console.log(response);
  }
}

function retrievePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "82a3474940da3db108545e6e62bc5f86";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

  let apiUrl = `${apiEndpoint}?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}




