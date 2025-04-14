interface WeatherCard {
	location: string,
	skyForecast: string,
	temperature: number,
	icon: null
}

function WeatherCard(location, skyForecast, temperature) {
	
	

	return (
		<>
			<div className="bg-orange-200 h-1/4">{location}</div>
			<div className="bg-blue-200 h-1/2">icon - {skyForecast} - {temperature}</div>
		</>
	)
}

export default WeatherCard;
