import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-linear-to-b from-blue-300 to-blue-100 flex flex-col items-center justify-center px-4">
      
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full shadow-lg"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />

      <motion.div
        className="absolute top-20 left-0 w-64 h-20 bg-white rounded-full opacity-80"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />
      <motion.div
        className="absolute top-32 right-0 w-48 h-16 bg-white rounded-full opacity-70"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      />


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-8xl font-extrabold text-gray-800 mb-4">404 - Not Found!</h1>
        <p className="text-xl font-semibold md:text-2xl text-gray-700 mb-6">
          Oops! Your ride took a wrong turn 🚧
        </p>
        <Link
          to="/"
          className="inline-block bg-secondary hover:bg-primary text-white font-bold px-8 py-3 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
        >
          Go Back Home
        </Link>
      </motion.div>

      
      <div className="absolute bottom-0 w-full h-32 bg-gray-700">
        <div className="absolute top-1/2 w-full h-2 bg-white/70 border-dashed border-t-2 border-white/80"></div>
      </div>
      <motion.img
        src="https://i.ibb.co.com/6cbJhryM/Chat-GPT-Image-Nov-13-2025-02-22-25-AM.png"
        alt="Driving Car"
        className="h-48 absolute bottom-20"
        animate={{ x: ["-150%", "120%"], y: [0, -8, 0], rotate: [0, 0, 0, 0] }}
        transition={{
          x: { repeat: Infinity, duration: 6, ease: "linear" },
          y: { repeat: Infinity, duration: 1, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      />
    </section>
  );
};

export default ErrorPage;
