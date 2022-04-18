import {Button} from 'react-bootstrap';
import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,price,img, description} = service;

    const navigate= useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
     
    return (
        <div className='service'>
            <h5>{name}</h5>
            <img src={img} alt=""></img>
            <p>Package: ${price}</p>
            <p><small>{description}</small></p>
            <Button className='bg-color'onClick={() => navigateToServiceDetail(id)}>Book Now</Button>
        </div>
    );
};

export default Service;