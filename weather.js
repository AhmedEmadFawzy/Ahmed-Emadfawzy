async function getWeather() {
    const cityInput = document.getElementById("search").value.trim();
    const apiKey = "7df7dd1aa9e4413ba36213835241412";
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput}&days=3`;

    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        const getDayAndDate = (dateStr) => {
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const date = new Date(dateStr);
            const day = days[date.getDay()]; 
            const dayDate = date.getDate();
            const month = date.toLocaleString('default', { month: 'short' }); 
            return `${day} | ${dayDate} ${month}`; 
          };
        const forecast = data.forecast.forecastday;

        document.getElementById("day1-day").textContent = getDayAndDate(data.forecast.forecastday[0].date).split(" | ")[0];
        document.getElementById("day1-date").textContent = getDayAndDate(data.forecast.forecastday[0].date).split(" | ")[1];     
           document.getElementById("day1-temp").textContent = `${forecast[0].day.avgtemp_c}°C`;  
        document.getElementById("day1-desc").textContent = forecast[0].day.condition.text;
        document.getElementById("day1-icon").src = forecast[0].day.condition.icon;
        document.getElementById("day1-rain").textContent = forecast[0].day.daily_chance_of_rain + "%";
        document.getElementById("day1-wind").textContent = forecast[0].day.maxwind_kph + " km/h";
        document.getElementById("day1-wind-dir").textContent = forecast[0].day.maxwind_dir;
        document.getElementById("city-name").innerHTML =  data.location.name ; 

        
        document.getElementById("day2-day").textContent = getDayAndDate(data.forecast.forecastday[1].date).split("  |  ")[0];  
               document.getElementById("day2-temp").textContent =` ${forecast[1].day.avgtemp_c}°C`; 
        document.getElementById("day2-desc").textContent = forecast[1].day.condition.text;
        document.getElementById("day2-icon").src = forecast[1].day.condition.icon;
        document.getElementById("day2-temp").textContent = `${forecast[1].day.avgtemp_c}°C`;  



            document.getElementById("day3-date").textContent = getDayAndDate(data.forecast.forecastday[2].date).split(" | ")[0];
              document.getElementById("day3-temp").textContent =`${forecast[2].day.avgtemp_c}°C`; 
        document.getElementById("day3-desc").textContent = forecast[2].day.condition.text;
        document.getElementById("day3-icon").src = forecast[2].day.condition.icon;

        document.getElementById("day3-temp").textContent = `${forecast[2].day.avgtemp_c}°C`;  
    } 
}

document.getElementById("search").addEventListener("input", getWeather);