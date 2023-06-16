//your JS code here. If required.

"lat":51.4875167,
      "lon":-0.1687007,

	let btn = document.getElementById('btn')
let display = document.getElementById('weatherData')

btn.addEventListener('click',handleFetch)

function handleFetch(){
fetch(`https://api.openweathermap.org/data/2.5/weather?
lat={51.4875167}&lon={-0.1687007}&appid={249329AG24aqUAk3LyNQSKfu1opX4FRjxYPX9
}`).then(res=>res.json)
.then(data=> displayData(data.weather))
}

function displayData(arr)
	{
		
		arr.map((t)=>{
			display.innerHTML = `Current weather in London: ${t.main} `
		})
	}