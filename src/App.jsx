import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <NavBar user={null} />
        <Routes>
          <Route path="/" element={<Home addFavorite={() => {}} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;