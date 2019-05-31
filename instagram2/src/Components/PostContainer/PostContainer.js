import React from 'react';

import Posts from './Posts';
import './postcontainer.css';


const PostContainer = props => {

    return (
        <div>
           {props.postings.map(post => 
               <Posts key={post.imagerUrl} posting={post} />)}
        </div>
    );
};


export default PostContainer;