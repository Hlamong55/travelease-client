import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCarSide, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
import useAxios from "../hooks/useAxios";

const VehicleDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/vehicles/${id}`)
      .then((res) => setVehicle(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance, id]);

  if (!vehicle) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold text-gray-600">
        Loading vehicle details...
      </div>
    );
  }

  const {
    coverImage,
    vehicleName,
    description,
    category,
    location,
    availability,
    pricePerDay,
    owner,
    userEmail,
  } = vehicle;

  return (
    <section className="bg-gray-100 min-h-screen pb-16">
      {/* image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center w-full mt-6"
      >
        <div className="overflow-hidden rounded-3xl shadow-2xl max-w-7xl w-full">
          <img
            src={
              coverImage ||
              "https://i.ibb.co/QjkHXLkH/istockphoto-931069196-612x612.jpg"
            }
            alt={vehicleName}
            className="w-full h-[420px] object-cover transform transition-transform duration-700 hover:scale-105"
          />
        </div>
      </motion.div>

      {/* text div */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mt-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {vehicleName}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 bg-gray-100 p-5 rounded-xl">
            <p className="flex items-center gap-2 text-gray-700 font-semibold">
              <FaCarSide className="text-secondary" size={22}/> Category:{" "}
              <span className=" text-black">{category}</span>
            </p>
            <p className="flex items-center gap-2 text-gray-700 font-semibold">
              <FaMapMarkerAlt className="text-secondary" size={22}/> Location:{" "}
              <span className="text-black">{location}</span>
            </p>
            <p className="flex items-center gap-2 text-gray-700 font-semibold">
              <FaCheckCircle className="text-secondary" size={20}/> Availability:{" "}
              <span
                className={`px-3 py-1 rounded-full text-white ${
                  availability === "Available" ? "bg-green-600" : "bg-red-500"
                }`}
              >
                {availability}
              </span>
            </p>
            <p className="flex items-center gap-2 text-gray-700 font-semibold">
                <GrMoney className="text-secondary" size={22}/> 
              Price:{" "}
              <span className="text-black">${pricePerDay} / day</span>
            </p>
          </div>

          <div className="pt-4 text-center">
            <button className="bg-secondary hover:bg-purple-800 text-black hover:text-white font-semibold px-16 py-3 rounded-xl transition duration-300 shadow-md hover:shadow-xl">
              Book Now 
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Owner */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Owner Information
            </h3>
            <div className="bg-gray-100 rounded-xl p-1.5 flex items-center gap-4">
              <IoMdPerson className="text-secondary text-3xl" />
              <div>
                <p className="font-bold text-gray-800">{owner}</p>
                <p className="text-gray-700 text-sm">{userEmail}</p>
              </div>
            </div>
          </div>

          {/* static */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Car Highlights
            </h3>
            <ul className="text-gray-700 space-y-1 list-disc pl-6">
              <li>Fuel Type: Petrol / Hybrid</li>
              <li>Transmission: Automatic</li>
              <li>Seating Capacity: 5 Persons</li>
              <li>Air Conditioning: Yes</li>
              <li>GPS & Smart Dashboard</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VehicleDetails;
