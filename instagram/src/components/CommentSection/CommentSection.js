import React from 'react';
import './commentSection.css';
import Comment from "./Comment";
import AddComment from './AddComment';


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
         };
    }

    componentDidMount(){
        const id = this.props.postingId;
        if(localStorage.getItem(id)){
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postingId))
            });
        } else {
            this.settingComments();
        }
    }

    componentWillUnmount(){
        this.settingComments();
    }

    settingComments = () => {
        localStorage.setItem(
            this.props.postingId,
            JSON.stringify(this.state.comments)
        );
    };

    commentHandler = event => {
        this.setState({comment: event.target.value});
    };

    handleSubmit =  event => {
        event.preventDefault();
        const addComment = {text: this.state.comment, username: 'Pink Power Ranger'};
        const comments = this.state.comments.slice();
        comments.push(addComment);
        this.setState({comments, comment: '' });
        setTimeout(() => {
            this.settingComments();
        }, 500);
    };

    render(){
        return (
            <div>
                {this.state.comments.map((add, index) => <Comment key={index} comment={add} />)}
                <AddComment comment={this.state.comment}  submit={this.handleSubmit} change={this.commentHandler} />
            </div>
  
        );
    }
}



export default CommentSection;