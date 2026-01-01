import { FaUserPlus, FaCar, FaCalendarCheck, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
            How TravelEase Works
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            TravelEase simplifies vehicle booking and vehicle management by
            connecting customers and vehicle owners through a secure,
            role-based platform.
          </p>
        </motion.div>

        {/* Main Workflow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

          {/* Step 1 */}
          <div className="border border-purple-300 rounded-xl p-6 hover:shadow-lg transition">
            <FaUserPlus className="text-purple-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-purple-700 mb-2">
              1. User Authentication
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Users register or log in securely using Firebase Authentication.
              Only authenticated users can book vehicles or manage listings.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border border-pink-300 rounded-xl p-6 hover:shadow-lg transition">
            <FaCar className="text-pink-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-pink-600 mb-2">
              2. Explore or Add Vehicles
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Customers browse available vehicles, while owners can add, update,
              and manage their own vehicle listings.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border border-purple-300 rounded-xl p-6 hover:shadow-lg transition">
            <FaCalendarCheck className="text-purple-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-purple-700 mb-2">
              3. Booking & Requests
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Logged-in users can request bookings. Booking data is securely
              stored and visible in user-specific dashboards.
            </p>
          </div>

          {/* Step 4 */}
          <div className="border border-pink-300 rounded-xl p-6 hover:shadow-lg transition">
            <FaTools className="text-pink-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-pink-600 mb-2">
              4. Manage Everything
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Owners manage availability and updates, while users track bookings
              — all from protected private routes.
            </p>
          </div>
        </div>

        {/* Role Based Explanation */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="border border-purple-300 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">
              How Customers Use TravelEase
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>• Create an account and log in securely</li>
              <li>• Browse vehicles by category and location</li>
              <li>• View vehicle details before booking</li>
              <li>• Request bookings and track status</li>
            </ul>
          </div>

          <div className="border border-pink-300 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              How Vehicle Owners Use TravelEase
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>• List vehicles with images and details</li>
              <li>• Update or delete their own vehicles</li>
              <li>• Manage availability and booking requests</li>
              <li>• Access owner-only protected routes</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/vehicles"
            className="px-7 py-3 rounded-lg font-semibold
              bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            View Available Vehicles
          </Link>

          <Link
            to="/login"
            className="px-7 py-3 rounded-lg font-semibold
              border border-pink-400 text-pink-600 hover:bg-pink-50 transition"
          >
            Login to Get Started
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
