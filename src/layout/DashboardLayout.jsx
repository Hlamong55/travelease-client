import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FaTachometerAlt,
  FaUser,
  FaCar,
  FaPlusCircle,
  FaClipboardList,
  FaBars,
} from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

const DashboardLayout = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOutUser();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-base-100">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-white/20">
          TravelEase
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavItem to="/dashboard" icon={<FaTachometerAlt />} label="Overview" />
          <NavItem to="/dashboard/profile" icon={<FaUser />} label="Profile" />
          <NavItem
            to="/dashboard/add-vehicle"
            icon={<FaPlusCircle />}
            label="Add Vehicle"
          />
          <NavItem
            to="/dashboard/my-vehicles"
            icon={<FaCar />}
            label="My Vehicles"
          />
          <NavItem
            to="/dashboard/my-bookings"
            icon={<FaClipboardList />}
            label="My Bookings"
          />
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-18 bg-base-200 border-b flex items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-xl"
            >
              <FaBars />
            </button>
            <h1 className=" text-xl font-bold flex gap-2 ">Welcome,<span className="hidden sm:block ">
                {user?.displayName || "User"}
              </span></h1>
          </div>

          {/* Profile Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={user?.photoURL}
                alt="user"
                className="w-11 h-11 rounded-full border"
              />
              
            </div>

            <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <NavLink
                to="/"
                className="block px-4 py-2 hover:bg-base-200"
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard/profile"
                className="block px-4 py-2 hover:bg-base-200"
              >
                Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-base-200"
              >
                <LuLogOut /> Logout
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;


const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
        isActive
          ? "bg-secondary text-black font-bold"
          : "hover:bg-white/10"
      }`
    }
  >
    {icon}
    {label}
  </NavLink>
);
