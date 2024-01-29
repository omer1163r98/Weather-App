const searchButton = document.querySelector('.searchButton');
const weatherContainer = document.querySelector('.container');
const temp = document.querySelector('.temp');
const city = document.querySelector('.location');
const gust = document.querySelector('.gust-mph');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const precip = document.querySelector('.percip');
const pressure = document.querySelector('.pressure');
const uv = document.querySelector('.uv');



    searchButton.addEventListener('click', () => {
        const searchValue = document.querySelector('.input').value;
        const newP = document.querySelector('.disc');
        fetch(`https://api.weatherapi.com/v1/current.json?key=ed29d66d01844c658c4162349242901&q=${searchValue}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(response => {
                console.log(response);
                // Access the specific data you need from the response
                const getTemperature = response.current.temp_f;
                const getLocation = response.location.name;
                const getFeelsLike = response.current.feelslike_f;
                const getGust = response.current.gust_mph;
                const getHumidity = response.current.humidity;
                const getPrecip = response.current.precip_in;
                const getPressure = response.current.pressure_mb;
                const getUv = response.current.uv;

                temp.innerText =  `${getTemperature} F`
                city.innerText = getLocation
                gust.innerText = getGust
                feelsLike.innerText = getFeelsLike
                humidity.innerText = `${getHumidity}%`
                precip.innerText = `${getPrecip}% `
                pressure.innerText = `${getPressure} MB`
                uv.innerText = getUv
                if(getTemperature >= 75){
                    newP.innerText = 'Its pretty hot today'
                }
                else if( getTemperature <= 74 && getTemperature >= 48){
                    newP.innerText = 'Its pretty warm today'
                }
                else {
                    newP.innerText = 'Its pretty cold today'
                }

                
                
            })
            .catch(error => console.error('Error fetching data:', error));
    });
