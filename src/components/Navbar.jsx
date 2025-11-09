// src/components/Shared/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi"; // ✅ React Icons

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Navigation Links (no bullet, clean structure)
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "All Vehicles", to: "/allVehicles" },
    { name: "Add Vehicle", to: "/addVehicle" },
    { name: "My Vehicles", to: "/myVehicles" },
    { name: "My Bookings", to: "/myBookings" },
  ];

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* ✅ Logo */}
          <div className="shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold hover:text-secondary transition-colors"
            >
              TravelEase
            </Link>
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-secondary ${
                    isActive ? "text-secondary font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/login"
              className="ml-4 bg-secondary text-black px-4 py-1 rounded-md font-medium hover:bg-secondary-light transition"
            >
              Login
            </Link>
          </div>

          {/* ✅ Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-secondary-light transition"
            >
              {mobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary text-white px-4 pb-3 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 rounded-md transition hover:bg-secondary hover:text-black ${
                  isActive ? "bg-secondary text-black font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="block py-2 mt-1 bg-secondary text-black rounded-md text-center font-medium hover:bg-secondary-light transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
