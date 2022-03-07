import React from 'react';
import './App.css';
import HomePage from './components/Homepage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { fruitsReducer } from './store/reducer/fruitsReducer';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer/rootReducer';

const anotherMiddleware: Middleware = store => next => action => {
  console.log('Current Action: ', action);
  next(action);
}

const customMiddleware: Middleware = store => next => action => {
  if(typeof action === 'function') {
    next(action(store));
  } else {
    next(action);
  } 
}

const store = createStore(rootReducer, { users: ['Rysh', 'May'], fruits: ['apple', 'avocado'] }, applyMiddleware(customMiddleware));

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
