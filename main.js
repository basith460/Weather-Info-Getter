const api = {
  key: "7e3f21edee540e6110af347b55eb1ab2",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.getElementById('search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(e) {
  if (e.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  
  fetch(api.base + "weather?q=" + query + "&units=metric&appid=" + api.key)
    .then(weather => {
      return weather.json();
    }).then((response)=>{
      console.log(response);
      displayResults(response);
    });
}

function displayResults (weather) {
  let city = document.getElementById('city');
  city.innerText = weather.name + "," + weather.sys.country;

  let now = new Date();
  let date = document.getElementById('date');
  date.innerText = now;

  let temp = document.getElementById('temp');
  temp.innerHTML = Math.round(weather.main.temp) + "<span>°c</span>";

  let weather1=document.getElementById('weather');
  weather1.innerHTML= weather.weather[0].main;

  let high_low=document.getElementById('h/l');
  high_low.innerHTML=Math.round(weather.main.temp_min) +"<span>°c</span>"+"/"+ Math.round(weather.main.temp_max)+"<span>°c</span>";


}

getResults('chennai');