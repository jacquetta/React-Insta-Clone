import React from 'react';

const Likes = props => {
    return [
        <div className ='like' key='likeKey' onClick={props.increaseLikes}>
            <i className='far fa-heart' />
            <i className='far fa-comment' />
            <div className='sectionLikes'>{props.likes}</div>
        </div>
    ];
};

export default Likes;