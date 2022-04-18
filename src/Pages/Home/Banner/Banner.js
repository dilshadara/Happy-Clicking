import React from 'react';
import bannerImg from '../../../images/Banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div id="home" >
            <div className='banner w-100'>
            <div>
               <p> Hi, I am <span style={{color:'goldenrod', fontWeight:700}}>Dilshad Ara</span>,</p>
               <p>I am visual story teller. If you want your special moments to be vivid after years, there is no alternative of me. I have a long experience to cover all sort of photography events....like Wedding, birthday, new born photo shoot, graduation ceremony, couple photo shoot, real estate..these are some examples of my vast work arena. I also have a professional degree of advance photoshop and night photography.</p>
               <p>I usually provide all the props for new born, soon mother to be, so that you dont need to take extra hassle or juggling during this time. </p>
               <p>Moreover, I am offering very competitive packages and very flexible on schedule and timing.</p>
               <p>The reason behind my success is to always prioritize the client, Happy Client, Happy Me. Waiting also to work for you :)</p>
            </div>
            <div className='banner-img'>
                <img src={bannerImg} alt=""></img>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;