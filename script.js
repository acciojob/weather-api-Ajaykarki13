//your JS code here. If required.

	      let btn = document.getElementById('btn');
        let display = document.getElementById('weatherData');

        btn.addEventListener('click', handleFetch);

        function handleFetch() {
fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=-0.1278&appid=249329444d4cef14a3d6d0638fe07d99')
                .then(res => res.json())
                .then(data => {
                    const weatherMain = data.weather[0].main;
                    display.innerHTML = `Current weather in London: ${weatherMain}`;
                })
                .catch(error => {
                    console.log(error, 'no data');
                });
        }