import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Checkout from './containers/CheckoutPage';
import AllProducts from './containers/AllProductsPage';
import { ROUTE } from './constants/route';
import { HeaderNavigation } from './components/HeaderNavigation/';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <HeaderNavigation />
        <Routes>
          <Route element={<HomePage />} path={ROUTE.HOME} />
          <Route element={<Checkout />} path={ROUTE.CHECKOUT} />
          <Route element={<AllProducts />} path={ROUTE.ALL_PRODUCTS} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
