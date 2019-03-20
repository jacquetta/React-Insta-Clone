import React from 'react';

const AddComment = (props) => {
    return (
     <form>
            <input
                className="addComment"
                name="comment"
                type="text"
                placeholder="Add a comment..."
            />
     </form>
    );
}

export default AddComment;