import React from 'react';
import './App.css';
import HomePage from './components/Homepage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // for BrowserRouter normal path
    // for HashRouter path => '/#/_path_'
      <HashRouter>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
  );
}


export default App;
