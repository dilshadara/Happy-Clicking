import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId} =useParams();
    return (
        <div>
            <h1>from Check out</h1>
           <h2>this is service detail page {serviceId}</h2>
        </div>
    );
};

export default CheckOut;