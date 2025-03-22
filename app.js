 const apiKey = "f43a7fc70d6fb3a58a24c6ef925e6455";
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const searchBox = document.querySelector(".search input");
 const btn = document.querySelector(".search button");

 async function getWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(res.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {
        let data = await res.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hrs";

    document.querySelector(".weather").style.display = "block"; 
    document.querySelector(".error").style.display = "none";
    }

 }

 btn.addEventListener("click", () => {
    getWeather(searchBox.value);
 });