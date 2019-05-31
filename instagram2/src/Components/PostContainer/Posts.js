import React from  'react';
import PropTypes from 'prop-types';

import Likes from './Likes';
import Heading from './Heading';
import CommentSection from '../CommentSection/CommentSection';
import './postcontainer.css';

class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.posting.likes
        };
    }

    increaseLikes = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    };

    render(){
        return  (
            <div className="postContainer">
                <Heading username={this.props.posting.username} thumbnailUrl={this.props.posting.thumbnailUrl} />
                <div>
                    <img alt="profile" className="profileImage" src={this.props.posting.imageUrl} />
                </div>

                <Likes increaseLikes={this.increaseLikes} likes={this.state.likes} />
                <CommentSection postingId={this.props.posting.imageUrl} comments={this.props.posting.comments} />
            </div>
        );
    }
}

Posts.propTypes = {
    posting: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default Posts;