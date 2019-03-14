import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      postContainer: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <PostContainer postContainer = {this.state.postContainer} />
        <CommentSection comment/>
      </div>
    );
  }
}

export default App;
