import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import {
  MdOutlineLogin,
  MdDashboard,
  MdAddBox,
  MdDirectionsCar,
  MdBookOnline,
} from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  /* PUBLIC ROUTES */
  const publicLinks = [
    { name: "Home", to: "/" },
    { name: "All Vehicles", to: "/allVehicles" },
    { name: "About", to: "/about" },
  ];

  /* PRIVATE ROUTES (DROPDOWN) */
  const privateLinks = [
    { name: "Dashboard", to: "/dashboard", icon: <MdDashboard /> },
    { name: "Add Vehicle", to: "/addVehicle", icon: <MdAddBox /> },
    { name: "My Vehicles", to: "/myVehicles", icon: <MdDirectionsCar /> },
    { name: "My Bookings", to: "/myBookings", icon: <MdBookOnline /> },
  ];

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Logged out successfully ✅"))
      .catch(() => toast.error("Logout failed"));
  };

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/QjkHXLkH/istockphoto-931069196-612x612.jpg"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-2xl font-bold">TravelEase</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            {publicLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-semibold"
                    : "hover:text-secondary transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

    
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="bg-secondary text-black px-3 py-1 rounded-md flex items-center gap-1"
                >
                  Login <MdOutlineLogin />
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-black px-3 py-1 rounded-md flex items-center gap-1"
                >
                  Register <PiUserCirclePlusBold />
                </Link>
              </>
            ) : (
              /* ADVANCED PROFILE DROPDOWN */
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 hover:bg-secondary/30 transition"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="w-11 h-11 rounded-full border-2 border-secondary"
                    />
                  ) : (
                    <FaUserCircle size={36} />
                  )}
                  <HiChevronDown
                    size={20}
                    className={`transition ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-60 bg-white text-black rounded-xl shadow-xl overflow-hidden">
                    {/* USER INFO */}
                    <div className="px-4 py-3 border-b bg-purple-200">
                      <p className="font-semibold">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-700 truncate">
                        {user.email}
                      </p>
                    </div>

                    {/* PRIVATE LINKS */}
                    {privateLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-purple-400 transition text-sm font-semibold"
                      >
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                      </Link>
                    ))}

                    {/* LOGOUT */}
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-100 transition text-sm"
                    >
                      <LuLogOut />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary px-4 pb-4 space-y-2">
          {publicLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2"
            >
              {link.name}
            </NavLink>
          ))}

          {user &&
            privateLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2"
              >
                {item.name}
              </NavLink>
            ))}

          {!user ? (
            <>
              <Link to="/login" className="block py-2">Login</Link>
              <Link to="/register" className="block py-2">Register</Link>
            </>
          ) : (
            <button
              onClick={handleSignOut}
              className="w-full bg-red-600 py-2 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
