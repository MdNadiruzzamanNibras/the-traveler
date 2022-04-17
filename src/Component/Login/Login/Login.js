import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/Form.css'



const Login = () => {const emailRef = useRef('')
const passwordRef=useRef('')
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
const handleSubmit= event=>{
    event.preventDefault()
    const email = emailRef.current.value 
    const password = passwordRef.current.value 
    signInWithEmailAndPassword(email, password)
}
const registerNavigate= event=>{
    navigate('/register')
}
const handleResetPasword = async()=>{
  const email = emailRef.current.value 
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
            <input ref={emailRef} type="email" name="email" id="" placeholder='Your Email' required />
            <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required/>
            <input 
             className='btn btn-primary d-block w-50 mx-auto' type="submit" value="Login" />
             <ToastContainer/>
            </form>
            p
            <p>New to Genius Car? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={registerNavigate}>Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={handleResetPasword}>Reset Password</button> </p>
        </div>
    );
};

export default Login;