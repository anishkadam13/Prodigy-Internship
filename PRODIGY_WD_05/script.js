const apiKey = "YOUR_API_KEY";

function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        alert("City not found");
        return;
      }

      document.getElementById("location").innerText = data.name;
      document.getElementById("temp").innerText =
        Math.round(data.main.temp) + "°C";
      document.getElementById("condition").innerText =
        data.weather[0].main;

      document.getElementById("humidity").innerText =
        data.main.humidity + "%";
      document.getElementById("wind").innerText =
        data.wind.speed + " km/h";

      const iconCode = data.weather[0].icon;
      document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    })
    .catch(() => {
      alert("Error fetching weather data");
    });
}
