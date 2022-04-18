import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId} =useParams();
    return (
        <div>
            <h3>Check out package</h3>
           <h5>this is service detail page {serviceId}</h5>
        </div>
    );
};

export default CheckOut;