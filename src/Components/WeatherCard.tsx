import LocationData from './LocationData.tsx'

export const WeatherCard = ( {data} : {data: LocationData} ) => (

		<div className="rounded-xl text-gray-300 m-4 h-48 bg-gray-900">
			<div className="pl-4 text-left">{data.location}</div>
			<div>
				<img src={"https://openweathermap.org/img/wn/" + data.icon + ".png"} />
				{data.skyForecast}: {data.temperature}
			</div>
		</div>

);

