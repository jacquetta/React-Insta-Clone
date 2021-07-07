import React from 'react';
import Posts from './Posts';
import './postContainer.css';

const PostContainer = props =>{
    return (
        <div>
            {props.postings.map(post => <Posts key={post.imageUrl} posting={post} />)}
        </div>
    );
};

export default PostContainer;