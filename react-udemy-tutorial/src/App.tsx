import React from 'react';
import './App.css';
import HomePage from './components/Homepage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import { SpecialLink } from './components/SpecialLink';

function App() {
  return (
    // for BrowserRouter normal path
    // for HashRouter path => '/#/_path_'
      <BrowserRouter>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/profile">Profile</Link>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          
        </Routes>
      </BrowserRouter>
  );
}


export default App;
