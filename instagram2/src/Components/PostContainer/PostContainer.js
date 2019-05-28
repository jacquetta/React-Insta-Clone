import React from 'react';
import PropTypes from 'prop-types';

import './postcontainer.css';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';

const PostContainer = props => {

    return (
        <div>
            {props.profile.map((user, index) => (
                <div className="w3-card-4" key={index}>
                    <header className="w3-container">
                        <p><img className="url-thumbnail" src={user.thumbnailUrl} alt={user.profile}/> 
                         <span></span> {user.username}</p>
                    </header>
                    <img className="imageUrl" src={user.imageUrl} alt={user.imageUrl} />
                    <Likes userLikes={user.likes}/>
                    <p>{user.timestamp}</p>
                    <CommentSection userComments={user.comments} />
                </div>
            
            ))}
        </div>
    )
}

PostContainer.propTypes = {
    user: PropTypes.shape({
        thumbnailUrl: PropTypes.symbol.isRequired,
        username: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        userComments: PropTypes.arrayOf(PropTypes.object)
    })
}
export default PostContainer;