let searchBtn = document.getElementById("SearchButton");

const getWeatherData = async () =>{
   
    let location = document.getElementById("SearchInput"); 
    let locationValue = location.value;

    let weatherData;
    
    try {
        const aPIKey = `6fa44d494da5eda6143525a5b652003c`
        const aPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&appid=${aPIKey}`
        weatherData = await axios.get(aPIURL);

    } catch(e){
        document.getElementById("result").innerHTML = "Sorry. This is not a valid place";
        document.getElementById("windSpeed").innerHTML = ``;
        document.getElementById("temp").innerHTML = ``;
        document.getElementById("humid").innerHTML = ``;
        document.getElementById("descript").innerHTML = ``;
    }
    
    const weatherCityName = weatherData.data.name;
    const windSpeed = weatherData.data.wind.speed;
    const temperature = Math.round(weatherData.data.main.temp-273.15);
    const humidity = weatherData.data.main.humidity;
    const weatherDescription = weatherData.data.weather[0].description;
    const weatherMain = weatherData.data.weather[0].main;


    document.getElementById("result").innerHTML = weatherCityName;
    document.getElementById("windSpeed").innerHTML = `Wind Speed: ${windSpeed} km/h`;
    document.getElementById("temp").innerHTML = `Temperature: ${temperature} °C`;
    document.getElementById("humid").innerHTML = `Humidity: ${humidity}%`;
    document.getElementById("descript").innerHTML = `Description: ${weatherDescription}`;

if (weatherMain == "Clouds") {
    document.getElementById("weatherIcon").src = "images/Cloud.png";
} else if (weatherMain == "Clear") {
    document.getElementById("weatherIcon").src = "images/Clear.png";
} else if (weatherMain == "Snow") {
    document.getElementById("weatherIcon").src = "images/Snow.png";
} else if (weatherMain == "Rain") {
    document.getElementById("weatherIcon").src = "images/Rain.png";
} else if (weatherMain == "Drizzle") {
    document.getElementById("weatherIcon").src = "images/Drizzle.png";
} else if (weatherMain == "Thunderstorm") {
    document.getElementById("weatherIcon").src = "images/ThunderStorm.png";
} else  {
    document.getElementById("weatherIcon").src = "images/OtherWeather.png";
} 

    }

searchBtn.addEventListener('click',getWeatherData) 




