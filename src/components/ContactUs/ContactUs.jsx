import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
    return (
        <div className='contact-us-container'>
            {/* map location section */}
            <div className='contact-us-map-container'>
                <img src="/images/maps.svg" alt="map" />
            </div>
                
            {/* form section */}
            <div className='contact-us-form-container'>
                <h1>Contact Us</h1>
                <p>If you have any questions please feel free to contact with us.</p>
                <div className='form-container'>
                    <div className='contact-us-input-container'>
                    <div className='input-container'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" placeholder='Phone' />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="phone">Subject</label>
                        <input type="text" placeholder='Subject' />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="message">Message</label>
                        <textarea placeholder='Message'></textarea>
                    </div>
                    </div>
                    <button className='contact-us-button'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs