import React from 'react';
import './Nominies.css'

const Nominies = () => {
    return (
        <div className='nominies-container'>
            <div className="writer-container">
                <h3>writers list</h3>
            </div>
            <div className="cart-container">
                <h3>Selected top writers</h3>
                <h5>player added</h5>
                <h5>writers total salary: $</h5>
            </div>
        </div>
    );
};

export default Nominies;