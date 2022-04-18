import React, { useEffect, useState } from 'react';

const Service = () => {

    const [services, setServices] =useState([]);

    useEffect(  () => {
        fetch('services.json')
        .then(res=> res.json())
        .then(data=>console.log(data));
    },[]);

    return (
        <div>
            
        </div>
    );
};

export default Service;