import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import himalaya from '../../../images/banner/himalaya.jpg'
import maldives from '../../../images/banner/Maldives.jpg'
import coxBazar from '../../../images/banner/cox-bazar.jpg'

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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{maxHeight:'700px'}}
                    className="d-block w-100"
                    src={coxBazar}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;