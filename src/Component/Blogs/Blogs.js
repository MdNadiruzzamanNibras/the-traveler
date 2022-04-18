import React from 'react';

const Blogs = () => {
    return (
        <div className='w-50 mx-auto my-5'>
            <div className="my-3">
            <h1> Difference between authorization and authentication</h1>
            <p>
            Authorization is which files,application has aceess the user and Authentication is the process of verification the user. Authorization is provided the organization which the user used and Authentication is  to ensure  that the user identification by himself. Authentication is first step access website or other things and Authorization is to be done later.Authentication provided data user can be change but authorization data can't change. 
            </p>
            </div>
            <div>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>First think google database security is very well. It real time dynamic data aceess time less then other alternative. This is hacks not more easy it's really tou</p>
            </div>
        </div>
    );
};

export default Blogs;