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
      data: [],
      filtered: []
    }
  }

  componentDidMount(){
    this.setState({
      data: dummydata
    })
  }

  searchHander = event => {
    //eslint-disable-next-line
    const postings = this.state.data.filter(post => {
      if(post.username.includes(event.target.value)){
        return post;
      }
    });
    this.setState({filtered: postings});
  };

  render(){
    return(
      <div className="App">
        <SearchBar searching={this.state.searching} searchPost={this.searchHander} />
        <PostContainer profile={this.state.filtered.length > 0 ? this.state.filtered : this.state.data} />
      </div>
    )
  }
}


App.propTypes = {
  profile: PropTypes.arrayOf(PropTypes.object)
};

export default App;
