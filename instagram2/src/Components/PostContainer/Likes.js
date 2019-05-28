import React from 'react';


class Likes extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            likes: props.userLikes
        }
    }

    increaseLikes = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    }

    render(){
        return (
            <div className="like">
                <i className="far fa-heart" onClick={this.increaseLikes} />
                <i className="far fa-comment fa-lg"></i>
                <div className="sectionLikes">{this.state.likes} likes</div>
            </div>
        )
    }
}

export default Likes;