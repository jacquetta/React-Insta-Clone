import React from 'react';

import './commentsection.css';

const CommentSection = props => {
    return(
        <div className="w3-container">
            {props.userComments.map(userComment => (
                <div>
                    <p className="user"><span>{userComment.username}</span> {userComment.text}</p>
                    <p>{userComment.timestamp}</p>
                </div>
            ))}
            <hr />
            <input type="text" placeholder="Add a comment..." className="w3-border-0" />
        </div>
    )
}
export default CommentSection;