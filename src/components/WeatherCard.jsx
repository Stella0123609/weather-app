function WeatherCard({ weather, addFavorite }) {
    if (!weather) return null;
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-xl font-semibold">{weather.name}</h3>
        <p className="text-3xl">{weather.main.temp}°C</p>
        <p className="capitalize">{weather.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="weather icon"
          className="w-16 h-16 mx-auto"
        />
        <button
          onClick={() => addFavorite({ city: weather.name })}
          className="mt-4 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition"
        >
          Add to Favorites
        </button>
      </div>
    );
  }
  
  export default WeatherCard;