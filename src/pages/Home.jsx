import React from 'react';
import Banner from '../components/Banner';
import StaticSections from '../components/StaticSection';
import LatestVehicles from '../components/LatestVehicle';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestVehicles></LatestVehicles>
            <StaticSections></StaticSections>
            <div className='border-t-2 border-gray-400'></div>
            <Testimonials></Testimonials>
            <div className='border-t-2 border-gray-300'></div>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;