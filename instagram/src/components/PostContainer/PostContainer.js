import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './postContainer.css'

function PostContainer(props){
    console.log(props)
    return (
      <>
        {props.postContainer.map(postContainer => (
          <div className="container card">
              <div className='user'>
                <img src={postContainer.thumbnailUrl} alt="profile pic" className='profilePic' />
                <p className='userName'>{postContainer.username}</p>
              </div>
              <img src={postContainer.imageUrl} alt='insta-pic' className='picture' />
            <div className='comment'>
                <p className='likesPic'>{postContainer.likes} likes</p>
                <div>
                    {postContainer.comments.map(comment => (
                        <CommentSection comment={comment} />
                    ))}
                </div>
                <p>{postContainer.timestamp}</p>
              
            </div>
          </div>
        ))}
      </>
    );
}

PostContainer.propTypes = {
    postContainer: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.string,
            timestamp: PropTypes.string,
        })
    ),

    comment: PropTypes.arrayOf(
        PropTypes.shape({
            username:PropTypes.string,
            text: PropTypes.string
        })
    )
}


export default PostContainer;