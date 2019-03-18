import React from 'react';
import './searchBar.css';

const SearchBar = (props) => (
  <div className='containerSearch'>
    <div className='left'>
        <i className='fab fa-instagram fa-3x'></i>       
        <span></span>
        <h1>Instagram</h1>
    </div>

    <div className='center'>
        <input type='text' placeholder='Search' />
    </div>
    
    <div className='right'>
        <i className='far  fa-compass fa-3x'></i>
        <i className='far fa-heart fa-3x'></i>
        <i className='far fa-user fa-3x'></i>
    </div>

  </div>
);



export default SearchBar;