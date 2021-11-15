var cityEl = document.querySelector("#search-city");
var buttonEl = document.querySelector("#search-button");
var currentWeatherEl = document.querySelector("#current-weather");
var currentCityEl = document.querySelector("#current-city");
var mainPicEl = document.querySelector("#main-pic");
var mainTempEl = document.querySelector("#temp");
var mainWindEl = document.querySelector("#wind");
var mainHumidityEl = document.querySelector("#humidity");
var mainUvEl = document.querySelector("#uv");
var apiKey = "4b4dd5a5c5b529e5ff248f6a9e2b06dd";














buttonEl.addEventListener("submit", formSubmitHandler);