import { useState } from 'react';

function SearchForm({ setWeather }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      alert('Please enter a city');
      return;
    }
    console.log('Fetching weather for:', city);
    console.log('API Key:', import.meta.env.VITE_WEATHER_API_KEY);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('API Response:', data);
        if (data.cod === 200) {
          setWeather(data);
          setCity('');
        } else {
          alert('City not found');
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        alert('Error fetching weather');
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full max-w-md"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border border-gray-300 rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;