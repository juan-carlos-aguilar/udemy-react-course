import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer/rootReducer';
import { anotherMiddleware } from './store/middleware/anotherMiddleware';
import { customMiddleware } from './store/middleware/customMiddleware';

const store = createStore(rootReducer, (window as any).initialState, applyMiddleware(customMiddleware, anotherMiddleware));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/test">
          <Switch>
            <Route component={AboutPage} path="/about" />
            <Route component={HomePage} path="/" />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
