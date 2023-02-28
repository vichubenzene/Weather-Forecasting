let globalCity = '';
function getWeather() {
	var city = document.getElementById("city").value;
	if (city==""){
		city = globalCity;
	}
	var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=bf88ebbec8ca60e3a8591d385a42fc04&units=metric";

	fetch(url)
	.then(response => response.json())
	.then(data => {
		if (data.cod === "404") {
			document.getElementById("error").innerHTML = "City not found";
			document.getElementById("displayedCity").innerHTML = "";
			document.getElementById("temp").innerHTML = "";
			document.getElementById("desc").innerHTML = "";
			document.getElementById("climate-image").src="";
		} else {
			document.getElementById("error").innerHTML = "";
			document.getElementById("displayedCity").innerHTML = data.name + ", "+ data.sys.country;
			document.getElementById("temp").innerHTML = data.main.temp + " &#8451;";
			document.getElementById("desc").innerHTML = data.weather[0].description;
			document.getElementById("climate-image").src="image/"+ wallpaper(data.weather[0].description);
		}
	})
	.catch(error => console.log(error));
}
function wallpaper(info)
{
	info=info.toLowerCase();
	if (info.includes("clear"))
	{
		return "Clear.jpg"}
	else if(info.includes("cloud"))
	{
		return "Cloud.jpg"}
	else if(info.includes("haze"))
	{
		return "Haze.jpg"}
	else if(info.includes("mist"))
	{
		return "Mist.jpg"}
	else if(info.includes("rain"))
	{
		return "Rain.jpg"}
	else if(info.includes("snow"))
	{
		return "Snow.jpg"}
}
fetch("https://ipapi.co/json/")
.then(response => response.json())
.then(data => {
	var city = data.city;
	globalCity=data.city;
	var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=bf88ebbec8ca60e3a8591d385a42fc04&units=metric";

	fetch(url)
	.then(response => response.json())
	.then(data => {
		document.getElementById("currentLocation").innerHTML = "📍 &nbsp;" + data.name + ", "+ data.sys.country;
		document.getElementById("currentTemperature").innerHTML ="&nbsp; &nbsp; &nbsp;" + data.main.temp +  " &#8451; &nbsp;" + data.weather[0].description;
		document.getElementById("displayedCity").innerHTML = data.name + ", "+ data.sys.country;
		document.getElementById("temp").innerHTML = data.main.temp + " &#8451;";
		document.getElementById("desc").innerHTML = data.weather[0].description;
		document.getElementById("climate-image").src="image/"+ wallpaper(data.weather[0].description);
	})
	.catch(error => console.log(error));
})
.catch(error => console.log(error));


const nightModeBtn = document.getElementById("nightModeBtn");
const body = document.body;

nightModeBtn.addEventListener("click", () => {
  body.classList.toggle("night-mode");
  if (body.classList.contains("night-mode")) {
    nightModeBtn.innerHTML = '☀️'
  } else {
    nightModeBtn.innerHTML = '🌙';
  }
});

