import React from 'react';
import { FaListUl } from 'react-icons/fa';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';
import { Link } from 'react-router';

const Banner = () => {
    return (
          <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left md:flex md:items-center md:justify-between gap-5">
        
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            <span className="text-secondary md:ml-32">TravelEase</span> <br /> Vehicle Booking &amp; Trip Management Platform
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Explore, rent, and manage vehicles with ease. Your travel <br /> companion for a smooth journey.
          </p>
          <div className="flex gap-5 justify-center md:justify-normal">
            <Link
              to="/allVehicles"
              className="bg-secondary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
            >
              <span className='flex items-center gap-2'>All Vehicles<LuSquareArrowOutUpRight size={25}/></span>
            </Link>
            <Link
              to="/addVehicle"
              className="bg-secondary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
            >
              <span className='flex items-center gap-2'>List Your Vehicle <FaListUl size={20}/></span>
            </Link>
          </div>
        </div>

        
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://i.ibb.co.com/6JfzcfmV/Blue-and-White-Simple-Car-Rental-Business-Instagram-Post-png.jpg"
            alt="TravelEase Banner"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    );
};

export default Banner;