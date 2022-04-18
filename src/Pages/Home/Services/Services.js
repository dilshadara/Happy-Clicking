import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] =useState([]);

    useEffect(  () => {
        fetch('services.json')
        .then(res=> res.json())
        .then(data=>setServices(data));
    },[]);

    return (
        <div id="services">
            <h2>This is services</h2>
        </div>
    );
};

export default Services;