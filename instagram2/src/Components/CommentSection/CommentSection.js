import React from 'react';
import PropTypes from 'prop-types';
import './commentsection.css';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.userComments,
            comment: ''
        }
    }

    addNewComment = event => {
        this.setState({ comment: event.target.value})
    }

    formHandler = event => {
        event.preventDefault();
        let addComment = {text: this.state.comment, username: 'pinkeranger'};
        const comments = this.state.comments.slice();
        comments.push(addComment);
        this.setState({
            comments, comment: ''
        })
    }


    render(){
        return (
            <div className="w3-container">
                {this.state.comments.map((comment, index) => (
                    <div key={index}>
                        <p className="user"><span>{comment.username}</span> {comment.text}</p>
                    </div>
                ))}
                <hr />
                <form onSubmit={this.formHandler}>
                    <input
                    type="text"
                    value={this.state.comment}
                    onChange={this.addNewComment}
                    placeholder="Add a comment..."
                    className="w3-border-0" />
                </form>
            </div>
        )
    }
}


CommentSection.propTypes = {
    userComment: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}
export default CommentSection;