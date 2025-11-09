import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
          <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left md:flex md:items-center md:justify-between gap-5">
        
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight">
            TravelEase-<span className="text-secondary">Vehicle Booking</span> &amp; Trip Management Platform
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Explore, rent, and manage vehicles with ease. Your travel companion for a smooth journey.
          </p>
          <div className="space-x-5">
            <Link
              to="/allVehicles"
              className="bg-secondary text-text px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition hover:text-white"
            >
              All Vehicles
            </Link>
            <Link
              to="/addVehicle"
              className="bg-secondary text-text px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition hover:text-white"
            >
              List Your Vehicle
            </Link>
          </div>
        </div>

        
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://i.ibb.co.com/1Yjr5MmN/Blue-and-White-Simple-Car-Rental-Business-Instagram-Post-png.webp"
            alt="TravelEase Banner"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    );
};

export default Banner;