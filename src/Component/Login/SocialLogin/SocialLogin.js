import React from 'react';
import Google from '../../../images/social icon/google.png'
import Facebook from '../../../images/social icon/facebook.png'
import Github from '../../../images/social icon/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading1, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    let errorElement;
    if (error||githubError||fbError) {
       errorElement=(
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

      if(user ||githubUser ||fbUser){
          navigate('/home')
      }
    return (
        <div>
             <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p className='text-danger'>{errorElement}</p>
            <div className='d-flex justify-content-center'>
            <button className='btn btn-link' onClick={()=>signInWithGoogle()} >
                <img  src={Google} alt="" />
                </button>
            <button
            className='btn btn-link'
            onClick={()=>signInWithFacebook()}>
                <img style={{ height:'35px', }} src={Facebook} alt="" />
                </button>
            <button 
            className='btn btn-link'
            onClick={()=>signInWithGithub()}
            >
                <img  src={Github} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;