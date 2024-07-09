document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "aca5e809169183fbb15438d96aa0cb1c";
  const searchBtn = document.getElementById("searchBtn");
  const cityInput = document.getElementById("cityInput");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");

  searchBtn.addEventListener("click", function () {
    const city = cityInput.value;
    if (city) {
      fetchWeatherData(city);
    } else {
      alert("Please enter a city name.");
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found.");
      }
      const data = await response.json();
      updateWeatherDetails(data);
    } catch (error) {
      alert(error.message);
    }
  }

  function updateWeatherDetails(data) {
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
  }
});
