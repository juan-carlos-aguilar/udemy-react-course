import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterManagement from './components/CounterManagement';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <h1>My App</h1>
        <CounterManagement />
      </div>
    );
  }
}

export default App;
