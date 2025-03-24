import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import HomeScreen from './HomeScreen';
import MovieDetails from './MovieDetails';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;
