import React, {ErrorInfo} from 'react';
import './App.css';
import ErrorComponent from './components/ErrorComponent';
import FirstComponent from './components/FirstComponent';

interface AppProps {}

interface AppState {
  hasError: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
        hasError: false
    }
  }

  static getDerivedStateFromError(error: Error) {
    console.log('getDerivedStateFromError:', error);

    return {
        hasError: true
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('componentDidCatch:', error);
    console.log('componentDidCatch:', info);
  }

  render() {
    return (
      <>
        <h1>My App</h1>
        {this.state.hasError ? <ErrorComponent/> : <FirstComponent />}
      </>
    );
  }
}

export default App;
