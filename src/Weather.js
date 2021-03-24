function getWeather() {
    let apiKey = 'e5f1495076304fe9b8c6c73c670e060e';
    let city_name = document.getElementById('city_name').value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`;
 
    fetch(url).then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            // console.log(data.name);
            localStorage.setItem('city', city_name);
            

            let the_city = document.querySelector('.the_city');
            the_city.textContent = `City: ${data.name}`
            if(the_city == '' && the_city == null) {
               the_city.innerHTML = localStorage.getItem('city');
            }
            
 
            let deg = document.querySelector('.deg');
            deg.innerHTML = `Temp: ${Math.round(data.main.temp - 273) + '&deg;'}`
            console.log(data.main.temp);

            let clouds = document.querySelector('.clouds');
            clouds.textContent = data.weather[0].description;

            let windSpeed = document.querySelector('.features');
            windSpeed.innerHTML = `Wind speed is: ${data.wind.speed}`;

        })

    }