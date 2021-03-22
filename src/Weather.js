const apiKey = 'e5f1495076304fe9b8c6c73c670e060e';
const btn = document.querySelector('.btn-primary');
const city = document.querySelector('.city-name')

fetch('http://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=e5f1495076304fe9b8c6c73c670e060e')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data);

        let cityName = document.querySelector('.city-name');
        cityName.textContent = `City: ${data.name}`

        let deg = document.querySelector('.price');
        deg.innerHTML = `Temp: ${Math.round(data.main.temp - 273) + '&deg;'}`
        console.log(data.main.temp);

        let clouds = document.querySelector('.disclaimer');
        clouds.textContent = data.weather[0].description;

        let windSpeed = document.querySelector('.features');
        windSpeed.innerHTML = `Wind speed is: ${data.wind.speed}`;


        btn.addEventListener('click', (e) => {

        })
    })