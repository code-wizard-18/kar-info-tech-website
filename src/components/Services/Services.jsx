
import React from 'react'
import './services.css'
import data from './data'
const Services = () => {
    return (
        <div>
            <div className='services-container'>
                <div className='services-heading'>
                    <h1>Services</h1>
                    <p>We are here to help you. We have a team of experts who are always ready to help you. We have a team of experts who are always ready to help you.</p>
                </div>
            </div>
           <div className='services-card-container '>
           {
                data.map((item, index) => {
                    return (
                        <div className={`services-card ${index % 2 === 0 ? 'zag' : 'zig'}`}>
                            <img src={`images/services/image${item.id}.svg`} alt={item.title} />
                            <div className='services-card-heading'>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
           </div>
        </div>
    )
}

export default Services