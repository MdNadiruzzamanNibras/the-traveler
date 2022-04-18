import React from 'react';
import './NotFound.css'
import notFound from '../../images/NotFound/404-error-page-not-found.jpg'
const NotFound = () => {
    return (
        <div >
            <img className='NotFound' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;