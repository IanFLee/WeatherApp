import LocationData from './LocationData.tsx'

    // Test font loading immediately
  const switzer = {
    fontFamily: 'Switzer, mono'
  };
  
    const clashD = {
    fontFamily: 'ClashDisplay, mono'
  };

export const WeatherCard = ( {data, active, onClick} : {data: LocationData; active: boolean; onClick:()=>void;} ) => (
		
		<div
		className="rounded-xl text-gray-300 m-4 h-48 bg-gray-900 p-2 cursor-pointer"
		onClick={onClick}
		>
		<div className={`h-full p-2 bg-gray-900 rounded-xl ${active ? "border-2 border-yellow-300" : "border-4 border-transparent"}`}>
			<div className="pl-4 text-left text-3xl" style={clashD}>{data.location}</div>
			<div>
				<img src={"https://openweathermap.org/img/wn/" + data.icon + ".png"} />
				<p className={"text-6xl"} style={switzer}>{data.skyForecast}: {data.temperature}</p>
			</div>
		</div>
		</div>
		
);

