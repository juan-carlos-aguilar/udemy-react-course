import React from 'react';
import './App.css';
import HomePage from './components/Homepage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import { fruitsReducer } from './reducer/fruitsReducer';
import { Provider } from 'react-redux';

const store = createStore(fruitsReducer, ['apple', 'avocado']);

function App() {
  return (
    // for BrowserRouter normal path
    // for HashRouter path => '/#/_path_'
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
