import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Checkout from './containers/CheckoutPage';
import AllProducts from './containers/AllProductsPage';
import { ROUTE } from './constants/route';
import { HeaderNavigation } from './components/HeaderNavigation/';
import { rootReducer } from './store/rootReducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import ProductDetailsAction from './store/actions/productDetailsAction';
import startRootSaga from './store/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(startRootSaga);

store.dispatch({ type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS });

(window as any).shopspree = store;

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
