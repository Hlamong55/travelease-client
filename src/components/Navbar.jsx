import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext";
import { LuLogOut } from "react-icons/lu";
import toast from "react-hot-toast";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { MdOutlineLogin } from "react-icons/md";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "All Vehicles", to: "/allVehicles" },
    { name: "Add Vehicle", to: "/addVehicle" },
    { name: "My Vehicles", to: "/myVehicles" },
    { name: "My Bookings", to: "/myBookings" },
  ];

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Logged out successfully! ✅"))
      .catch((error) => console.error("Sign-out error:", error));
  };

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between h-16 items-center">
    
          <div className="shrink-0 flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/QjkHXLkH/istockphoto-931069196-612x612.jpg"
              className="rounded-full h-11 w-11"
              alt="logo"
            />
            <Link
              to="/"
              className="text-2xl font-bold hover:text-secondary transition-colors"
            >
              TravelEase
            </Link>
          </div>

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

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="ml-5 bg-secondary text-black px-3 py-1 rounded-md font-medium hover:bg-purple-600 transition hover:text-white"
                >
                  <span className="flex items-center gap-1">
                    Login <MdOutlineLogin size={25} />
                  </span>
                </Link>
                <Link
                  to="/register"
                  className="bg-gray-100 text-black px-3 py-1 rounded-md font-medium hover:bg-gray-500 hover:text-white transition"
                >
                  <span className="flex items-center gap-1">
                    Register <PiUserCirclePlusBold size={25} />
                  </span>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3 ml-5">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-11 h-11 rounded-full border-2 border-secondary shadow-lg transform transition hover:scale-115 hover:shadow-2xl"
                    title={user.displayName || "User"}
                  />
                )}
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 hover:bg-red-800 px-3 py-1 rounded-md text-white font-medium shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
                >
                  <span className="flex items-center gap-1.5">
                    Log Out <LuLogOut size={18} />
                  </span>
                </button>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center gap-3">
            {user && user.photoURL && (
              <div className="flex items-center gap-1">
                
                <img
                  src={user.photoURL}
                  alt="User"
                  title={user.displayName || "User"}
                  className="w-9 h-9 rounded-full border-2 border-secondary"
                />
              </div>
            )}
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

      {/* Humburger icon */}
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

          {!user ? (
            <>
              <Link
                to="/login"
                className="block py-2 mt-1 bg-secondary text-black rounded-md text-center font-medium hover:bg-purple-600 transition hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block py-2 bg-white text-black rounded-md text-center font-medium hover:bg-secondary-light transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center justify-center gap-1.5">
                  Register <PiUserCirclePlusBold size={25} />
                </span>
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleSignOut();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-white font-medium transition flex items-center justify-center gap-2"
            >
              <LuLogOut size={20} />
              Log Out
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
