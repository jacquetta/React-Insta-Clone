import React from 'react';
import PropTypes from 'prop-types';
import dummydata from './dummy-data';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: dummydata
    }
  }
  render(){
    return(
      <div className="App">
        <SearchBar />
        <PostContainer profile={this.state.data} />
      </div>
    )
  }
}


App.propTypes = {
  profile: PropTypes.arrayOf(PropTypes.object)
};

export default App;
