import React, {ErrorInfo} from 'react';
import './App.css';
import { FormElements } from './components/FormElements';
import HomePage from './components/HomePage';
import { MyContext, MyContextProvider } from './context/MyContext';

function App() {
  return (
    <div className='App'>
      <HomePage />
    </div>
  );
}


export default App;
