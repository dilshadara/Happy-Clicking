import React from 'react';
import './Footer.css';

const Footer = () => {

    const date= new Date();
    let year = date.getFullYear();

    return (
        <div className='footer w-100'>
            <div>
                <h2>What are you waiting for?</h2>
                <p>Book your slot now to cherish your memories forever</p>
            </div>
            <div>
                <p>&copy; Dilshad Ara {year}</p>
            </div>
            
        </div>
    );
};

export default Footer;