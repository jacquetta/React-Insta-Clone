import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      postings: [],
      filtered: []
    };
  }

  componentDidMount(){
    this.setState({postings: dummyData});
  }

  searchHandler = event => {
    const posts = this.state.postings.filter(post => {
      if (post.username.includes(event.target.value)) { 
        return post;
      }
    });
    this.setState({filtered: posts});
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar 
          searchingItem={this.state.searchingItem}
          searchingPost={this.searchHandler}
        />
        <PostContainer postings= {
          this.state.filtered.length > 0 ? this.state.filtered : this.state.postings} />
      </div>
    );
  }
}

export default App;
