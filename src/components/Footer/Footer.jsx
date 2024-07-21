import React from 'react';
import './Footer.css';
import { TfiTwitter } from "react-icons/tfi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";



function Footer() {
    return (
        <div className='footer'>
            <div className='sub-footer'>
                <div className='footer1'>
                    <img src='https://www.karinternationalinfotech.com/img/logo1.png' className='logo' alt='' />
                    <p>
                        KAR International Infotech is a leading provider of innovative solutions in the realm of technology services and products.
                    </p>
                    <h6>Follow Us</h6>
                    <div className='icon'>
                        <TfiTwitter />
                        <RiFacebookCircleLine />
                        <RxLinkedinLogo />
                        <FaInstagram />
                    </div>
                </div>
                <div>
                    <h6>Services</h6>
                    <ul>
                        <p>Web development</p>
                        <p>App development</p>
                        <p>Cloud Services</p>
                        <p>Digital Marketing</p>
                    </ul>
                </div>
                <div>
                    <h6>Information</h6>
                    <ul>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Products</p>
                        <p>Career</p>
                        <p>Get Quote</p>
                    </ul>
                </div>
                <div className='contactus'>
                    <h6>
                        Contact Us
                    </h6>
                    <div>
                        <ul>
                            <p>           
                                <FaLocationDot />  6th St, Rajiv Nagar,
                                Kovilpatti, Tamil Nadu 628501, India
                            </p>
                            <p>
                                <FaPhoneAlt />  +91 9789 77 5806
                            </p>
                            <p>
                            <IoMdMail />  karinternationalinfotech@gmail.com
                            </p>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <center> <FaRegCopyright /> Copyright 2024 | All Rights Reserved By KAR International Infotech</center>
            </div>
        </div>
    )
}

export default Footer