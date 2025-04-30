import React from 'react';

function NavBar({ user }) {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Weather Track</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="/" className="hover:text-blue-200 transition">Home</a>
          </li>
          <li>
            <a href="/favorites" className="hover:text-blue-200 transition">Favorites</a>
          </li>
          <li>
            <a href="/login" className="hover:text-blue-200 transition">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;