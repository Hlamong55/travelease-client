import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router";

const AllVehicles = () => {
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [sortCategory, setSortCategory] = useState("all");
  const [index, setIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Find Your Perfect Ride 🚗",
      subtitle: "Explore top-rated vehicles with just one click.",
      img: "https://i.ibb.co.com/Mk66vCtT/360-F-313468655-r-HXrxj-TPVPZB4-HBOVR6-NUm-UZNNsbh-CGO.jpg",
    },
    {
      id: 2,
      title: "Luxury & Comfort 🛣️",
      subtitle: "Choose from sedans, SUVs, and electric cars at best prices.",
      img: "https://i.ibb.co.com/0RbCp6ng/DARCARS-Toyota-of-Frederick-Small-SUV-model-ls3.webp",
    },
    {
      id: 3,
      title: "Book. Drive. Enjoy. 🌍",
      subtitle: "Seamless booking and trusted owners at your fingertips.",
      img: "https://i.ibb.co.com/pjvDYK8M/Ford-Mach-E-awd.webp",
    },
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    axiosInstance
      .get("/vehicles")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance]);

  const filteredVehicles =
    sortCategory === "all"
      ? vehicles
      : vehicles.filter((v) => v.category === sortCategory);

  const availableCars = filteredVehicles.filter(
    (v) => v.availability === "Available"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="relative w-full overflow-hidden bg-gray-900  shadow-xl  mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative h-[60vh] flex items-center justify-center"
          >
            <motion.img
              src={slides[index].img}
              alt={slides[index].title}
              className="absolute w-full  object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative z-10 text-center px-4"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {slides[index].title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                {slides[index].subtitle}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === i ? "bg-secondary scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto md:mt-20 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 md:gap-4">
          {/* available + sorting */}
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-3xl md:text-4xl font-bold  text-gray-700">
              Available Cars:{" "}
              <span className="text-secondary font-bold">{availableCars}</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <select
              className="border border-gray-500 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-secondary"
              value={sortCategory}
              onChange={(e) => setSortCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Electric">Electric</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>

        {/* cards */}
        {filteredVehicles.length === 0 ? (
          <p className="text-lg font-semibold text-center text-gray-600">No vehicles found!!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden hover:-translate-y-1 transition"
              >
                <div className="h-48 w-full overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={vehicle.coverImage}
                    alt={vehicle.vehicleName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                    <p className="badge badge-neutral ">
                    {vehicle.category}
                  </p>
                  <h3 className="text-xl font-bold">
                    {vehicle.vehicleName}
                  </h3>
                  <p
                    className={` font-bold badge badge-outline ${
                      vehicle.availability === "Available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {vehicle.availability}
                  </p>

                  <p className="text-gray-500 text-sm ">📍{vehicle.location}</p>

                    <div className="border-t-2 border-gray-500 border-dashed"></div>

                  <div className="flex justify-between items-center ">
                  <p className="text-lg font-bold text-purple-700">
                    ${vehicle.pricePerDay} / day
                  </p>
                  <Link
                    to={`/vehicle/${vehicle._id}`}
                    className="inline-block bg-secondary text-white px-2 py-1.5 rounded-lg hover:bg-purple-800 transition"
                  >
                    View Details
                  </Link>
                </div>
                </div>
                 
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllVehicles;
