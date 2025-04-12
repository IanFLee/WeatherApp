import './App.css'

function App() {

  return (
    <>
      <div className="bg-orange-500 grid grid-cols-3 sm:grid-cols-3 gap-4">
		{/* Flexible rectangle cards */}
		<div className="rounded-xl text-gray-300 m-4 h-48 bg-gray-900"></div>
	    <div className="rounded-xl text-gray-300 m-4 h-48 bg-gray-900">
	    <div className="pl-4 text-left">Reykj</div>
	    </div>
	    <div className="rounded-xl text-gray-300 m-4 h-48 bg-gray-900"></div>
	  </div>
      <h1 className="bg-gray-700 h-64 text-white text-3xl border border-gray-600 flex items-center justify-center">PARTLY CLOUDY - 42 FAHR. - REYKJAVÍK</h1>
      <h6 className="bg-white h-16 text-xl border">Tailwind - React - Typescript</h6>
      <div className="bg-white text-left pl-2"><p>BtnUp</p></div>
      <div className="bg-white text-left pl-2"><p>Portfolio - o</p></div>
    </>
  )
}

export default App
