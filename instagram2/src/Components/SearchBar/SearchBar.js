import React from 'react';

import './searchbar.css';


const SearchBar = () => {
    return(
        <div className="w3-bar">
            <div>
                <i className="fab fa-instagram fa-lg w3-bar-item update">  &#124;</i>
                <h2 className="w3-bar-item">Instagram</h2>
            </div>

            <input type="text" placeholder="Search" className="w3-bar-item w3-input search update"/>
            <a href="#gps" className="w3-bar-item w3-button w3-right update"><i className="far fa-compass fa-lg"></i></a>
            <a href="#like" className="w3-bar-item w3-button w3-right update"><i className="far fa-heart fa-lg"></i></a>
            <a href="#user" className="w3-bar-item w3-button w3-right update"><i className="far fa-user fa-lg"></i></a>
        </div>
    )
}

export default SearchBar;