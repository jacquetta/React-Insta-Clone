import React from 'react';
import './commentSection.css';

function CommentSection(props){
   return(
    <>
           <p>{props.comment.username} {props.comment.text}</p>
</>
     );
}


export default CommentSection;