import React from 'react';

import './postcontainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            {props.profile.map(user => (
                <div className="w3-card-4">
                    <header className="w3-container">
                        <p><img className="url-thumbnail" src={user.thumbnailUrl} alt={user.profile}/> 
                         <span></span> {user.username}</p>
                    </header>
                    <img className="imageUrl" src={user.imageUrl} alt={user.imageUrl} />
                    <i class="far fa-heart fa-lg"></i>
                    <i class="far fa-comment fa-lg"></i>
                    <p>{user.likes} likes</p>
                    <CommentSection userComments={user.comments}/>
                </div>
            
            ))}
        </div>
    )
}
export default PostContainer;