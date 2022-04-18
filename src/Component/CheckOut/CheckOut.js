import React from 'react';
import './CheckOut.css'
const CheckOut = () => {
    return (
        <div className='checkout-container'>
            <form >
            <input type="text" name="name" id="" placeholder='Your Name' required/>
            <input type="email" name="email" id="" placeholder='Your Name' required/>
            <input type="text" name="address" id="" placeholder='Your Address' required/>
            <input type="number" name="phone" id="" placeholder='Your Phone number' required/>


            </form>
        </div>
    );
};

export default CheckOut;