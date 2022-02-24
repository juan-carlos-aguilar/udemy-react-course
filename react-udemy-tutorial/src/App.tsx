import React, {ErrorInfo} from 'react';
import './App.css';
import MyPurecomponent from './components/MyPureComponent';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>My App</h1>
      <MyPurecomponent />
    </React.Fragment>
  );
}

export default App;
