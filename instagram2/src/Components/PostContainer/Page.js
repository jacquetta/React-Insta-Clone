import React from 'react';
import dummyData  from '../../dummy-data';

import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class Page extends React.Component {
    constructor(){
        super();
        this.state = {
            postings: [],
            filtered: [] 
        };
    }

    componentDidMount(){
        this.setState({
            postings: dummyData
        });
    }

    searchHander = e => {
        //eslint-disable-next-line
        const postings =  this.state.postings.filter(posting => {
            if(posting.username.includes(e.target.value)){
                return posting;
            }
        });
        this.setState({
            filtered: postings
        });
    };

    render(){
        return (
            <div className="App">
                <SearchBar searching={this.state.searching} searchPost={this.state.searchHandler} />
                <PostContainer postings={this.state.filtered.length > 0 ? this.state.filtered : this.state.postings} />
            </div>
        );
    }
}

export default Page;