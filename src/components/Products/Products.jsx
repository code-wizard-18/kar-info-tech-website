
import React from 'react'
import './products.css'
import data from './data'
const products = () => {
    return (
        <div>
            <div className='products-container'>
                <div className='products-heading'>
                    <h1>Our products</h1>
                    <p>Discover our range of innovative products designed to streamline your operations, enhance productivity, and drive business growth.</p>
                </div>
            </div>
           <div className='products-card-container '>
           {
                data.map((item, index) => {
                    return (
                        <div className={`products-card ${index % 2 === 0 ? 'zag' : 'zig'}`}>
                            <img src={`images/products/image${item.id}.svg`} alt={item.title} />
                            <div className='products-card-heading'>
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

export default products