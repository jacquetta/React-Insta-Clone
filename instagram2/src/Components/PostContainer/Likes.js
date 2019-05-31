import React from 'react';


const Likes = props => {
    return (
        <div className="like">
            <i className="far fa-heart" onClick={props.increaseLikes} />
            <i className="far fa-comment fa-lg"></i>
            <div className="sectionLikes">{props.likes} likes</div>
        </div>
    )
}

export default Likes;