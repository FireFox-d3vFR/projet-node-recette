import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Recettes from './components/Recettes';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recettes' element={<Recettes />}/>
      </Routes>
    </Router>
  );
}

export default App;