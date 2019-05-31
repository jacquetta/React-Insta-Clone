import React from 'react';

const AddComment = props => {
    return(
        <form onSubmit={props.submit}>
            <input
                className="addComment"
                value={props.comment}
                type="text"
                placeholder="Add a comment..."
                onChange={props.change}
                />
        </form>
    );
};

export default AddComment;