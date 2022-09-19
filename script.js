


//Format Time//
function formatTime() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentTime = `${hour}:${minutes}`;

  return currentTime;
}
//End of Format Time//
//Categories//
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var temps = ["hot", "warm", "mild", "chilly", "cold"];
var weathers = ["🌩", "🌦", "🌧", "❄", "🌫", "🌪", "☀","☁"];
//End of Categories//


//Date Variables//
var now = new Date();
var date = now.getDate();
var month = now.getMonth();
var dispDay = days[now.getDay()];
//End of Date Variables//

//Location Variables//
var city = "London";
//End of Location Variables//

//Weather Variables//
var temperature = 23;
//End of Weather Variables//

//Top Date/Time Box//
let currentTime = document.getElementById("currTime");
currTime.innerHTML = formatTime(currentTime);
let disp6 = document.getElementById("bigMonth");
disp6.innerHTML = months[month];
let disp7 = document.getElementById("bigDay");
disp7.innerHTML = dispDay;
let disp9 = document.getElementById("bigDate");
disp9.innerHTML = date;
//End of Top Date/Time Box//
//Big Details//
let disp11 = document.getElementById("bigTemp");
disp11.innerHTML = temperature + "°c";
let disp12 = document.getElementById("bigCity");
disp12.innerHTML = city;
//End of Big Details//
//Provide Weather Alert//

//End  Weather Alert//

// Forecast Dates //
var date1 = date + 1;
let disp1 = document.getElementById("dayOne");
disp1.innerHTML = date1;
var date2 = date + 2;
let disp2 = document.getElementById("dayTwo");
disp2.innerHTML = date2;
var date3 = date + 3;
let disp3 = document.getElementById("dayThr");
disp3.innerHTML = date3;
var date4 = date + 4;
let disp4 = document.getElementById("dayFou");
disp4.innerHTML = date4;
var date5 = date + 5;
let disp5 = document.getElementById("dayFiv");
disp5.innerHTML = date5;
//End of Forecast Dates//


//Date Suffixes//
let disp21 = document.getElementById("dayOneEx");
if (date1 === 1) {
  disp21.innerHTML = "st";
} else if (date1 === 2) {
  disp21.innerHTML = "nd";
} else if (date1 === 3) {
  disp21.innerHTML = "rd";
} else if (date1 === 21) {
  disp21.innerHTML = "st";
} else if (date1 === 22) {
  disp21.innerHTML = "nd";
} else if (date1 === 23) {
  disp21.innerHTML = "rd";
} else if (date1 === 31) {
  disp21.innerHTML = "st";
} else {
  disp21.innerHTML = "th";
}

let disp22 = document.getElementById("dayTwoEx");
if (date2 === 1) {
  disp22.innerHTML = "st";
} else if (date2 === 2) {
  disp22.innerHTML = "nd";
} else if (date2 === 3) {
  disp22.innerHTML = "rd";
} else if (date2 === 21) {
  disp22.innerHTML = "st";
} else if (date2 === 22) {
  disp22.innerHTML = "nd";
} else if (date2 === 23) {
  disp22.innerHTML = "rd";
} else if (date2 === 31) {
  disp22.innerHTML = "st";
} else {
  disp22.innerHTML = "th";
}

let disp23 = document.getElementById("dayThrEx");
if (date3 === 1) {
  disp23.innerHTML = "st";
} else if (date3 === 2) {
  disp23.innerHTML = "nd";
} else if (date3 === 3) {
  disp23.innerHTML = "rd";
} else if (date3 === 21) {
  disp23.innerHTML = "st";
} else if (date3 === 23) {
  disp23.innerHTML = "nd";
} else if (date3 === 23) {
  disp23.innerHTML = "rd";
} else if (date3 === 31) {
  disp23.innerHTML = "st";
} else {
  disp23.innerHTML = "th";
}

let disp24 = document.getElementById("dayFouEx");
if (date4 === 1) {
  disp24.innerHTML = "st";
} else if (date4 === 2) {
  disp24.innerHTML = "nd";
} else if (date4 === 3) {
  disp24.innerHTML = "rd";
} else if (date4 === 21) {
  disp24.innerHTML = "st";
} else if (date4 === 22) {
  disp24.innerHTML = "nd";
} else if (date4 === 24) {
  disp24.innerHTML = "rd";
} else if (date4 === 31) {
  disp24.innerHTML = "st";
} else {
  disp24.innerHTML = "th";
}

let disp25 = document.getElementById("dayFivEx");
if (date5 === 1) {
  disp25.innerHTML = "st";
} else if (date5 === 2) {
  disp25.innerHTML = "nd";
} else if (date5 === 3) {
  disp25.innerHTML = "rd";
} else if (date5 === 21) {
  disp25.innerHTML = "st";
} else if (date5 === 22) {
  disp25.innerHTML = "nd";
} else if (date5 === 23) {
  disp25.innerHTML = "rd";
} else if (date5 === 31) {
  disp25.innerHTML = "st";
} else {
  disp25.innerHTML = "th";
}

function displayWeatherCondition(response) {
    document.getElementById("bigCity").innerHTML = response.data.name;
    document.getElementById("bigTemp").innerHTML = Math.round(
    response.data.main.temp) + "°c" ;
    document.getElementById("bigHumidity").innerHTML = response.data.main.humidity + "%";
    document.getElementById("bigWind").innerHTML = Math.round(
    response.data.wind.speed)  + "kmh" ;
    let farenheit = Math.round(
        response.data.main.temp/5*9) + 32;
    farTemp.onclick = function () {
        disp11.innerHTML = farenheit + "°F";
      };
      celTemp.onclick = function () {
        disp11.innerHTML = Math.round(
            response.data.main.temp) + "°C";
      }; 
        let bigIcon = document.querySelector("img");
        bigIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + response.data.weather[0].icon +"@2x.png");
        let disp41 = document.getElementById("weatherBox");
        let description = response.data.weather[0].description;
        disp41.innerHTML = description.charAt(0).toUpperCase()+ description.slice(1);
        let disp10 = document.getElementById("weatherAlert");
        if (response.data.main.temp > 30) {
        disp10.innerHTML = "It's going to be really hot today. <br>Make sure you stay hydrated!";}
        if (response.data.main.temp < 31 && response.data.main.temp > 25) {
        disp10.innerHTML = "It's going to be hot today. <br>Make sure you take your sunscreen!";}
        if (response.data.main.temp < 26 && response.data.main.temp > 20) {
        disp10.innerHTML = "It's going to be nice and warm today. <br>Perfect for ice cream!";}
        if (response.data.main.temp < 21 && response.data.main.temp > 15) {
        disp10.innerHTML = "It's going to be mild today. <br>Make sure you take a coat!";}
        if (response.data.main.temp < 16 && response.data.main.temp > 10) {
        disp10.innerHTML = "It's going to be chilly today. <br>Make sure you take a coat!";}
        if (response.data.main.temp < 11 && response.data.main.temp > 5) {
        disp10.innerHTML = "It's going to be cold today. <br>Make sure you take a scarf and gloves!";}
        if (response.data.main.temp < 6) {
        disp10.innerHTML = "It's going to be too cold today. <br> Stay indoors and enjoy a hot chocolate. ";}

                                  console.log(response.data);
}


function searchSubmit(event) {
  event.preventDefault();
  let city = cityInput.value;
  searchCity(city);
}

function searchCity(city) {
  var apiKey = "5c4fd2d0f60f604f376814c42a7d0de3";
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    .concat(city, "&appid=")
    .concat(apiKey, "&units=metric");
  axios.get(apiUrl).then(displayWeatherCondition)
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function searchLocation(position) {
  let apiKey = "5c4fd2d0f60f604f376814c42a7d0de3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchSubmit);

let formTwo = document.getElementById("currLocBtn");
formTwo.addEventListener("click", getCurrentLocation);

searchCity("London");
