import React from 'react';
import './commentSection.css';

function CommentSection(props){
   return(
    <>
    <p>{props.comment.username}</p>
    <p>{props.comment.text}</p>
</>
     );
}


export default CommentSection;