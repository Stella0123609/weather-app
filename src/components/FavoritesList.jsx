function FavoritesList({ favorites }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.length === 0 ? (
          <p className="text-gray-500">No favorites yet.</p>
        ) : (
          favorites.map((fav) => (
            <div key={fav.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">{fav.city}</h3>
            </div>
          ))
        )}
      </div>
    );
  }
  
  export default FavoritesList;