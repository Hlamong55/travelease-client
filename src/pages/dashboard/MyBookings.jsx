import { useEffect, useState } from "react";
import { Link } from "react-router";
import { format } from "date-fns";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const MyBookings = () => {
  const axiosInstance = useAxios();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axiosInstance.get("/bookings");
        setBookings(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBookings();
  }, [axiosInstance]);

  const handleCancel = (bookingId, vehicleId) => {
    Swal.fire({
      title: "Cancel Booking?",
      text: "This will remove the booking permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6D28D9",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.delete(`/bookings/${bookingId}`);
          await axiosInstance.patch(`/vehicles/${vehicleId}`, { availability: "Available" });
          setBookings((prev) => prev.filter((b) => b._id !== bookingId));
          Swal.fire({
            icon: "success",
            title: "Booking Cancelled",
            timer: 1500,
            showConfirmButton: false,
          });
        } catch (err) {
          console.error(err);
          Swal.fire({
            icon: "error",
            title: "Cancellation Failed",
            text: "Something went wrong. Check console.",
          });
        }
      }
    });
  };



  return (
    <div className="px-4 md:px-8 lg:px-16 py-18 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        My <span className="text-secondary">Booking</span> Details
      </h1>

      {bookings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-1">
            <thead>
              <tr className="text-gray-300 bg-primary text-lg">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Vehicle Name</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Date Booked</th>
                <th className="px-4 py-3">Price/Day</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, index) => {
                const bookingDate = b.bookingDate ? new Date(b.bookingDate) : null;
                return (
                  <tr
                    key={b._id}
                    className="bg-white rounded-xl shadow-xl hover:shadow-md transition-all text-base h-16 align-middle"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-bold">{b.vehicleName}</td>
                    <td className="px-4 py-3 font-semibold">{b.owner || b.ownerName}</td>
                    <td className="px-4 py-3 font-semibold">
                      {bookingDate
                        ? format(bookingDate, "hh:mm a, dd MMM yyyy")
                        : "N/A"}
                    </td>
                    <td className="px-4 py-3 font-semibold">${b.pricePerDay}</td>

                    <td><p className="px-4 py-4 capitalize font-semibold badge badge-warning">{b.status}</p></td>


                    <td className="px-4 py-4 flex gap-2">
                      <Link
                        to={`/vehicle/${b.vehicleId}`}
                        className="px-3 py-1 font-semibold border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition "
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleCancel(b._id, b.vehicleId)}
                        className="px-3 py-1 font-semibold border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-20 space-y-4">
          <p className="text-gray-600 text-lg font-semibold">
            No bookings found.
          </p>
          <Link
            to="/allVehicles"
            className="inline-block text-gray-800 text-xl px-6 py-3 bg-secondary  rounded-xl hover:bg-purple-600 hover:text-white shadow-lg transform transition hover:scale-105 hover:shadow-2xl font-semibold"
          >
            Book Your Vehicles
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
