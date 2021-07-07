import React from 'react';

import './App.css';
import Page from './Components/PostContainer/Page';
import Authenticate from './Components/Authentication/Authenticate';

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <div className="App">
        <Page />
      </div>
    )
  }
}


export default Authenticate(App);
