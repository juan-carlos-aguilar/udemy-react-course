import React, {ErrorInfo} from 'react';
import './App.css';
import { FormElements } from './components/FormElements';
import HomePage from './components/Homepage';
import { MyContext, MyContextProvider } from './context/MyContext';



function App() {
  return (
    <div className='App'>
      <FormElements />
    </div>
  );
}


export default App;
