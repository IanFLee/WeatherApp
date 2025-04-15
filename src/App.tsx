import { useState, useEffect } from 'react'
import { WeatherCard } from './Components/WeatherCard.tsx'
import LocationData from './Components/LocationData.tsx'
import './App.css'

  
  const locations: string[] = ["Lima", "Reykjavik", "Tasmania"];
  
  useEffect(() => {
  console.log("API Key:", import.meta.env.VITE_OPENWEATHERMAP_KEY); // Check Vercel logs
}, []);

  const fetchWeather = async (location: string) => {
 
  	const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + import.meta.env.VITE_OPENWEATHERMAP_KEY);
      const data = await res.json();
      console.log(data)
      return {
        location: location,
        skyForecast: data.weather[0].main,
        temperature: Math.trunc( ( data.main.temp - 273.15 ) * 9/5 + 32 ), // Convert Kelvin to Fahrenheit
        icon: data.weather[0].icon
      }
 
  }

function App() {
  const [weather, setWeather] = useState<LocationData[]>([])
  
  // Fetch and Set Weather
  useEffect(() => {
  	Promise.all(locations.map(fetchWeather))
  	.then(setWeather)
  	.catch(console.error);
  }, [])

  return (
    <>
      <div className="rounded-xl mt-4 mb-4 bg-orange-500 grid grid-cols-3 sm:grid-cols-3 gap-4">
		{weather.map((data)=>(
			<WeatherCard key={data.location} data={data} />
		))}
	  </div>
      <h1 className="rounded-xl mt-4 mb-4 bg-gray-700 h-64 text-white text-3xl border border-gray-600 flex items-center justify-center">temp FAHR. - City</h1>
      <h6 className="bg-white h-16 text-xl border">Tailwind - React - Typescript</h6>
      <div className="bg-white text-left pl-2"><p>BtnUp - remember to remove env var</p></div>
      <div className="bg-white text-left pl-2"><p>Portfolio - o</p></div>
    </>
  )
}

export default App
