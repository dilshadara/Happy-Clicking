import React from 'react';
import './Speciality.css';

const Specialty = () => {
    return (
        <div id="speciality" className='container'>
            <h1 style={{marginTop:'30px'}}>My Speciality</h1>
            <div className='services-container special w-100' style={{marginBottom:'130px'}}>
                <div className='d-flex  justify-content-evenly mb-150px'>
                    <ul className='ul1'>
                        <li>Easy booking process</li>
                        <li>Competitive package prices</li>
                        <li>Very minimum initial booking</li>
                    </ul>
                </div>
                <div>
                    <ul className='ul2'>
                        <li>Edited soft copies of all photos</li>
                        <li>Free cloud backup for your precious memories</li>
                    </ul>
                </div>
                
            </div>
            
        </div>
    );
};

export default Specialty;