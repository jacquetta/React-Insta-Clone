import React from 'react';
import PropTypes from 'prop-types';
import './commentSection.css';

const Comment = props => {
    return (
      <div>
          <p> <span className='userName'>{props.comment.username}</span>   <span className='comment'>{props.comment.text}</span> </p>
      </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;

