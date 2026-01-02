import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { differenceInDays } from "date-fns";

const LatestVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get("/latest-vehicle")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance]);

  return (
    <section className="bg-gray-100 py-20 border-t-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-gray-700"
        >
          Latest <span className="text-secondary">Vehicles</span>🔥
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {vehicles.map((v, index) => {
            const isNew = differenceInDays(new Date(), new Date(v.createdAt)) <= 5;
            return (
              <motion.div
                key={v._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
              >
                {isNew && (
                  <span className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                    NEW
                  </span>
                )}
                <img
                  src={
                    v.coverImage ||
                    "https://i.ibb.co/QjkHXLkH/istockphoto-931069196-612x612.jpg"
                  }
                  alt={v.name}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4 text-left">
                  <p className="badge badge-neutral mb-2">{v.category}</p>
                  <h3 className="text-xl font-bold mb-2">{v.vehicleName}</h3>
                  <p
                    className={` font-bold badge badge-outline ${
                      v.availability === "Available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {v.availability}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">📍{v.location}</p>

                  <div className="flex justify-between items-center mt-3.5 ">
                    <p className="text-lg font-bold text-purple-700">
                      ${v.pricePerDay} / day
                    </p>
                    <Link
                      to={`/vehicle/${v._id}`}
                      className="inline-block bg-secondary text-white px-2 py-2 rounded-lg hover:bg-purple-800 shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestVehicles;
