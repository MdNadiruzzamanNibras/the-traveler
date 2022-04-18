import React from 'react';
import useService from '../../../../Hooks/useService';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services] = useService()
  
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='services-container'>
                        {
                            services.map(service=> <Service 
                                service={service}
                                key={service.id}
                            ></Service>)
                        }
                        
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Services;