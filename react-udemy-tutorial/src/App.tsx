import React from 'react';
import './App.css';
import HomePage from './components/Homepage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { fruitsReducer } from './store/reducer/fruitsReducer';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer/rootReducer';

const store = createStore(rootReducer, { users: ['Rysh', 'May'], fruits: ['apple', 'avocado'] }, applyMiddleware(customMiddleware, anotherMiddleware));

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
function customMiddleware(customMiddleware: any): import("redux").StoreEnhancer<unknown, {}> | undefined {
  throw new Error('Function not implemented.');
}

function anotherMiddleware(customMiddleware: (customMiddleware: any) => import("redux").StoreEnhancer<unknown, {}> | undefined, anotherMiddleware: any): import("redux").StoreEnhancer<unknown, {}> | undefined {
  throw new Error('Function not implemented.');
}

