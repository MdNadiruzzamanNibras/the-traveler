import React from 'react';
import './CheckOut.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
const CheckOut = () => {
    const [user, loading, error] = useAuthState(auth)
    if(loading){
        return<Loading></Loading>
    }
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
             <button className='checkout-btn' onClick={hanleCheckOut} type='submit'>Check Out</button>
             <ToastContainer/>
            </form>
        </div>
    );
};

export default CheckOut;