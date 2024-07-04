import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
const Header = () => {
 return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-bar-home-container">
  <a class="navbar-brand" href="#">
  <img src='/images/logo.svg' width={25} height={25} />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto nav-bar-home-elements">
      <li class="nav-item active">Home</li>
      <li class="nav-item ">Services</li>
      <li class="nav-item ">Products</li>
      <li class="nav-item ">About Us</li>
      <li class="nav-item ">Careers</li>
      <li class="nav-item contact-us-button ">
        <div className='contact-us-button'>
        <p className='contact-us-button-text'>Get Qoute</p>
        </div>
    </li>
      <li class="nav-item ">Contact Us</li>
    </ul>
  </div>
</nav>
 );
};
export default Header;