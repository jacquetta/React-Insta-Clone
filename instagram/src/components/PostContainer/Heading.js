import React from 'react';
import './postContainer.css';

const Heading = props => {
    return (
    <div className = 'heading'>
        <div>
            <img alt='header' className='imgHeader' src={props.thumbnailUrl} />
        </div>
        <div>
            {props.username}
        </div>
    </div>
    );
};

export default Heading;