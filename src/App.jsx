import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Bar from "./Components/Search"
import Post from './Components/Post';
import recettes from './assets/data/recettes.json';
import Footer from './Components/Footer';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleShowFavorites = () => {
    setShowFavoritesOnly(!showFavoritesOnly);
  };

  const handleReset = () => {
    setSearchValue('');
    setShowFavoritesOnly(false);
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto px-1 py-8'>
      <h1 className='my-4 text-6xl text-red-600'>Let's Cook</h1>
      <Bar onSearch={handleSearch} showFavorites={handleShowFavorites} onReset={handleReset} />
      <h1 className="text-3xl font-bold underline mb-4">Toutes les recettes</h1>
      <Post recettes={recettes} searchValue={searchValue} showFavoritesOnly={showFavoritesOnly} />
     
      </div>
      <Footer/>
    </>
  );
}

export default App;
