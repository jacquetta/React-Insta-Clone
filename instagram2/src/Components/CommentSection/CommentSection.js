import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import AddComment from './AddComment';
import './commentsection.css';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    addNewComment = event => {
        this.setState({ comment: event.target.value})
    }

    formHandler = event => {
        event.preventDefault();
        const addComment = {text: this.state.comment, username: 'pinkranger'};
        const comments = this.state.comments.slice();
        comments.push(addComment);
        this.setState({
            comments, comment: ''
        })
    };


    render(){
        return (
            <div className="w3-container">
                {this.state.comments.map((add,index) => 
                    <Comment key={index} comment={add} />)} 
                    <AddComment comment={this.state.comment} submit={this.formHandler} changeAdd={this.addNewComment} />   
                             
            </div>
        )
    }
}


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
}

export default CommentSection;