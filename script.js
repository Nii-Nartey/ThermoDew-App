//variable
const apiKey = 'a29ec6fc21c618d1d55c3ddb42658c1e';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.input');
const searchButton = document.querySelector('.search');
const weatherIcon = document.querySelector('.weather-icon');
let theCity = document.querySelector('.city');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');

//Defining the Weather checking function
async function checkWeather(cityName) {
  const response = await fetch(apiUrl + `${cityName}&appid=${apiKey}`);
  if (response.status == 404) {
    alert('Invalid location, please enter a city');
    return;
    /* theCity.innerHTML = "I don't know this place"; */
  } else {
    let data = await response.json();
    console.log(data);
    theCity.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + '°c';
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}km/h`;

    switch (data.weather[0].main) {
      case 'Clouds':
        weatherIcon.setAttribute('src', './images/clouds.png');
        break;
      case 'Clear':
        weatherIcon.setAttribute('src', './images/clear.png');
        break;
      case 'Drizzle':
        weatherIcon.setAttribute('src', './images/drizzle.png');
        break;
      case 'Rain':
        weatherIcon.setAttribute('src', './images/rain.png');
        break;
      case 'Mist':
        weatherIcon.setAttribute('src', './images/mist.png');
        break;
      default:
        weatherIcon.setAttribute('src', './images/clear.png');
        break;
    }
    document.querySelector('.weather').style.display = 'block';
  }
}

searchButton.addEventListener('click', () => {
  checkWeather(searchBox.value);
});
