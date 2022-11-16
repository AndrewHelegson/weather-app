
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import useLocalStorage from './components/Services/uselocalstorage';
import getFormattedWeatherData, { cities } from './components/Services/weatherServices';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TImeAndLocation from './components/TImeAndLocation';
import TopButtons from './components/TopButtons';

function App() {
  const [query, setQuery] = useState({q: 'berlin'});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [citiesData, setCitiesData] = useLocalStorage("cities", []);
  
  useEffect(() => {
    const fetchWeather = async () => {
      // setCitiesData(cities)
      const message = query.q ? query.q : "current location.";

       toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
        console.log(data)
        let unique = [...new Set([...citiesData, data.name])];
        setCitiesData(unique)
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-400 to-blue-800";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-400 to-blue-800";

    return "from-yellow-700 to-orange-200";
  };

  return (
    <div
      className={` mx-auto max-w-screen-2xl  py-5 sm:px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons citiesData={citiesData} setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TImeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
          <div className='flex mt-4 justify-center'><a href="https://github.com/AndrewHelegson/weather-app">
            <p className='font-bold'>Source code on Github</p>
          </a></div>
        </div>
      )}
      <ToastContainer className={'hidden sm:block'} autoClose={1500} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
