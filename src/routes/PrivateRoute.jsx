import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p className="text-center mt-20">Loading<span className="loading loading-dots loading-xl"></span></p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={ location?.pathname } replace />;
};

export default PrivateRoute;
