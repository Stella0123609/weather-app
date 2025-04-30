import { useState } from 'react';
import { auth } from '../firebase';

function FavoritesForm({ addFavorite }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert('Please log in to add favorites');
      return;
    }

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city, userId: user.uid })
    };

    fetch(`${process.env.VITE_API_URL}/favorites`, configObj)
      .then((res) => res.json())
      .then((data) => {
        addFavorite(data);
        setCity('');
      })
      .catch(() => alert('Error adding favorite'));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full max-w-md">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Add favorite city"
        className="border border-gray-300 rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
}

export default FavoritesForm;