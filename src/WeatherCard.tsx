interface LocationData {
	location: string;
	skyForecast: string;
	temperature: number;
	icon: null;
}

export const WeatherCard = ( {data} : {data:WeatherCard} ) => (

		<div className="rounded-xl text-gray-300 m-4 h-48 bg-gray-900">
			<div className="pl-4 text-left">{data.location}</div>
			<div>{data.skyForecast}: {data.temperature}</div>
		</div>

);
