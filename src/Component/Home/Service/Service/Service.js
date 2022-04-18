import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'

const Service = ({service}) => {
  const {img, name, description, price} =service
  const navigate = useNavigate()
  const handleNavigate =()=>{
    navigate('/checkout')
  }
   
    return (
      <div className='service'>
      <img style={{maxWidth:'400px', maxHeight:'400px'}} src={img} alt="" />
      <h2>{name}</h2>
      <h6>Price: ${price}</h6>
      <p><small title={description}>{description.length >200 ? description.slice(0, 200): {description}}</small></p>
      <button  onClick={handleNavigate}>book</button>
  </div>
      
    );
};

export default Service;