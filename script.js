    const apiKey = '8708a432f5e34ff54ef224eda52db730';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

    const searchBox = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weither-icon")

    async function weatherCheck(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{
            const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km\h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "img/clouds.webp";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img/rain.webp";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "img/mist.webp" ;
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img/clear.webp";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "img/drizzle.webp" ;
        }
        

        // console.log(data);
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }}
    
    searchbtn.addEventListener("click",()=>{
        weatherCheck(searchBox.value);

    })