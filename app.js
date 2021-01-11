let btn = document.querySelector(".submit-btn");

function getValue() {
    let inputValue = document.querySelector(".input-field").value;
    console.log(inputValue);
    
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputValue + '&units=metric&APPID=5d066958a60d315387d9492393935c19';

    fetch(apiUrl)
    .then(data => data.json())
    .then(json => {
        console.log(json);

        // humidity
        let humidityValue = document.createElement("div");
        let humidity = document.querySelector(".humidity");
        humidityValue.textContent = ": " + json.main.humidity + "%";
        humidity.append(humidityValue);

        // pressure
        let pressureValue = document.createElement("div");
        let pressure = document.querySelector(".pressure");
        pressureValue.textContent = ": " + json.main.pressure + " hPa";
        pressure.append(pressureValue);

        // wind
        let windValue = document.createElement("div");
        let wind = document.querySelector(".wind");
        let windDirectionDeg = json.wind.deg;
        let windDirection;
        if (windDirectionDeg > 348.75 && windDirectionDeg < 11.25) {
            windDirection = "N";
        } else if (windDirectionDeg > 11.25 && windDirectionDeg < 33.75) {
            windDirection = "NNE"
        } else if (windDirectionDeg > 33.75 && windDirectionDeg < 56.25) {
            windDirection = "NE"
        } else if (windDirectionDeg > 56.25 && windDirectionDeg < 78.75) {
            windDirection = "ENE"
        } else if (windDirectionDeg > 78.75 && windDirectionDeg < 101.25) {
            windDirection = "E"
        } else if (windDirectionDeg > 101.25 && windDirectionDeg < 123.75) {
            windDirection = "ESE"
        } else if (windDirectionDeg > 123.75 && windDirectionDeg < 146.25) {
            windDirection = "SE"
        } else if (windDirectionDeg > 146.25 && windDirectionDeg < 168.75) {
            windDirection = "SSE"
        } else if (windDirectionDeg > 168.75 && windDirectionDeg < 191.25) {
            windDirection = "S"
        } else if (windDirectionDeg > 191.25 && windDirectionDeg < 213.75) {
            windDirection = "SSW"
        } else if (windDirectionDeg > 213.75 && windDirectionDeg < 236.25) {
            windDirection = "SW"
        } else if (windDirectionDeg > 236.25 && windDirectionDeg < 258.75) {
            windDirection = "WSW"
        } else if (windDirectionDeg > 258.75 && windDirectionDeg < 281.25) {
            windDirection = "W"
        } else if (windDirectionDeg > 281.25 && windDirectionDeg < 303.75) {
            windDirection = "WNW"
        } else if (windDirectionDeg > 303.75 && windDirectionDeg < 326.25) {
            windDirection = "NW"
        } else if (windDirectionDeg > 326.25 && windDirectionDeg < 348.75) {
            windDirection = "NNW"
        };
        windValue.textContent = ": " + json.wind.speed + " km/s " + windDirection;
        wind.append(windValue);

        // DATE & TIME
        let currentDate = new Date();

        let currentMonth = currentDate.getMonth() + 1;
        if (currentMonth == 1) {
            currentMonth = "Jan";
        } else if (currentMonth == 2) {
            currentMonth = "Feb"
        } else if (currentMonth == 3) {
            currentMonth = "Mar"
        } else if (currentMonth == 4) {
            currentMonth = "Apr"
        } else if (currentMonth == 5) {
            currentMonth = "May"
        } else if (currentMonth == 6) {
            currentMonth = "Jun"
        } else if (currentMonth == 7) {
            currentMonth = "Jul"
        } else if (currentMonth == 8) {
            currentMonth = "Aug"
        } else if (currentMonth == 9) {
            currentMonth = "Sep"
        } else if (currentMonth == 10) {
            currentMonth = "Oct"
        } else if (currentMonth == 11) {
            currentMonth = "Nov"
        } else if (currentMonth == 12) {
            currentMonth = "Dec"
        } else {
            currentMonth = "The World ends"
        };

        let currentDay = currentDate.getDate();
        
        let currentYear = currentDate.getFullYear();

        let currentHour = currentDate.getHours();
        let currentMinute = 0 + currentDate.getMinutes();
        let currentSecond = 0 + currentDate.getSeconds();

        // date
        let date = document.querySelector(".date");
        let dateValue = document.createElement("div");
        dateValue.textContent = currentMonth + " " + currentDay + ", " + currentYear;
        date.append(dateValue);

        // time
        let time = document.querySelector(".time");
        let timeValue = document.createElement("div");
        timeValue.textContent = currentHour + ":" + currentMinute + ":" + currentSecond;
        time.append(timeValue);


        // temperature
        let temperature = document.querySelector(".temp");
        let temperatureValue = document.createElement("div");
        let degreeIcon = document.createElement("div");
        let degree = document.createElement("div");
        degree.textContent = "C";
        temperatureValue.textContent = Math.floor(json.main.temp);
        temperature.append(temperatureValue, degreeIcon, degree);  
        
        // feels-like
        let feelsLike = document.querySelector(".feels-like-temp");
        let feelsLikeValue = document.createElement("div");
        let degreeIcon2 = document.createElement("div");
        let degree2 = document.createElement("div");
        degree2.textContent = "C";
        feelsLikeValue.textContent = ":" + Math.floor(json.main.feels_like);
        feelsLike.append(feelsLikeValue, degreeIcon2, degree2);

        // city
        let city = document.querySelector(".city");
        let cityValue = document.createElement("div");
        cityValue.textContent = json.name;
        city.append(cityValue);

        // cloudness
        let cloudness = document.querySelector(".cloudness");
        let cloudnessName = document.createElement("div");
        cloudnessValue = json.clouds.all;
        if (cloudnessValue >= 0 && cloudnessValue < 25) {
            cloudnessValue = "Clear";
        } else if (cloudnessValue >= 25 && cloudnessValue < 50) {
            cloudnessValue = "Partly Cloudy";
        } else if (cloudnessValue >= 50 && cloudnessValue < 75) {
            cloudnessValue = "Cloudy";
        } else if (cloudnessValue >= 75) {
            cloudnessValue = "Very Cloudy";
        };
        cloudnessName.textContent = cloudnessValue;
        cloudness.append(cloudnessName);

        // weather-icon
        let weatherImg = document.querySelector(".weather-img");
        let weatherIconImg = document.createElement("img");
        let weatherIconValue = json.weather[0].icon;
        let weatherIconUrl = "http://openweathermap.org/img/w/" + weatherIconValue + ".png";
        weatherIconImg.setAttribute("src", weatherIconUrl);
        weatherImg.append(weatherIconImg);
    });

};

btn.addEventListener("click", getValue);


