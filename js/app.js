

var zipCode = prompt('What is your zipcode?');

$.ajax({
	method: "GET",
	url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial",
	success: function(response){
		var weatherReading = response;
		console.log(weatherReading);
		//location//
	var location = weatherReading.name;
	$('body').append('<h2>' + location + '</h2>');
		//currenttemperature//
	var currentTemperature = weatherReading.main.temp;
	console.log(currentTemperature);
	$('body').append("<h1>" + Math.floor(weatherReading.main.temp) + "</h1>");
		//high-temp//
	var highTemp = weatherReading.main.temp_max;
	$('body').append("<h3>High | " + Math.floor(highTemp) + "</h3>");
		//low-temp//
	var lowTemp = weatherReading.main.temp_min;
	$('body').append("<h3>Low   | " + Math.floor(lowTemp) + "</h3>");
	
	}

})

//Use the response to display the current temperature in fahrenheit, 
//the high and low temperate in fahrenheit, the current weather "description", 
//nd the name of the city that came back from the API



