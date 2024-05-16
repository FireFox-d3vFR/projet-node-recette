import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ListeRecettes from './components/ListeRecettes';
import Recette from './components/Recette';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recettes' element={<ListeRecettes />}/>
        <Route path='/recettes/:id' element={<Recette />} />
      </Routes>
    </Router>
  );
}

export default App;
