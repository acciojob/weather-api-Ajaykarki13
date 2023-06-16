//your JS code here. If required.

	      let btn = document.getElementById('btn');
        let display = document.getElementById('weatherData');

        btn.addEventListener('click', handleFetch);

        function handleFetch() {
fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=572be912733a41a8b8309700ef2e114a')
                .then(res => res.json())
                .then(data => {
                    const weatherMain = data.weather[0].main;
                    display.innerHTML = `Current weather in London: ${weatherMain}`;
                })
                .catch(error => {
                    console.log(error, 'no data');
                });
        }