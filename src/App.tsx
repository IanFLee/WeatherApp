import { useState, useEffect } from 'react'
import { WeatherCard } from './Components/WeatherCard.tsx'
import LocationData from './Components/LocationData.tsx'
import './App.css'

  
  const locations: string[] = ["Lima", "Reykjavik", "Tasmania"];

  const fetchWeather = async (location: string) => {
  	const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + import.meta.env.VITE_OPENWEATHERMAP_KEY);
      const data = await res.json();
      return {
        location: location,
        skyForecast: data.weather[0].main,
        temperature: Math.trunc( ( data.main.temp - 273.15 ) * 9/5 + 32 ), // Convert Kelvin to Fahrenheit
        icon: data.weather[0].icon
      }
 
  }

function App() {
  const [weather, setWeather] = useState<LocationData[]>([])
  // Track which card is active
  const [activeCard, setActiveCard] = useState<LocationData | null>(null)
  
  
    // Test font loading immediately
  const switzer = {
    fontFamily: 'Switzer, mono'
  };
  
  /*
    const clashD = {
    fontFamily: 'ClashDisplay, mono'
  };
  */
  
  // Fetch and Set Weather
  useEffect(() => {
  	Promise.all(locations.map(fetchWeather))
  	.then((weatherData) => {
  	  setWeather(weatherData);
  	  // optionally set first card as active by default
  	  if (weatherData.length > 0) {
  	    setActiveCard(weatherData[1]);
  	  }
  	})
  	.catch(console.error);
  }, [])

// test

  return (
    <>
      <div className="rounded-xl bg-orange-600 grid grid-cols-3 sm:grid-cols-3 gap-4">
		{weather.map((data)=>(
			<WeatherCard
			// Lists must have unique key
			key={data.location}
			// Pass the data props down to children
			data={data}
			// Pass the boolean active state of the card
			active={activeCard?.location === data.location}
			// Update whether card is active
			onClick={() => setActiveCard(data)}
			/>
		))}
	  </div>

      <div className="rounded-xl mt-4 mb-4 bg-gray-700 h-64 text-white text-6xl border border-gray-600 flex items-center justify-center" style={switzer}>
      	  
      <img className="w-24 h-24" src={activeCard ? "https://openweathermap.org/img/wn/" + activeCard.icon + ".png" : ""} />
      <h1>
        {activeCard 
          ? `${activeCard.location} - ${activeCard.skyForecast} ${activeCard.temperature}°F` 
          : "Click a card to see weather"}
        </h1>
        </div>
      <h6 className="text-gray-300 text-xl">Tailwind - React - Typescript</h6>
    </>
  )
}

export default App
