import React from 'react';
import './Home.css';
const Home = () => {
 return (
<div>
    <div className='home-setion-1'>
    <div className='home-container'>
        <img src="/images/image1.svg" alt="Home" />
    </div>
    <div className='home-container-2'>
        <h1 className='home-heading'>Crafting Digital solutions , One line of code at a time</h1>
        <p className='home-p'>Empowering tommorow’s Innovation today</p>
        <div className='home-buttons'>
            <button className='home-button-1'>Get Qoute</button>
            <button className='home-button-2'>Contact Us</button>
        </div>
    </div>

    </div>
</div>
 );
};
export default Home;