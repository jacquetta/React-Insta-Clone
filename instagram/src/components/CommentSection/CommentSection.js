import React from 'react';
import './commentSection.css';
import Comment from "./Comment";


class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
         };
    }

    componentDidMount(){
       
    }
    render(){
        return (
            <div>
                {this.state.comments.map((add, index) => <Comment key={index} comment={add} />)}
            </div>
  
        )
    }
}



export default CommentSection;