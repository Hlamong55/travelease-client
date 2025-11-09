import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* 1️⃣ Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">TravelEase</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Simplifying your travel experience — rent, ride and relax with ease.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-secondary pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link to="/" className="hover:text-secondary transition">Home</Link>
            </li>
            <li>
              <Link to="/allVehicles" className="hover:text-secondary transition">All Vehicles</Link>
            </li>
            <li>
              <Link to="/addVehicle" className="hover:text-secondary transition">Add Vehicle</Link>
            </li>
            <li>
              <Link to="/myBookings" className="hover:text-secondary transition">My Bookings</Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-secondary pb-2 inline-block">
            Connect With Us
          </h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-secondary transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-secondary transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-secondary text-black text-center py-3 text-sm font-medium">
        © {new Date().getFullYear()} TravelEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
