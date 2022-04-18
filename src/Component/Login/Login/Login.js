import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/Form.css'
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';



const Login = () => {
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || "/";
const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);
if (user) {
  navigate(from, { replace: true });
}
if(loading){
  return <Loading></Loading>
}
let errorElement;
if (error) {
 
    errorElement = <div className='text-danger'>Error: {error?.message}</div>
 
}
const handleSubmit= event=>{
    event.preventDefault()
    const email= event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password)
}
const registerNavigate= ()=>{
    navigate('/register')
}
const handleResetPasword = async(event)=>{
  const email =event.target.email.value;
  if(email)
   {await sendPasswordResetEmail(email);
  toast('Sent email');}
  else{
    toast('Please enter your email')
  }
}
    return (
        <div className='form-container'>
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="" placeholder='Your Email' required />

            <input type="password" name="password" id="" placeholder='Password' required/>
            <input 
             className='btn btn-primary d-block w-50 mx-auto' type="submit" value="Login" />
            {errorElement}
             <ToastContainer/>
            </form>
            <SocialLogin></SocialLogin>
            <p>New to The Traveler? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={registerNavigate}>Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={handleResetPasword}>Reset Password</button> </p>
        </div>
    );
};

export default Login;