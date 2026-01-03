import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { auth } from "../../firebase/firebase.init";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");


  const [previewPhoto, setPreviewPhoto] = useState(
    user?.photoURL || "https://i.ibb.co/2kR8Y0M/default-user.png"
  );

  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Update Profile?",
      text: "Are you sure you want to save these changes?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Update",
    });

    if (!result.isConfirmed) return;

    try {
      setLoading(true);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      setPreviewPhoto(photo);

      Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        text: "Your profile information has been updated successfully.",
        timer: 1800,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="my-8 text-center">
        <h2 className="text-3xl font-bold">
          My <span className="text-secondary">Profile</span>
        </h2>
        <p className="text-gray-600">
          View and update your personal information
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border rounded-2xl p-8 shadow-sm">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
          <img
            src={previewPhoto}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-primary object-cover"
          />

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">
              {user?.displayName || "Anonymous User"}
            </h3>
            <p className="text-gray-500">{user?.email}</p>

            <span className="inline-block mt-3 px-4 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium">
              User
            </span>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Profile Image URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="mt-1 w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm font-medium text-gray-600">Role</label>
            <input
              type="text"
              value="Car Owner"
              readOnly
              className="mt-1 w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
