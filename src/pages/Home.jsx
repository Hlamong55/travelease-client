import React from 'react';
import Banner from '../components/Banner';
import StaticSections from '../components/StaticSection';
import LatestVehicles from '../components/LatestVehicle';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestVehicles></LatestVehicles>
            <StaticSections></StaticSections>
        </div>
    );
};

export default Home;