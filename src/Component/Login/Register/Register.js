import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false)
        const navigate= useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    
      if(user){
        navigate('/home')
      }
      let errorElement;
if (error) {
 
    errorElement = <div className='text-danger'>Error: {error?.message}</div>
 
}
if(loading){
    return <Loading></Loading>
  }
    const handleSubmit = async (event)=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email= event.target.email.value;
        const password = event.target.password.value;
       
      await createUserWithEmailAndPassword(email, password)
     
     
      navigate('/home')
    }
    return (
        <div className='form-container'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='Your Name' />
            <input type="email" name="email" id="" placeholder='Your Email' required />
            <input type="password" name="password" id="" placeholder='Password' required/>
            
            <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
           
            <label className={`ps-2 ${agree ? 'text-primary': 'text-danger'}`} htmlFor="terms">The Traveler Terms and Condition</label>
            <button disabled={!agree}
             className='form-btn' type="submit" >Registar</button>
            </form>
            {errorElement}
            <p>You are New The Traveler ? <Link to='/login' className='text-primary pe-auto text-decoration-none' >Please Login</Link></p>
           
        </div>
    );
};

export default Register;