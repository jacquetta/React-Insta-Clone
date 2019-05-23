import React from 'react';


const CommentSection = props => {
    return(
        <div>
            {props.userComments.map(userComment => (
                <p>{userComment.username}</p>
                <p>{userComment.</p>
            ))}
        </div>
    )
}
export default CommentSection;