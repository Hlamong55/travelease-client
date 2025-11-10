import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;

    //  Password authentication
    if (!/[A-Z]/.test(password)) {
      return setError("Password must include at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must include at least one lowercase letter.");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    }

    try {
      const result = await createUser(email, password);
      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      });

      toast.success("Registration Successful 🎉");
      navigate("/"); 
    } catch (err) {
      console.error(err);
      toast.error(err.message);
      setError("Failed to register. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Logged in with Google ✅");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Google login failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 flex items-center justify-center p-6"
      >
        <img
          src="https://i.ibb.co.com/jFrM57T/login-img-CQuw-DW2q.png" 
          alt="Register img"
          className="rounded-2xl shadow-lg w-full max-w-min"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 flex items-center justify-center p-6"
      >
        <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md p-10 rounded-3xl max-w-md w-full shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
            //   value={formData.name}
            //   onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
            //   value={formData.email}
            //   onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Photo URL
            </label>
            <input
              name="photoURL"
              type="text"
            //   value={formData.photoURL}
            //   onChange={handleChange}
              placeholder="Enter your Photo URL"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium text-gray-800 dark:text-gray-200 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
            //   value={formData.password}
            //   onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          
          <button
            type="submit"
            className="w-full mt-5 bg-linear-to-r from-slate-900 via-indigo-900 to-purple-900 text-white font-bold shadow-lg hover:from-purple-900 hover:via-indigo-700 hover:to-slate-800 transition-all duration-300 px-6 py-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-800 text-white border border-gray-300 font-medium py-3 rounded-lg shadow-sm transition-all duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>
        </div>

        
        <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-red-600 hover:text-red-700 font-semibold underline">
            Log in here
          </Link>
        </p>
      </div>
      </motion.div>
    </div>
  );
};

export default Register;
