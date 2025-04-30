import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import WeatherCard from '../components/WeatherCard';

function Home({ addFavorite }) {
  const [weather, setWeather] = useState(null);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Check the Weather</h2>
      <SearchForm setWeather={setWeather} />
      <WeatherCard weather={weather} addFavorite={addFavorite} />
    </div>
  );
}

export default Home;