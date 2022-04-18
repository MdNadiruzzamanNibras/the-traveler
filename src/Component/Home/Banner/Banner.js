import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import himalaya from '../../../images/banner/himalaya.jpg'
import maldives from '../../../images/banner/Maldives.jpg'
import Kalahari from '../../../images/banner/Kalahari.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img style={{maxHeight:'700px'}}
                    className="d-block w-100"
                    src={himalaya}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>WelCome The Traveler</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                style={{maxHeight:'700px'}}
                    className="d-block w-100"
                    src={maldives}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>WelCome The Traveler</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{maxHeight:'700px'}}
                    className="d-block w-100"
                    src={Kalahari}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>WelCome The Traveler</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;