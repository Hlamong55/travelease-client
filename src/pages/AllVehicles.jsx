import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router";
import useAxios from "../hooks/useAxios";

const LIMIT = 12;

const AllVehicles = () => {
  const axiosInstance = useAxios();

  const [vehicles, setVehicles] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(true);
  const [sortCategory, setSortCategory] = useState("all");

  // ===== Slider =====
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

  //  AUTO SLIDER FIX
useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 3000);

  return () => clearInterval(interval);
}, [slides.length]);


  useEffect(() => {
    setSearchParams({ page });
  }, [page, setSearchParams]);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/vehicles?page=${page}&limit=${LIMIT}`)
      .then((res) => {
        setVehicles(res.data.vehicles);
        setTotal(res.data.total);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [axiosInstance, page]);

  const filteredVehicles =
    sortCategory === "all"
      ? vehicles
      : vehicles.filter((v) => v.category === sortCategory);

  const availableCars = filteredVehicles.filter(
    (v) => v.availability === "Available"
  ).length;

  const totalPages = Math.ceil(total / LIMIT);

  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl shadow-md p-4 animate-pulse">
      <div className="h-48 bg-gray-300 rounded-xl mb-4"></div>
      <div className="h-4 bg-gray-300 w-1/2 mb-2 rounded"></div>
      <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Slider */}
      <div className="relative w-full overflow-hidden bg-gray-900 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="relative h-[60vh] flex items-center justify-center"
          >
            <motion.img
              src={slides[index].img}
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {slides[index].title}
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                {slides[index].subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* body */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold text-gray-700">
            Available Cars:{" "}
            <span className="text-secondary">{availableCars}</span>
          </h2>

          <select
            className="border rounded-lg px-4 py-2"
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {loading
            ? Array.from({ length: LIMIT }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden hover:-translate-y-1 transition"
                >
                  <div className="h-48 w-full overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={vehicle.coverImage}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 space-y-2">
                    <p className="badge badge-neutral">{vehicle.category}</p>

                    <h3 className="text-xl font-bold">{vehicle.vehicleName}</h3>

                    <p
                      className={`badge badge-outline font-bold ${
                        vehicle.availability === "Available"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {vehicle.availability}
                    </p>

                    <p className="text-gray-500 text-sm">
                      📍 {vehicle.location}
                    </p>

                    <div className="border-t border-dashed my-2"></div>

                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold text-purple-700">
                        ${vehicle.pricePerDay} / day
                      </p>

                      <Link
                        to={`/vehicle/${vehicle._id}`}
                        className="bg-secondary text-white px-3 py-1.5 rounded-lg hover:bg-purple-800 transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>

        {/* Pagination  */}
        <div className="flex justify-center items-center gap-4 py-10">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className={`px-6 py-2 rounded-lg font-semibold border ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-secondary hover:text-white"
            }`}
          >
            Previous
          </button>

          <span className="font-medium text-gray-700 btn btn-outline">
            {page}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className={`px-6 py-2 rounded-lg font-semibold border ${
              page === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-secondary hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllVehicles;
