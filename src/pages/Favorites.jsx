import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import FavoritesForm from '../components/FavoritesForm';
import FavoritesList from '../components/FavoritesList';

function Favorites({ favorites, setFavorites }) {
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    fetch(`${process.env.VITE_API_URL}/favorites?userId=${user.uid}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      .catch(() => alert('Error fetching favorites'));
  }, [user, navigate, setFavorites]);

  const addFavorite = (newFavorite) => {
    setFavorites([...favorites, newFavorite]);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Favorite Cities</h2>
      <FavoritesForm addFavorite={addFavorite} />
      <FavoritesList favorites={favorites} />
    </div>
  );
}

export default Favorites;