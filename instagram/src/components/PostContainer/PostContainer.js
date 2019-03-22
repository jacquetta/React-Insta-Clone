import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './postContainer.css';
import Likes from './Likes';


class PostContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: props.postings.likes
        };
    }

    increaseLikes = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    };

    render(){
    return ( 
        <div>
        {this.props.postings.map(posting => (
          <div className="container">
              <div className='user'>
                <img src={posting.thumbnailUrl} alt="profile pic" className='profilePic' />
                <p className='userName'>{posting.username}</p>
              </div>
              <img src={posting.imageUrl} alt='insta-pic' className='picture' />
            <div className='comment'>
                <Likes increaseLikes={this.increaseLikes}  likes={this.state.likes} />
                <CommentSection  comments ={posting.comments} />
                <p>{posting.timestamp}</p>
                <hr></hr>
            </div>
          </div>
        ))}
      </div>
    );
    }
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