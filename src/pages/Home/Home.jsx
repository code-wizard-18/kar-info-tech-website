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
    <div className='home-section-2'>
        <h1 className='home-section-2-heading'>Our Expertise</h1>
        <p className='home-section-2-p'>We have extensive experience across various industries including healthcare, finance, education, retail, and more. Our solutions are customized to meet the specific needs of each sector.</p>
    </div>
    <div className='home-section-2'>
        <h1 className='home-section-2-heading'>Technology Stack</h1>
        <p className='home-section-2-p'>We leverage the latest technologies and frameworks to ensure that our solutions are scalable, secure, and efficient. Our expertise includes but is not limited to React, Node.js, and MongoDB.</p>
    </div>
    <div className='home-section-3'>
        <div className='icons-set-1'>
            <ul className='icons-set-1-ul'>
                <li className='icons-set-1-li'><img src="/images/icons/react.svg" alt="Home" /></li>
                <li className='icons-set-1-li'><img src="/images/icons/flutter.svg" alt="Home" /></li>
                <li className='icons-set-1-li'><img src="/images/icons/wordpress.svg" alt="Home" /></li>
                <li className='icons-set-1-li'><img src="/images/icons/mysql.svg" alt="Home" /></li>
                <li className='icons-set-1-li'><img src="/images/icons/aws.svg" alt="Home" /></li>
            </ul>
            <ul className='icons-set-1-ul'>
                <li className='icons-set-1-li'><img src="/images/icons/unreal.svg" alt="Home" /></li>
                <li className='icons-set-1-li'><img src="/images/icons/photoshop.svg" alt="Home" /></li>
                <li className='icons-set-1-li'><img src="/images/icons/blender.svg" alt="Home" /></li>
            </ul>
        </div>
        <div className='icons-set-2'>

        </div>
    </div>
</div>
 );
};
export default Home;