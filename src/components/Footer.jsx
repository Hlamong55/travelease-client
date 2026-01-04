import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-10 py-12 flex flex-col gap-10 md:flex-row md:gap-28">

        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://i.ibb.co.com/QjkHXLkH/istockphoto-931069196-612x612.jpg"
              className="rounded-full w-22 h-22"
              alt="TravelEase logo"
            />
            <div>
              <h2 className="text-3xl font-bold">TravelEase</h2>
            </div>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            Simplifying your travel experience — rent,  <br />ride and relax with TravelEase.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-secondary pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link to="/" className="hover:text-secondary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-secondary transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/allVehicles" className="hover:text-secondary transition">
                All Vehicles
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-secondary pb-2 inline-block">
            Contact Info
          </h3>

          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-secondary" />
              <span>bijoymarma55@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-secondary" />
              <span>+880 1818-470577</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-secondary" />
              <span>Chattogram, Bangladesh</span>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-secondary pb-2 inline-block">
            Connect With Us
          </h3>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary transition"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-purple-900 text-gray-50 text-center py-3 text-sm font-medium">
        © {new Date().getFullYear()} TravelEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
