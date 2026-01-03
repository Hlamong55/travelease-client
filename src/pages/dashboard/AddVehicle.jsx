import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";


const AddVehicle = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const newVehicle = {
      vehicleName: form.name.value,
      owner: form.owner.value,
      category: form.category.value,
      pricePerDay: parseFloat(form.price.value),
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
      coverImage: form.coverImage.value,
      userEmail: user?.email || "Not Logged In",
      createdAt: new Date(),
    };

    try {
      const res = await axiosInstance.post("/vehicles", newVehicle);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Vehicle Added Successfully!",
          text: "Your vehicle is now listed.",
          icon: "success",
          confirmButtonColor: "#7C3AED",
        });
        form.reset();
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while adding the vehicle.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
  className="min-h-screen py-16 bg-cover bg-center bg-repeat"
  style={{
    backgroundImage: "url('https://i.ibb.co/ns0GZf3C/gettyimages-1409617826-640x640.jpg')",
  }}
>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gray-200 p-10 rounded-3xl shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Register your <span className="text-secondary">Vehicle!</span> 
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* car name */}
            <div>
              <label className="text-lg font-semibold text-gray-700">Vehicle Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            {/* owner */}
            <div>
              <label className="text-lg font-semibold text-gray-700">Owner Name</label>
              <input
                type="text"
                name="owner"
                required
                className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* category */}
            <div>
              <label className="text-lg font-semibold text-gray-700">Category</label>
              <select
                name="category"
                required
                className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="">Select Category</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Electric">Electric</option>
                <option value="Van">Van</option>
              </select>
            </div>

            {/* price */}
            <div>
              <label className="text-lg font-semibold text-gray-700">Price Per Day ($)</label>
              <input
                type="number"
                name="price"
                min="1"
                required
                className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* location */}
            <div>
              <label className="text-lg font-semibold text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                required
                className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            {/* available */}
            <div>
              <label className="text-lg font-semibold text-gray-700">Availability</label>
              <select
                name="availability"
                required
                className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
              </select>
            </div>
          </div>

          {/* car image */}
          <div>
            <label className="text-lg font-semibold text-gray-700">Car Image URL</label>
            <input
              type="text"
              name="coverImage"
              required
              placeholder="https://example.com/car.jpg"
              className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          {/* description */}
          <div>
            <label className="text-lg font-semibold text-gray-700">Description</label>
            <textarea
              name="description"
              rows="4"
              required
              className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>
          </div>

          {/* email */}
          <div>
            <label className="text-lg font-semibold text-gray-700">Your Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full mt-2 p-3 border rounded-xl bg-gray-200"
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`px-16 py-3 font-semibold rounded-xl transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-secondary hover:bg-purple-800 text-white shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
              }`}
            >
              {loading ? "Adding..." : "Add Vehicle"}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default AddVehicle;
