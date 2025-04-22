import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import homepage from './pages/index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' Component={homepage}/>

      </Routes>
    </Router>
  )
}

export default App;
