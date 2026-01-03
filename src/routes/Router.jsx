// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import AllVehicles from "../pages/AllVehicles";
import AddVehicles from "../pages/AddVehicles";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import VehicleDetails from "../pages/VehicleDetails";
import ErrorPage from "../pages/ErrorPage";
import HowItWorks from "../pages/HowItWorks";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Profile from "../pages/dashboard/Profile";
import MyVehicles from "../pages/dashboard/MyVehicles";
import MyBookings from "../pages/dashboard/MyBookings";
import UpdateVehicle from "../pages/dashboard/UpdateVehicle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allVehicles",
        element: <AllVehicles />,
      },
      {
        path: "about",
        element: <HowItWorks></HowItWorks>
      },
      {
        path: "vehicle/:id",
        element: <VehicleDetails></VehicleDetails>
      },
      {
        path: "addVehicle",
        element: (
          <PrivateRoute>
            <AddVehicles />
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "updateDetails/:id",
        element: <PrivateRoute>
          <UpdateVehicle></UpdateVehicle>
        </PrivateRoute>
      }
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: "my-vehicles",
        element: <MyVehicles></MyVehicles>
      },
      {
        path: "my-bookings",
        element: <MyBookings></MyBookings>
      }
    ]
  }
]);
