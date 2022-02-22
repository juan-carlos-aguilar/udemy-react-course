import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterManagement from './components/CounterManagement';

function App() {
  return (
    <>
      <h1>My App</h1>
      <CounterManagement ownerName="Carlos" />
    </>
  );
}

export default App;
