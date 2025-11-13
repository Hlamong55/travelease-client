import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const MyVehicles = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState([]);


  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/vehicles/user/${user.email}`)
        .then((res) => setVehicles(res.data))
        .catch((err) => console.error(err));
    }
  }, [axiosInstance, user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This vehicle will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7C3AED",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/vehicles/${id}`)
          .then(() => {
            setVehicles((prev) => prev.filter((v) => v._id !== id));
            Swal.fire("Deleted!", "Vehicle has been deleted.", "success");
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete vehicle.", "error");
          });
      }
    });
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-20 text-center">
          My Vehicles: <span className="text-secondary">{vehicles.length}</span>
        </h1>

        {vehicles.length === 0 ? (
         <div className="text-center ">
             <p className="text-xl font-semibold mb-5 text-gray-600">
            No vehicles found!!
          </p>
          <Link to="/addVehicle" className="bg-secondary px-10 py-3 font-semibold text-xl rounded-xl text-gray-800 hover:bg-purple-800 hover:text-white shadow-lg transform transition hover:scale-105 hover:shadow-2xl">Add Vehicle</Link>
         </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {vehicles.map((vehicle, index) => (
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
                    src={
                      vehicle.coverImage ||
                      "https://i.ibb.co/QjkHXLkH/istockphoto-931069196-612x612.jpg"
                    }
                    alt={vehicle.vehicleName}
                    className="w-full h-full object-cover"
                  />
                </div>

        
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold">{vehicle.vehicleName}</h3>

                  <p
                    className={`font-bold badge badge-outline ${
                      vehicle.availability === "Available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {vehicle.availability}
                  </p>

                  <p className="text-lg font-bold text-purple-700">
                    ${vehicle.pricePerDay} / day
                  </p>

                    <div className="border-t-2 border-gray-500 border-dashed"></div>

                  {/* btns */}
                  <div className="flex gap-5 justify-center items-center pt-2">
                    <Link
                      to={`/vehicle/${vehicle._id}`}
                      className="bg-secondary text-white font-semibold text-sm px-3 py-2 rounded-lg hover:bg-purple-800 shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
                    >
                      View Details
                    </Link>

                    <Link
                      to={`/updateDetails/${vehicle._id}`}
                      className="bg-yellow-400 font-semibold text-sm px-3.5 py-2 rounded-lg hover:bg-yellow-600 hover:text-white shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
                    >
                      Update
                    </Link>

                    <button
                      onClick={() => handleDelete(vehicle._id)}
                      className="bg-red-500 text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-red-700 shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyVehicles;
