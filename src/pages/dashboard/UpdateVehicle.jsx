import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";


const UpdateVehicle = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/vehicles/${id}`)
      .then((res) => {
        setVehicle(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosInstance, id]);


  const handleUpdateVehicle = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedVehicle = {
      vehicleName: form.name.value,
      owner: form.owner.value,
      category: form.category.value,
      pricePerDay: parseFloat(form.price.value),
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
      coverImage: form.image.value,
      userEmail: user?.email,
    };

    axiosInstance
      .put(`/vehicles/${id}`, updatedVehicle)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Vehicle Updated Successfully!",
          showConfirmButton: false,
          timer: 1800,
        });
        navigate("/my-vehicles");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed to Update Vehicle!",
        });
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-gray-600">
        Loading vehicle data...
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold text-gray-600">
        Vehicle not found!!
      </div>
    );
  }

  return (
    <section
      className="min-h-screen py-12 bg-gray-100"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/ns0GZf3C/gettyimages-1409617826-640x640.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Update <span className="text-secondary">Vehicle</span> Information
        </motion.h2>

        <form
          onSubmit={handleUpdateVehicle}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Vehicle Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={vehicle.vehicleName}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Owner Name
              </label>
              <input
                type="text"
                name="owner"
                defaultValue={vehicle.owner}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={vehicle.category}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Price Per Day
              </label>
              <input
                type="number"
                name="price"
                min="1"
                step="any"
                defaultValue={vehicle.pricePerDay}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                defaultValue={vehicle.location}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Availability
              </label>
              <select
                name="availability"
                defaultValue={vehicle.availability}
                className="select select-bordered w-full"
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Cover Image URL
              </label>
              <input
                type="text"
                name="image"
                defaultValue={vehicle.coverImage}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={vehicle.description}
                rows="4"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-center pt-6">
            <button
              type="submit"
              className="bg-secondary hover:bg-purple-800 text-white font-semibold px-10 py-3 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
            >
              Update Vehicle
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateVehicle;
