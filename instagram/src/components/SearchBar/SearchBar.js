import React from 'react';
import './searchBar.css';

const SearchBar = (props) => (
  <div className='containerSearch'>
    <div className='left'>
        <i className='fab fa-instagram fa-3x'></i>       
        <span className='searchSpan'></span>
        <h1>Instagram</h1>
    </div>

    <div className='center'>
        <input type='text' placeholder='Search' onKeyDown={props.searchingPost} />
    </div>
    
    <div className='right'>
        <i className='far  fa-compass fa-2x'></i>
        <i className='far fa-heart fa-2x'></i>
        <i className='far fa-user fa-2x'></i>
    </div>

  </div>
);



export default SearchBar;