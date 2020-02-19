import React from 'react';
import './header.css';

const Header = () => {
  
  return (
    <div id="header">
      <div id="user">
        <img className="circle-crop" src="./userPhoto.png" alt="user"/>
        <p id="accountHeader">My Account</p>
      </div>
    </div>
  )
}

export default Header;
