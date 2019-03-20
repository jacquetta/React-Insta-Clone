import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      postings: ''
    };
  }
  
  componentDidMount(){
    this.setState({postings: dummyData});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer postings= {this.state.postings} />
      </div>
    );
  }
}

export default App;
