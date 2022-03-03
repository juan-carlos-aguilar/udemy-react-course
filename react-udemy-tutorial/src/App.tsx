import React from 'react';
import './App.css';
import HomePage from './components/Homepage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/about/:username" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;
