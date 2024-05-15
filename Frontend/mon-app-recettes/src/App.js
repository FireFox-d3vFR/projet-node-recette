import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Recettes from './components/Recettes';
import Recette from './components/Recette';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recettes' element={<Recettes />}/>
        <Route path='/recettes/:id' element={<Recette />} />
      </Routes>
    </Router>
  );
}

export default App;