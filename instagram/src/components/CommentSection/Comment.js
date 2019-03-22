import React from 'react';
import './commentSection.css';

const Comment = props => {
    return (
      <div>
          <p> <span className='userName'>{props.comment.username}</span> 
              <span className='comment'>{props.comment.text}</span> </p>
      </div>
    );
};

export default Comment;