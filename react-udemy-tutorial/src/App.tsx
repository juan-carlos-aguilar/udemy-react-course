import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import RoutingPractice from './components/Routing';


function App() {
  return (
    // for BrowserRouter normal path
    // for HashRouter path => '/#/_path_'
      <div>
        <RoutingPractice />
      </div>
  );
}


export default App;
