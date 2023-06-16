//your JS code here. If required.

	      let btn = document.getElementById('btn');
        let display = document.getElementById('weatherData');

        btn.addEventListener('click', handleFetch);

        function handleFetch() {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=249329tLzXDYZxWc9U4jMUoKNdD9jS8yWUYA9')
                .then(res => res.json())
                .then(data => {
                    const weatherMain = data.weather[0].main;
                    display.innerHTML = `Current weather in London: ${weatherMain}`;
                })
                .catch(error => {
                    console.log(error, 'no data');
                });
        }