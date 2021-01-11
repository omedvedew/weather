fetch('http://api.openweathermap.org/data/2.5/weather?q=lviv&units=metric&APPID=5d066958a60d315387d9492393935c19')
.then(data => data.json())
.then(json => console.log(json));