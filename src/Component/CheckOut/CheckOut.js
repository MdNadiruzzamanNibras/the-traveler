import React from 'react';
import './CheckOut.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckOut = () => {
    const hanleCheckOut=()=>{
        toast('Thank you for the booking.');
    }
    return (
        <div className='checkout-container'>
            <form >
            <input type="text" name="name" id="" placeholder='Your Name' required/>
            <input type="email" name="email" id="" placeholder='Your Name' required/>
            <input type="text" name="address" id="" placeholder='Your Address' required/>
            <input type="number" name="phone" id="" placeholder='Your Phone number' required/>
             <button onClick={hanleCheckOut} type='submit'>Check Out</button>
             <ToastContainer/>
            </form>
        </div>
    );
};

export default CheckOut;