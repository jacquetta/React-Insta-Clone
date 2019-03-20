import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './postContainer.css';
import AddComment from '../CommentSection/addComment';


function PostContainer(props){
    return (
      <>
        {props.postings.map(posting => (
          <div className="container">
              <div className='user'>
                <img src={posting.thumbnailUrl} alt="profile pic" className='profilePic' />
                <p className='userName'>{posting.username}</p>
              </div>
              <img src={posting.imageUrl} alt='insta-pic' className='picture' />
            <div className='comment'>
                <p className='likesPic'>{posting.likes} likes</p>
                <div>
                   <CommentSection comments ={posting.comments} />
                </div>
                <p>{posting.timestamp}</p>
                <hr></hr>

              <AddComment />
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