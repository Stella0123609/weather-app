import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

function FavoritesForm({ addFavorite }) {
  const [city, setCity] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please log in to add favorites');
      return;
    }

    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city, userId: user.uid })
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/favorites`, configObj);
      if (!res.ok) throw new Error('Failed to add favorite');
      const data = await res.json();
      addFavorite(data);
      setCity('');
      alert('City added to favorites!');
    } catch (err) {
      console.error('Error adding favorite:', err);
      alert('Error adding favorite');
    }
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