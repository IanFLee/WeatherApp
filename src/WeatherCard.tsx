interface locationData {
	location: string,
	skyForecast: string,
	temperature: number,
	icon: null
}

function WeatherCard( {data} : {data:WeatherCard} ) {
	console.log( data.temperature );
//	const temperature:number = Math.trunc( ( data.temperature - 273.15) * 9/5 + 32 );
	return (
		<>
			<div className="rounded-xl text-gray-300 m-4 h-48 bg-gray-900">
				<div className="pl-4 text-left">{data.location}</div>
				<div>{data.skyForecast}: {data.temperature}</div>
			</div>
		</>
	)
}

export default WeatherCard;
