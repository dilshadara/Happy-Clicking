import React from 'react';

const Service = ({service}) => {
    const {name,price} = service;
    
    return (
        <div>
            <h5>{name}</h5>
            <p>Package: ${price}</p>
        </div>
    );
};

export default Service;