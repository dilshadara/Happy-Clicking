import {Button} from 'react-bootstrap';
import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name,price} = service;
    
    return (
        <div className='service'>
            <h5>{name}</h5>
            <p>Package: ${price}</p>
            <Button className='bg-color'>Book Now</Button>
        </div>
    );
};

export default Service;