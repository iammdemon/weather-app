// Search Btn

const searchBtn = document.getElementById("search-btn");
const cityInputField = document.getElementById("cityInput");
const API_KEY = "9dcaeff5df2ef2de785b88ec4cf796e9";


// Function to fetch weather data and update the UI
async function getWeatherData(cityName) {
    try {
        const apiKey = '9dcaeff5df2ef2de785b88ec4cf796e9'; // Replace with your OpenWeatherMap API key
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        console.log(data);

        // Update current weather section
        const currentWeather = document.querySelector('.current-weather');
        currentWeather.querySelector('h2').textContent = `${data.name} (${new Date().toLocaleDateString()})`;
        currentWeather.querySelector('h4:nth-child(2)').textContent = `Temperature: ${data.main.temp}°C`;
        currentWeather.querySelector('h4:nth-child(3)').textContent = `Wind: ${data.wind.speed} M/S`;
        currentWeather.querySelector('h4:nth-child(4)').textContent = `Humidity: ${data.main.humidity}%`;

        // Update weather icon and description
        const icon = currentWeather.querySelector('img');
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        
        const descWeather = document.getElementById('descWeather');

        descWeather.innerText = data.weather[0].description;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to handle the search button click
document.getElementById('search-btn').addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.trim();
    if (cityName !== '') {
        getWeatherData(cityName);
        cityInput.value = ''; // Clear the input field
    }
});

// You can also add functionality to use the user's location with the "Use Location" button.
