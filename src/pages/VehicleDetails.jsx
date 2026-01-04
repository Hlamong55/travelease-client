import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaCarSide,
  FaMapMarkerAlt,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const VehicleDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/vehicles/${id}`)
      .then((res) => setVehicle(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance, id]);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-gray-700">
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

  /* BOOKING */
  const handleBooking = async () => {
    if (!user) {
      Swal.fire({
        title: "Login Required 🔒",
        text: "Please login to book this vehicle.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login Now",
        confirmButtonColor: "#7c3aed",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/login", { state: { from: `/vehicle/${id}` } });
        }
      });
      return;
    }

    const result = await Swal.fire({
      title: "Confirm Booking?",
      text: `Book ${vehicleName} for $${pricePerDay}/day?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#7c3aed",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Book It",
    });

    if (!result.isConfirmed) return;

    try {
      await axiosInstance.post("/bookings", {
        vehicleId: id,
        vehicleName,
        pricePerDay,
        owner,
        userEmail: user.email,
        status: "pending",
        bookingDate: new Date(),
      });

      await axiosInstance.patch(`/vehicles/${id}`, {
        availability: "Booked",
      });

      setVehicle((prev) => ({ ...prev, availability: "Booked" }));

      Swal.fire({
        icon: "success",
        title: "Booking Requested 🚗",
        text: "Your booking request has been sent!",
        confirmButtonColor: "#7c3aed",
      });
    } catch {
      Swal.fire("Error", "Booking failed. Try again.", "error");
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl overflow-hidden shadow-xl bg-black"
        >
          <img
            src={coverImage}
            alt={vehicleName}
            className="w-full h-[420px] object-contain"
          />
        </motion.div>

        {/* TITLE */}
        <div className="my-8 ml-32">
          <h1 className="text-4xl font-bold text-gray-800">{vehicleName}</h1>
          <p className="flex items-center gap-2 text-gray-700 mt-2 font-medium">
            <FaMapMarkerAlt className="text-purple-600" />
            {location}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-6">
            {/* DESCRIPTION */}
            <div className="bg-white rounded-2xl p-8 shadow space-y-5">
              <p className="text-gray-700 leading-relaxed text-lg">
                {description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-xl">
                <p className="flex items-center gap-2 font-semibold text-gray-700">
                  <FaCarSide className="text-purple-600" />
                  Category: <span className="text-gray-900">{category}</span>
                </p>

                <p className="flex items-center gap-2 font-semibold text-gray-700">
                  Availability:
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      availability === "Available"
                        ? "bg-green-600"
                        : "bg-red-500"
                    }`}
                  >
                    {availability}
                  </span>
                </p>
              </div>
            </div>

            {/* FEATURES */}
            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Vehicle Features
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 font-medium">
                <li>✔ Automatic Transmission</li>
                <li>✔ Air Conditioning</li>
                <li>✔ GPS Navigation</li>
                <li>✔ Comfortable Seating</li>
                <li>✔ Well Maintained</li>
                <li>✔ Long Trip Friendly</li>
              </ul>
            </div>

            {/* RULES */}
            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Rental Rules
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Valid driving license required</li>
                <li>Fuel cost not included</li>
                <li>Late return may incur charges</li>
                <li>No illegal usage allowed</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* PRICE */}
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <p className="text-gray-700 font-semibold flex justify-center items-center gap-2">
                <GrMoney className="text-purple-600" />
                Price Per Day
              </p>
              <h2 className="text-3xl font-bold text-purple-700 my-3">
                ${pricePerDay}
              </h2>

              <button
                onClick={handleBooking}
                disabled={availability !== "Available"}
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  availability === "Available"
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
              >
                {availability === "Available"
                  ? "Book This Vehicle"
                  : "Already Booked"}
              </button>
            </div>

            {/* OWNER */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                Vehicle Owner
              </h3>
              <div className="flex items-center gap-3">
                <FaUserCircle className="text-4xl text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-800">{owner}</p>
                  <p className="text-gray-700 text-sm">{userEmail}</p>
                </div>
              </div>
            </div>

            {/* RATING */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                User Rating
              </h3>
              <div className="flex gap-1 text-yellow-400 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="opacity-40" />
              </div>
              <p className="text-gray-700 mt-2 text-sm">
                4.2 average rating from renters
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleDetails;
