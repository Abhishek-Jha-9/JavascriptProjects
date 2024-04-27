const API_KEY = "9bfb67164fb8469c638708d2923eb9e7";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searcBoxInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".btn");

async function checkWeather(city) {
  const response = await fetch(API_URL + `&q=${city}` + `&appid=${API_KEY}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    let data = await response.json();
    // console.log(data);
    // return {data.name}
    let cityName = document.querySelector(".city");
    let temp = document.querySelector(".temp");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");
    cityName.innerHTML = `${data.name}`;
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${Math.round(data.wind.speed)}kmph`;

    // updates the images
    let weatherIcon = document.querySelector(".weather-icon");
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Humidity") {
      weatherIcon.src = "images/humidity.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Wind") {
      weatherIcon.src = "images/wind.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searcBoxInput.value);
});
