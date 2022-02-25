import React from 'react';
import './App.css';
import StudentGrade from './components/StudentGrade';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <StudentGrade />
      </div>
    );
  }
}

export default App;
