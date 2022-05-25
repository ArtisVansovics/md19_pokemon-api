import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import Page404 from './Pages/404/Page404';
import HomePage from './Pages/Home/HomePage';
import PokemonPage from './Pages/Pokemon/PokemonPage';

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/pokemon"
        element={<HomePage />}
      />
      <Route
        path="/pokemon/:name"
        element={<PokemonPage />}
      />
      <Route
        path="/pokemon/:id"
        element={<PokemonPage />}
      />
      <Route
        path="404"
        element={<Page404 />}
      />
      <Route
        path="*"
        element={<Navigate to="/404" />}
      />
    </Routes>
  </Router>
);

export default App;
