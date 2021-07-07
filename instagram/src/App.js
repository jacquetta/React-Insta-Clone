import React from 'react';
import Page from './components/PostContainer/Page';
import Login from './components/Login/Login';
import Authentication from './components/Authentication/Authentication';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  
  render() {
    return (
      <div className="App">
        <ComponentFromAuthentication />
      </div>
    );
  }
}

const ComponentFromAuthentication = Authentication(Page)(Login);

export default App;
