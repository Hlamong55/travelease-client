import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      Swal.fire({
        title: "✅ Welcome Back!",
        text: `Logged in as ${res.user.displayName || res.user.email}`,
        icon: "success",
        background: "#1e1e2f",
        color: "#fff",
        confirmButtonColor: "#6A11CB",
        confirmButtonText: "Start Exploring ✨",
      }).then((result) => {
        if (result.isConfirmed) {
          const from = location.state?.from || "/";
          navigate(from, { replace: true });
        }
      });
    } catch (err) {
      setError(err.message);
      Swal.fire({
        title: "❌ Login Failed!",
        text: err.code,
        icon: "error",
        background: "#2f1e2f",
        color: "#fff",
        confirmButtonColor: "#6A11CB",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      Swal.fire({
        title: "✅ Logged In!",
        text: `Welcome, ${res.user.displayName || "Traveler"}!`,
        icon: "success",
        background: "#1e1e2f",
        color: "#fff",
        confirmButtonColor: "#6A11CB",
        confirmButtonText: "Continue",
      }).then((result) => {
        if (result.isConfirmed) {
          const from = location.state?.from || "/";
          navigate(from, { replace: true });
        }
      });
    } catch (err) {
      Swal.fire({
        title: "❌ Google Login Failed!",
        text: err.message,
        icon: "error",
        background: "#1e1e2f",
        color: "#fff",
        confirmButtonColor: "#6A11CB",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 w-full flex items-center justify-center p-6"
      >
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-md w-full">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-700 mb-8 text-lg">
            Login to your{" "}
            <span className="font-bold text-purple-700">TravelEase</span>{" "}
            account
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <button
              type="button"
              className="font-bold text-gray-800 hover:text-purple-700 hover:underline cursor-pointer transition-all duration-300"
            >
              Forgot Password?
            </button>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full mt-3 bg-linear-to-r from-purple-800 to-indigo-700 text-white font-bold shadow-lg hover:opacity-90 hover:scale-105 transition duration-300 px-6 py-3 rounded-lg"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-700 text-white border border-gray-300 font-medium py-3 rounded-lg shadow-sm duration-300 hover:scale-105 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Login with Google</span>
            </button>
          </div>

          <p className="mt-6 text-center text-gray-800">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-purple-700 hover:text-purple-900 font-semibold underline"
            >
              Create Now
            </Link>
          </p>


          <button
          type="button"
          onClick={() =>
            setFormData({
              email: "bruce@lee.com",
              password: "12345aA!",
            })
          }
          className="w-full mt-5 bg-gray-300 hover:bg-gray-600 hover:text-white font-semibold py-1.5 rounded-lg hover:scale-105 transition"
        >
          🚀 Use Demo Account <br />
          (Click Here to Prefilled)
        </button>
        </div>

      </motion.div>

      {/* Right image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 w-full hidden md:flex items-center justify-center pr-20"
      >
        <img
          src="https://i.ibb.co.com/bRmKqn94/road-gps-navigation-city-map-car-street-highway-roadmap-infographics-stock-vector-156915584.webp"
          alt="Login img"
          className="rounded-2xl shadow-lg w-full max-w-min"
        />
      </motion.div>
    </div>
  );
};

export default Login;
