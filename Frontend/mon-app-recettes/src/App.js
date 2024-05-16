import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListeRecettes from './components/ListeRecettes';
import Recette from './components/Recette';
import Home from './components/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recettes' element={<ListeRecettes />}/>
        <Route path='/recettes/:id' element={<Recette />} />
        <Route path='/header' element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
