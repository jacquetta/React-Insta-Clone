import React from 'react';


function CommentSection(props){
   return(
    <>
    <p>{props.comment.username}</p>
    <p>{props.comment.text}</p>
</>
     );
}


export default CommentSection;