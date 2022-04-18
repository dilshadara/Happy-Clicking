import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specialty from './Speciality/Specialty';

const Home = () => {
    return (
        <>
          <Banner></Banner>
          <Services></Services>
          <Specialty></Specialty>
        </>
    );
};

export default Home;