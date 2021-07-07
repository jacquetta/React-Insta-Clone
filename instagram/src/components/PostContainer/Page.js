import React, {Component} from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';


class Page extends Component{
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
        //eslint-disable-next-line
        const postings = this.state.postings.filter(post => {
            if(post.username.includes(event.target.value)){
                return post;
            }
        });
        this.setState({ filtered: postings });
    };

    render(){
        return (
            <div className='App'>
                <SearchBar
                    searchingItem={this.state.searchingItem}
                    searchingPost={this.searchHandler}
                />

                <PostContainer postings={
                    this.state.filtered.length > 0 ? this.state.filtered : this.state.postings} />
            </div>
        );
    }
    
}

export default Page;